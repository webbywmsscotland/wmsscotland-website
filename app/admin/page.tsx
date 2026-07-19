import { createClient } from "@supabase/supabase-js";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";

import EnquiryCard from "../components/admin/EnquiryCard";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function AdminPage() {
  const { data: enquiries } = await supabase
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  const newCount =
    enquiries?.filter((e) => e.status === "New").length ?? 0;

  const quotedCount =
    enquiries?.filter((e) => e.status === "Quoted").length ?? 0;

  const bookedCount =
    enquiries?.filter((e) => e.status === "Booked").length ?? 0;

  const completedCount =
    enquiries?.filter((e) => e.status === "Completed").length ?? 0;

  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <h1 className="text-5xl font-black">
          WMS <span className="text-cyan-400">OS</span>
        </h1>

        <p className="mt-3 text-lg text-gray-400">
          Welcome back, Scott 👋
        </p>

        {/* Dashboard Stats */}

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-[#10192d] p-6">
            <ClipboardList
              className="mb-4 text-red-400"
              size={30}
            />

            <p className="text-gray-400">
              New
            </p>

            <h2 className="text-5xl font-black">
              {newCount}
            </h2>

          </div>

          <div className="rounded-3xl bg-[#10192d] p-6">

            <Clock
              className="mb-4 text-orange-400"
              size={30}
            />

            <p className="text-gray-400">
              Quoted
            </p>

            <h2 className="text-5xl font-black">
              {quotedCount}
            </h2>

          </div>

          <div className="rounded-3xl bg-[#10192d] p-6">

            <CalendarCheck
              className="mb-4 text-green-400"
              size={30}
            />

            <p className="text-gray-400">
              Booked
            </p>

            <h2 className="text-5xl font-black">
              {bookedCount}
            </h2>

          </div>

          <div className="rounded-3xl bg-[#10192d] p-6">

            <CheckCircle2
              className="mb-4 text-cyan-400"
              size={30}
            />

            <p className="text-gray-400">
              Completed
            </p>

            <h2 className="text-5xl font-black">
              {completedCount}
            </h2>

          </div>

        </div>

        {/* Latest Enquiries */}

        <div className="mt-14">

          <h2 className="mb-8 text-3xl font-black">
            Latest Enquiries
          </h2>

          <div className="space-y-6">

            {enquiries?.length ? (
              enquiries.map((enquiry) => (
                <EnquiryCard
                  key={enquiry.id}
                  enquiry={enquiry}
                />
              ))
            ) : (
              <div className="rounded-3xl bg-[#10192d] p-12 text-center">

                <h3 className="text-2xl font-bold">
                  No enquiries yet
                </h3>

                <p className="mt-3 text-gray-400">
                  Your first website enquiry will appear here.
                </p>

              </div>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}