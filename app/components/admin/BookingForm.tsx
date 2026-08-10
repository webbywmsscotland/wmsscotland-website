"use client";

import { useState } from "react";

interface Props {
  enquiry: any;
}

export default function BookingForm({ enquiry }: Props) {
  const [date, setDate] = useState(
    enquiry.booked_date || ""
  );

  const [time, setTime] = useState(
    enquiry.booked_time || ""
  );

  const [saving, setSaving] = useState(false);

  async function saveBooking() {
    setSaving(true);

    try {
      const response = await fetch(
        "/api/enquiry/status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: enquiry.id,
            status: "Booked",
            booked_date: date,
            booked_time: time,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save booking");
      }

      window.location.reload();
    } catch (error) {
      alert("Failed to save booking");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#101935] p-6">
      <h2 className="text-2xl font-black text-white">
        Book This Job
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-cyan-300">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ colorScheme: "dark" }}
            className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-cyan-300">
            Time
          </label>

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ colorScheme: "dark" }}
            className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
      </div>

      <button
        onClick={saveBooking}
        disabled={saving || !date}
        className="mt-6 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400 disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save Booking"}
      </button>
    </div>
  );
}