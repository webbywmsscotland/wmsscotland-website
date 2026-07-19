import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function uploadEnquiryPhoto(file: File) {
  const extension = file.name.split(".").pop();

  const fileName =
    `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const path = `enquiries/${fileName}`;

  const { error } = await supabase.storage
    .from("enquiry-photos")
    .upload(path, file);

  if (error) {
    throw error;
  }

  return path;
}