"use client";

import { useState } from "react";
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
  estimate_from?: number | null;
  estimate_to?: number | null;
  admin_notes?: string | null;
  labour_charge?: number | null;
  parts_charge?: number | null;
  callout_charge?: number | null;
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
  const [showQuote, setShowQuote] = useState(false);
  const [estimateFrom, setEstimateFrom] = useState(
    enquiry.estimate_from?.toString() || ""
  );
  const [estimateTo, setEstimateTo] = useState(
    enquiry.estimate_to?.toString() || ""
  );
  const [adminNotes, setAdminNotes] = useState(
    enquiry.admin_notes || ""
  );

  const [labour, setLabour] = useState(
    enquiry.labour_charge?.toString() || ""
  );
  const [parts, setParts] = useState(
    enquiry.parts_charge?.toString() || ""
  );
  const [callout, setCallout] = useState(
    enquiry.callout_charge?.toString() || ""
  );

  const [saving, setSaving] = useState(false);

  const total =
    (parseFloat(labour) || 0) +
    (parseFloat(parts) || 0) +
    (parseFloat(callout) || 0);

  async function saveQuote() {
    setSaving(true);

    try {
      const response = await fetch("/api/enquiry/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: enquiry.id,
          estimate_from: estimateFrom
            ? parseFloat(estimateFrom)
            : null,
          estimate_to: estimateTo
            ? parseFloat(estimateTo)
            : null,
          admin_notes: adminNotes,
          labour_charge: labour
            ? parseFloat(labour)
            : null,
          parts_charge: parts
            ? parseFloat(parts)
            : null,
          callout_charge: callout
            ? parseFloat(callout)
            : null,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.error || "Failed to save quote");
        return;
      }

      window.location.reload();
    } catch (error) {
      alert("Failed to save quote");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#0b1730] p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div>
          <span
            className={`rounded-full px-4 py-2 text-sm font-bold ${getStatusColour(
              enquiry.status
            )}`}
          >
            {enquiry.status}
          </span>

          <h2 className="mt-5 text-3xl font-black text-white">
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

          {(enquiry.estimate_from || enquiry.estimate_to) && (
            <div className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/10 p-4">
              <p className="text-sm font-semibold text-orange-300">
                Estimate
              </p>
              <p className="mt-1 text-xl font-black text-white">
                £{enquiry.estimate_from || 0}
                {enquiry.estimate_to &&
                  enquiry.estimate_to !== enquiry.estimate_from &&
                  ` - £${enquiry.estimate_to}`}
              </p>
            </div>
          )}

          {(enquiry.labour_charge ||
            enquiry.parts_charge ||
            enquiry.callout_charge) && (
            <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
              <p className="text-sm font-semibold text-green-300">
                Job Costing
              </p>

              <div className="mt-3 space-y-2 text-sm text-gray-200">
                <div className="flex justify-between">
                  <span>Labour</span>
                  <span>£{enquiry.labour_charge || 0}</span>
                </div>

                <div className="flex justify-between">
                  <span>Parts</span>
                  <span>£{enquiry.parts_charge || 0}</span>
                </div>

                <div className="flex justify-between">
                  <span>Call-out</span>
                  <span>£{enquiry.callout_charge || 0}</span>
                </div>

                <div className="border-t border-green-400/20 pt-2 flex justify-between text-base font-bold text-white">
                  <span>Total</span>
                  <span>
                    £
                    {(enquiry.labour_charge || 0) +
                      (enquiry.parts_charge || 0) +
                      (enquiry.callout_charge || 0)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {enquiry.admin_notes && (
            <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4">
              <p className="text-sm font-semibold text-yellow-300">
                Admin Notes
              </p>
              <p className="mt-2 text-gray-200 whitespace-pre-wrap">
                {enquiry.admin_notes}
              </p>
            </div>
          )}
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

      {showQuote && (
        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-[#08111f] p-6">
          <h3 className="text-xl font-black text-white">
            Estimate & Job Costing
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              type="number"
              step="0.01"
              placeholder="Estimate from (£)"
              value={estimateFrom}
              onChange={(e) => setEstimateFrom(e.target.value)}
              className="rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
            />

            <input
              type="number"
              step="0.01"
              placeholder="Estimate to (£)"
              value={estimateTo}
              onChange={(e) => setEstimateTo(e.target.value)}
              className="rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
            />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <input
              type="number"
              step="0.01"
              placeholder="Labour (£)"
              value={labour}
              onChange={(e) => setLabour(e.target.value)}
              className="rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
            />

            <input
              type="number"
              step="0.01"
              placeholder="Parts (£)"
              value={parts}
              onChange={(e) => setParts(e.target.value)}
              className="rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
            />

            <input
              type="number"
              step="0.01"
              placeholder="Call-out (£)"
              value={callout}
              onChange={(e) => setCallout(e.target.value)}
              className="rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
            />
          </div>

          <div className="mt-4 rounded-xl bg-[#0b1220] p-4 border border-gray-700">
            <div className="flex items-center justify-between text-white">
              <span className="font-semibold">Calculated total</span>
              <span className="text-2xl font-black text-cyan-400">
                £{total.toFixed(2)}
              </span>
            </div>
          </div>

          <textarea
            placeholder="Admin notes..."
            value={adminNotes}
            onChange={(e) => setAdminNotes(e.target.value)}
            rows={4}
            className="mt-6 w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
          />

          <div className="mt-6 flex gap-3">
            <button
              onClick={saveQuote}
              disabled={saving}
              className="rounded-xl bg-cyan-500 px-5 py-3 font-bold text-black transition hover:bg-cyan-400 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Costing"}
            </button>

            <button
              onClick={() => setShowQuote(false)}
              className="rounded-xl border border-gray-600 px-5 py-3 font-bold text-gray-300 transition hover:bg-white/5"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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

        <button
          onClick={() => setShowQuote(!showQuote)}
          className="rounded-xl border border-orange-500 px-5 py-3 font-bold text-orange-300 transition hover:bg-orange-500/10"
        >
          {showQuote ? "Close" : "Add Quote"}
        </button>

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