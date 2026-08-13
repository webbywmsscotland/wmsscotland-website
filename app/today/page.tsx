import { createClient } from "@supabase/supabase-js";
import ManualBookingForm from "../components/admin/ManualBookingForm";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const dynamic = "force-dynamic";

export default async function TodayPage() {
  const today = new Date().toISOString().split("T")[0];

  const { data: jobs } = await supabase
    .from("enquiries")
    .select("*")
    .eq("booking_date", today)
    .eq("status", "booked")
    .order("booking_time", { ascending: true });

  return (
    <main className="min-h-screen bg-[#08111F] text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-black">Today's Jobs</h1>
            <p className="mt-2 text-gray-400">
              {new Date().toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <a
            href="/admin"
            className="inline-flex items-center justify-center rounded-xl border border-cyan-500 px-4 py-2 font-bold text-cyan-300 hover:bg-cyan-500/10"
          >
            ← Back to Dashboard
          </a>
        </div>

        <div className="mb-8">
          <ManualBookingForm />
        </div>

        {jobs && jobs.length > 0 ? (
          <div className="grid gap-6">
            {jobs.map((job: any) => (
              <div
                key={job.id}
                className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-6 shadow-lg"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-bold text-cyan-300">
                        {job.booking_time || "--:--"}
                      </div>
                      <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-bold text-green-300">
                        Booked
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-black text-white">
                        {job.name}
                      </h2>
                      <p className="mt-1 text-gray-400">
                        {job.vehicle || "Vehicle not specified"}
                      </p>
                    </div>

                    <div className="grid gap-2 text-sm text-gray-300 md:grid-cols-2">
                      <p>📍 {job.location || "No location"}</p>
                      <p>📞 {job.phone || "No phone"}</p>
                    </div>

                    {job.message && (
                      <div className="rounded-2xl bg-[#08111F] p-4 text-gray-300">
                        {job.message}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 md:min-w-[160px]">
                    <a
                      href={`tel:${job.phone}`}
                      className="rounded-xl bg-cyan-500 px-4 py-3 text-center font-bold text-black hover:bg-cyan-400"
                    >
                      Call
                    </a>

                    <a
                      href={`https://wa.me/44${job.phone?.replace(/^0/, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-cyan-500 px-4 py-3 text-center font-bold text-cyan-300 hover:bg-cyan-500/10"
                    >
                      WhatsApp
                    </a>

                    <a
                      href={`/admin/enquiries/${job.id}`}
                      className="rounded-xl border border-white/10 px-4 py-3 text-center font-bold text-gray-200 hover:bg-white/5"
                    >
                      View Job
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-3xl">
              📅
            </div>
            <h2 className="text-2xl font-black text-white">
              No jobs booked for today
            </h2>
            <p className="mt-3 text-gray-400">
              Add a booking from a call or text using the button above.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}