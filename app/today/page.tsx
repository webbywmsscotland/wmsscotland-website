import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function TodayPage() {
  const today = new Date().toISOString().split("T")[0];

  const { data: jobs } = await supabase
    .from("enquiries")
    .select("*")
    .eq("status", "Booked")
    .eq("booked_date", today)
    .order("booked_time", { ascending: true });

  return (
    <main className="min-h-screen bg-[#0b1220] p-4 text-white">
      <div className="mx-auto max-w-3xl space-y-4">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black">
              Today's Jobs
            </h1>

            <p className="text-gray-400">
              {new Date().toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <Link
            href="/admin"
            className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300"
          >
            Admin
          </Link>
        </div>

        {jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-3xl border border-cyan-500/20 bg-[#101935] p-5 shadow-lg shadow-cyan-500/5"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="text-cyan-300 font-bold text-sm uppercase tracking-wide">
                    {job.booked_time || "No time set"}
                  </div>

                  <h2 className="mt-1 text-2xl font-black">
                    {job.name}
                  </h2>

                  <p className="mt-2 text-gray-300">
                    {job.vehicle}
                    {job.registration
                      ? ` (${job.registration})`
                      : ""}
                  </p>

                  <p className="text-gray-400">
                    📍 {job.location}
                  </p>

                </div>

                <Link
                  href={`/admin/enquiries/${job.id}`}
                  className="rounded-xl border border-cyan-500/30 px-3 py-2 text-sm text-cyan-300"
                >
                  Details
                </Link>

              </div>

              <div className="mt-4 rounded-2xl bg-[#0b1220] p-4 text-gray-200">
                {job.message}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

                <a
                  href={`tel:${job.phone}`}
                  className="flex items-center justify-center rounded-xl bg-cyan-500 px-4 py-3 font-bold text-black"
                >
                  📞 Call
                </a>

                <a
                  href={`https://wa.me/${job.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  className="flex items-center justify-center rounded-xl border border-cyan-500/30 px-4 py-3 font-bold text-cyan-300"
                >
                  💬 WhatsApp
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(job.location)}`}
                  target="_blank"
                  className="flex items-center justify-center rounded-xl border border-cyan-500/30 px-4 py-3 font-bold text-cyan-300"
                >
                  🗺️ Maps
                </a>

                <Link
                  href={`/admin/enquiries/${job.id}`}
                  className="flex items-center justify-center rounded-xl border border-cyan-500/30 px-4 py-3 font-bold text-cyan-300"
                >
                  ✔️ Done
                </Link>

              </div>

            </div>
          ))
        ) : (
          <div className="rounded-3xl border border-cyan-500/20 bg-[#101935] p-8 text-center text-gray-400">
            No jobs booked for today.
          </div>
        )}

      </div>
    </main>
  );
}