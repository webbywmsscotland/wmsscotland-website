import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name?.trim()) {
      return NextResponse.json(
        { error: "Customer name is required." },
        { status: 400 }
      );
    }

    if (!body.phone?.trim()) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!body.booking_date) {
      return NextResponse.json(
        { error: "Booking date is required." },
        { status: 400 }
      );
    }

    if (!body.booking_time) {
      return NextResponse.json(
        { error: "Booking time is required." },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("enquiries")
      .insert({
        name: body.name.trim(),
        phone: body.phone.trim(),
        vehicle: body.vehicle?.trim() || null,
        registration: body.registration?.trim().toUpperCase() || null,
        location: body.location?.trim() || null,
        message: body.message?.trim() || null,
        booking_date: body.booking_date,
        booking_time: body.booking_time,
        status: "booked",
        source: "manual",
      });

    if (error) {
      console.error("Supabase booking error:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err: any) {
    console.error("Booking API error:", err);

    return NextResponse.json(
      {
        error: err?.message || "Server error",
      },
      { status: 500 }
    );
  }
}