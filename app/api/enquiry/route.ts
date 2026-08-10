import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const enquiry = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      vehicle: String(formData.get("vehicle") ?? ""),
      registration: String(formData.get("registration") ?? ""),
      location: String(formData.get("location") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const { data, error } = await supabaseAdmin
      .from("enquiries")
      .insert({
        name: enquiry.name,
        phone: enquiry.phone,
        email: enquiry.email,
        vehicle: enquiry.vehicle,
        registration: enquiry.registration,
        location: enquiry.location,
        message: enquiry.message,
        status: "New",
        source: "Website",
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      enquiry: data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}