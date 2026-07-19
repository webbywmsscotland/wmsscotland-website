import { NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabase-admin";
import { uploadEnquiryPhotos } from "@/lib/storage";
import { enquirySchema } from "@/lib/validation";
import { sendOwnerNotification } from "@/lib/notifications";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const enquiry = enquirySchema.parse({
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      vehicle: String(formData.get("vehicle") ?? ""),
      registration: String(formData.get("registration") ?? ""),
      location: String(formData.get("location") ?? ""),
      message: String(formData.get("message") ?? ""),
    });

    const files = formData
      .getAll("photos")
      .filter((item): item is File => item instanceof File && item.size > 0);

    let uploadedPhotos: string[] = [];

    if (files.length > 0) {
      uploadedPhotos = await uploadEnquiryPhotos(files);
    }

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
        photos: uploadedPhotos,
        status: "New",
        source: "Website",
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    await sendOwnerNotification(enquiry);

    return NextResponse.json({
      success: true,
      enquiry: data,
    });
  } catch (error) {
    console.error(error);

    const message =
      error instanceof Error ? error.message : "Unable to process enquiry.";

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      {
        status: 400,
      }
    );
  }
}