import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import {
  ArrowLeft,
  Phone,
  Mail,
  Car,
  MapPin,
  Calendar,
  ClipboardList,
} from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

function statusColour(status: string) {
  switch (status) {
    case "New":
      return "bg-red-500/20 text-red-400";
    case "Quoted":
      return "bg-orange-500/20 text-orange-400";
    case "Booked":
      return "bg-green-500/20 text-green-400";
    case "Completed":
      return "bg-cyan-500/20 text-cyan-400";
    default:
      return "bg-gray-500/20 text-gray-400";
  }
}

export default async function EnquiryPage({ params }: PageProps) {
  const { id } = await params;

  const { data: enquiry } = await supabase
    .from("enquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (!enquiry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">

        <Link
          href="/admin"
          className="mb-10 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-bold ${statusColour(
                  enquiry.status
                )}`}
              >
                {enquiry.status}
              </span>

              <h1 className="mt-6 text-5xl font-black">
                {enquiry.name}
              </h1>

            </div>

            <div className="text-right text-gray-400">

              <div className="flex items-center justify-end gap-2">
                <Calendar size={18} />
                {new Date(enquiry.created_at).toLocaleString("en-GB")}
              </div>

            </div>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-[#0b1220] p-6">

              <h2 className="mb-6 text-2xl font-bold">
                Customer Details
              </h2>

              <div className="space-y-4">

                <a
                  href={`tel:${enquiry.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
                >
                  <Phone size={18} />
                  {enquiry.phone}
                </a>

                {enquiry.email && (
                  <a
                    href={`mailto:${enquiry.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
                  >
                    <Mail size={18} />
                    {enquiry.email}
                  </a>
                )}

                <div className="flex items-center gap-3 text-gray-300">
                  <Car size={18} />
                  {enquiry.vehicle}
                  {enquiry.registration &&
                    ` (${enquiry.registration})`}
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} />
                  {enquiry.location}
                </div>

              </div>

            </div>

            <div className="rounded-2xl bg-[#0b1220] p-6">

              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                <ClipboardList size={22} />
                Customer Message
              </h2>

              <p className="whitespace-pre-wrap leading-8 text-gray-300">
                {enquiry.message}
              </p>

            </div>

          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">

            <a
              href={`tel:${enquiry.phone}`}
              className="rounded-2xl bg-cyan-500 py-4 text-center font-bold text-black transition hover:bg-cyan-400"
            >
              📞 Call Customer
            </a>

            <a
              href={`https://wa.me/${enquiry.phone.replace(/\D/g, "")}`}
              target="_blank"
              className="rounded-2xl border border-cyan-500 py-4 text-center font-bold text-cyan-300 transition hover:bg-cyan-500/10"
            >
              💬 WhatsApp
            </a>

            {enquiry.email ? (
              <a
                href={`mailto:${enquiry.email}`}
                className="rounded-2xl border border-cyan-500 py-4 text-center font-bold text-cyan-300 transition hover:bg-cyan-500/10"
              >
                ✉️ Email
              </a>
            ) : (
              <div className="rounded-2xl border border-gray-700 py-4 text-center text-gray-500">
                No Email Provided
              </div>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}