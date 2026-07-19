import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { id, status } = await request.json();

    const allowedStatuses = [
      "New",
      "Quoted",
      "Booked",
      "Completed",
    ];

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid status",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await supabase
      .from("enquiries")
      .update({
        status,
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