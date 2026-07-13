import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

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
      })
      .select()
      .single();

    if (error) {
      console.error(error);

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      enquiry: data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}