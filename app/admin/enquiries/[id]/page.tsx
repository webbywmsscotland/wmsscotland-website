import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import BookingForm from "@/app/components/admin/BookingForm";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function EnquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: enquiry } = await supabase
    .from("enquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (!enquiry) {
    return (
      <main className="min-h-screen bg-[#0b1220] p-6 text-white">
        Enquiry not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b1220] p-6 text-white">
      <div className="mx-auto max-w-5xl space-y-6">

        <Link
          href="/admin"
          className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
        >
          ← Back to Dashboard
        </Link>

        <div className="rounded-3xl border border-cyan-500/20 bg-[#101935] p-6">

          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">

            <div className="space-y-3">

              <div className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300">
                {enquiry.status}
              </div>

              <h1 className="text-4xl font-black">
                {enquiry.name}
              </h1>

              <div className="space-y-2 text-gray-300">

                <p>
                  <strong>Vehicle:</strong> {enquiry.vehicle}
                  {enquiry.registration
                    ? ` (${enquiry.registration})`
                    : ""}
                </p>

                <p>
                  <strong>Location:</strong> {enquiry.location}
                </p>

                <p>
                  <strong>Phone:</strong> {enquiry.phone}
                </p>

                {enquiry.email && (
                  <p>
                    <strong>Email:</strong> {enquiry.email}
                  </p>
                )}

              </div>

            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-[#0b1220] p-5 text-right">

              <div className="text-sm text-cyan-300">
                Received
              </div>

              <div className="mt-2 text-lg font-semibold">
                {new Date(enquiry.created_at).toLocaleString("en-GB")}
              </div>

              {enquiry.booked_date && (
                <div className="mt-4 border-t border-cyan-500/20 pt-4">

                  <div className="text-sm text-cyan-300">
                    Booked for
                  </div>

                  <div className="mt-2 text-lg font-semibold">
                    {new Date(enquiry.booked_date).toLocaleDateString(
                      "en-GB",
                      {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </div>

                  {enquiry.booked_time && (
                    <div className="text-gray-400">
                      {enquiry.booked_time}
                    </div>
                  )}

                </div>
              )}

            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-[#101935] p-6">

          <h2 className="text-2xl font-black">
            Customer Message
          </h2>

          <div className="mt-4 rounded-2xl border border-cyan-500/10 bg-[#0b1220] p-5 text-gray-200">
            {enquiry.message}
          </div>

        </div>

        <BookingForm enquiry={enquiry} />

      </div>
    </main>
  );
}