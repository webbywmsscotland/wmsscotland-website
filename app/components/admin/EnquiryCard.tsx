"use client";

import Link from "next/link";
import { useState } from "react";

export default function EnquiryCard({ enquiry }: any) {
  const [notes, setNotes] = useState(enquiry.notes || "");
  const [saving, setSaving] = useState(false);

  async function saveNotes() {
    setSaving(true);

    await fetch("/api/enquiry/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: enquiry.id,
        notes,
      }),
    });

    setSaving(false);
  }

  const whatsappLink = enquiry.phone
    ? `https://wa.me/${enquiry.phone.replace(/\D/g, "")}`
    : null;

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-300">
              {(enquiry.status || "new").toUpperCase()}
            </span>

            {enquiry.booking_date && (
              <span className="text-sm text-gray-400">
                {enquiry.booking_date}
                {enquiry.booking_time ? ` • ${enquiry.booking_time}` : ""}
              </span>
            )}
          </div>

          <h3 className="text-3xl font-black text-white">
            {enquiry.name || "Unnamed customer"}
          </h3>

          {enquiry.vehicle && (
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-white">Vehicle:</span> {enquiry.vehicle}
            </p>
          )}

          {enquiry.location && (
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-white">Location:</span> {enquiry.location}
            </p>
          )}

          {enquiry.phone && (
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-white">Phone:</span> {enquiry.phone}
            </p>
          )}

          {enquiry.email && (
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-white">Email:</span> {enquiry.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 md:min-w-[220px]">
          <Link
            href={`/admin/enquiries/${enquiry.id}`}
            className="rounded-xl border border-cyan-500 px-4 py-3 text-center font-semibold text-cyan-400 hover:bg-cyan-500/10"
          >
            Open Job
          </Link>

          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-green-600 px-4 py-3 text-center font-semibold text-white hover:bg-green-500"
            >
              WhatsApp
            </a>
          )}

          {enquiry.phone && (
            <a
              href={`tel:${enquiry.phone}`}
              className="rounded-xl bg-cyan-500 px-4 py-3 text-center font-semibold text-black hover:bg-cyan-400"
            >
              Call
            </a>
          )}
        </div>
      </div>

      {enquiry.message && (
        <div className="mt-6 rounded-2xl bg-[#08111F] p-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Customer message
          </p>
          <p className="mt-2 whitespace-pre-wrap text-gray-200">
            {enquiry.message}
          </p>
        </div>
      )}

      <div className="mt-6 rounded-2xl bg-[#08111F] p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Private notes
          </p>

          <button
            onClick={saveNotes}
            disabled={saving}
            className="rounded-lg bg-cyan-500 px-3 py-1 text-sm font-semibold text-black hover:bg-cyan-400 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save notes"}
          </button>
        </div>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Parts ordered, deposit paid, call after 5pm, waiting on customer, etc."
          className="min-h-[120px] w-full rounded-xl border border-cyan-500/20 bg-[#0B1220] p-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={async () => {
            await fetch(`/api/enquiry/status`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: enquiry.id, status: "completed" }),
            });
            window.location.reload();
          }}
          className="rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-500"
        >
          ✓ Complete
        </button>

        <button
          onClick={async () => {
            await fetch(`/api/enquiry/status`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: enquiry.id, status: "cancelled" }),
            });
            window.location.reload();
          }}
          className="rounded-xl bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-500"
        >
          ✕ Cancel
        </button>
      </div>
    </div>
  );
}