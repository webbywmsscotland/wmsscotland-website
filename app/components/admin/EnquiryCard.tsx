"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Car,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";

interface Enquiry {
  id: number;
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  registration: string;
  location: string;
  message: string;
  status: string;
  created_at: string;
}

interface Props {
  enquiry: Enquiry;
}

function getStatusColour(status: string) {
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

export default function EnquiryCard({ enquiry }: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

        <div>

          <span
            className={`rounded-full px-4 py-2 text-sm font-bold ${getStatusColour(
              enquiry.status
            )}`}
          >
            {enquiry.status}
          </span>

          <h2 className="mt-5 text-3xl font-black">
            {enquiry.name}
          </h2>

          <div className="mt-5 space-y-3 text-gray-300">

            <div className="flex items-center gap-3">
              <Car size={18} />
              {enquiry.vehicle}
              {enquiry.registration &&
                ` (${enquiry.registration})`}
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              {enquiry.location}
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              {enquiry.phone}
            </div>

            {enquiry.email && (
              <div className="flex items-center gap-3">
                <Mail size={18} />
                {enquiry.email}
              </div>
            )}

          </div>

        </div>

        <div className="flex max-w-md flex-col justify-between">

          <p className="leading-7 text-gray-300">
            {enquiry.message}
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={16} />
            {new Date(enquiry.created_at).toLocaleString("en-GB")}
          </div>

        </div>

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        <a
          href={`tel:${enquiry.phone}`}
          className="rounded-xl bg-cyan-500 px-5 py-3 font-bold text-black transition hover:bg-cyan-400"
        >
          📞 Call
        </a>

        <a
          href={`https://wa.me/${enquiry.phone.replace(/\D/g, "")}`}
          target="_blank"
          className="rounded-xl border border-cyan-500 px-5 py-3 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
        >
          💬 WhatsApp
        </a>

        <Link
          href={`/admin/enquiries/${enquiry.id}`}
          className="ml-auto flex items-center gap-2 rounded-xl border border-cyan-500 px-5 py-3 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
        >
          View Details
          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  );
}