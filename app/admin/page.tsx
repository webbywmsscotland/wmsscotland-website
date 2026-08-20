import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import EnquiryCard from "../components/admin/EnquiryCard";
export const dynamic = "force-dynamic";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function AdminPage() {
  const { data: enquiries } = await supabase
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  const activeJobs =
    enquiries?.filter(
      (e) => e.status !== "completed" && e.status !== "cancelled"
    ) || [];

  const historyJobs =
    enquiries?.filter(
      (e) => e.status === "completed" || e.status === "cancelled"
    ) || [];

  return (
    <main className="min-h-screen bg-[#08111F] px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-black">Admin Dashboard</h1>
            <p className="mt-2 text-gray-400">
              Manage enquiries, bookings and completed jobs
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/today"
              className="rounded-xl border border-cyan-500 px-4 py-3 font-semibold text-cyan-400 hover:bg-cyan-500/10"
            >
              Today's Jobs
            </Link>

            <Link
              href="/"
              className="rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-black hover:bg-cyan-400"
            >
              View Website
            </Link>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-6">
            <p className="text-sm text-gray-400">Active Jobs</p>
            <p className="mt-2 text-3xl font-black text-cyan-400">
              {activeJobs.length}
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-6">
            <p className="text-sm text-gray-400">Completed / Cancelled</p>
            <p className="mt-2 text-3xl font-black text-cyan-400">
              {historyJobs.length}
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-6">
            <p className="text-sm text-gray-400">Total Enquiries</p>
            <p className="mt-2 text-3xl font-black text-cyan-400">
              {enquiries?.length || 0}
            </p>
          </div>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black">Live Jobs</h2>
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
              {activeJobs.length} active
            </span>
          </div>

          {activeJobs.length === 0 ? (
            <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-8 text-center text-gray-400">
              No active jobs.
            </div>
          ) : (
            activeJobs.map((enquiry) => (
              <EnquiryCard key={enquiry.id} enquiry={enquiry} />
            ))
          )}
        </section>

        <details className="mt-8 rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-6">
          <summary className="cursor-pointer text-xl font-bold text-white">
            History (Completed & Cancelled)
          </summary>

          <div className="mt-6 space-y-4">
            {historyJobs.length === 0 ? (
              <div className="text-center text-gray-400">
                No completed or cancelled jobs yet.
              </div>
            ) : (
              historyJobs.map((enquiry) => (
                <EnquiryCard key={enquiry.id} enquiry={enquiry} />
              ))
            )}
          </div>
        </details>
      </div>
    </main>
  );
}