import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

import { enquirySchema } from "@/lib/validation";
import { sendOwnerNotification } from "@/lib/notifications";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the incoming data
    const enquiry = enquirySchema.parse(body);

    // Save to database
    const { data, error } = await supabase
      .from("enquiries")
      .insert({
        name: enquiry.name,
        phone: enquiry.phone,
        email: enquiry.email,
        vehicle: enquiry.vehicle,
        registration: enquiry.registration,
        location: enquiry.location,
        message: enquiry.message,
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

    // Send notification email
    await sendOwnerNotification(enquiry);

    return NextResponse.json({
      success: true,
      enquiry: data,
    });

  } catch (error: unknown) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to process enquiry.",
      },
      {
        status: 400,
      }
    );

  }

}