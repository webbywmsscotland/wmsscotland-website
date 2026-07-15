import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { resend } from "@/lib/email";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Save the enquiry
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
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    // Send notification email
    await resend.emails.send({
      from: "WMS Scotland <onboarding@resend.dev>",
      to: ["info@wmsscotland.com"],
      subject: `🚗 New Quote Request - ${body.name}`,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Vehicle:</strong> ${body.vehicle}</p>
        <p><strong>Registration:</strong> ${body.registration}</p>
        <p><strong>Location:</strong> ${body.location}</p>

        <hr />

        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      enquiry: data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}