import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const {
      id,
      estimate_from,
      estimate_to,
      admin_notes,
      labour_charge,
      parts_charge,
      callout_charge,
    } = await request.json();

    const { data, error } = await supabase
      .from("enquiries")
      .update({
        estimate_from,
        estimate_to,
        admin_notes,
        labour_charge,
        parts_charge,
        callout_charge,
        status: "Quoted",
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
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
        error: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}