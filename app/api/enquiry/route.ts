import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendOwnerNotification } from "@/lib/notifications";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Save enquiry to Supabase
    const { data, error } = await supabase
      .from("enquiries")
      .insert({
        name: body.name,
        phone: body.phone,
        email: body.email,
        vehicle: body.vehicle,
        registration: body.registration,
        location: body.location,
        message: body.message,
        photos: "",
        status: "New",
        source: "Website",
      })
      .select()
      .single();

    if (error) {
      console.error("Database Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    // Send email notification to Scott
    await sendOwnerNotification({
      name: body.name,
      phone: body.phone,
      email: body.email,
      vehicle: body.vehicle,
      registration: body.registration,
      location: body.location,
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      enquiry: data,
    });
  } catch (error) {
    console.error("Server Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}