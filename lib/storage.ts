import { randomUUID } from "crypto";
import { supabaseAdmin } from "./supabase-admin";

export async function uploadEnquiryPhotos(files: File[]): Promise<string[]> {
  const uploadedPaths: string[] = [];

  for (const file of files) {
    const extension = file.name.split(".").pop() || "jpg";
    const filename = `${randomUUID()}.${extension}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data, error } = await supabaseAdmin.storage
      .from("enquiry-photos")
      .upload(filename, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      throw new Error(`Failed to upload ${file.name}: ${error.message}`);
    }

    uploadedPaths.push(data.path);
  }

  return uploadedPaths;
}