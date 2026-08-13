import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { error } = await supabase.from("enquiries").insert({
      name: body.name,
      phone: body.phone,
      vehicle: body.vehicle,
      location: body.location,
      message: body.message,
      booking_date: body.booking_date || null,
      booking_time: body.booking_time || null,
      status: "booked",
      source: "manual",
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}