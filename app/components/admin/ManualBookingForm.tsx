"use client";

import { useState } from "react";

function getToday() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0];
}

export default function ManualBookingForm() {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    registration: "",
    location: "",
    message: "",
    booking_date: getToday(),
    booking_time: "",
  });

  function updateField(field: string, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function saveBooking() {
    if (!form.name.trim()) {
      alert("Please enter the customer's name.");
      return;
    }

    if (!form.phone.trim()) {
      alert("Please enter a phone number.");
      return;
    }

    if (!form.booking_date) {
      alert("Please choose a booking date.");
      return;
    }

    if (!form.booking_time) {
      alert("Please choose a booking time.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch("/api/enquiry/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.ok) {
        window.location.reload();
      } else {
        alert(
          "Failed to save booking: " +
            (result.error || "Unknown error")
        );
      }
    } catch (err: any) {
      alert("Request failed: " + (err.message || "Unknown error"));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black text-white">
            Quick Booking
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Add a job from a phone call, text or WhatsApp
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl bg-cyan-500 px-5 py-3 font-bold text-black transition hover:bg-cyan-400"
        >
          {open ? "Close" : "+ Quick Booking"}
        </button>
      </div>

      {open && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-300">
              Customer name
            </label>

            <input
              type="text"
              placeholder="Customer name"
              className="w-full rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white outline-none focus:border-cyan-500"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-300">
              Phone
            </label>

            <input
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white outline-none focus:border-cyan-500"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-300">
              Vehicle
            </label>

            <input
              type="text"
              placeholder="e.g. Ford Transit 2.0 TDCi"
              className="w-full rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white outline-none focus:border-cyan-500"
              value={form.vehicle}
              onChange={(e) => updateField("vehicle", e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-300">
              Registration
            </label>

            <input
              type="text"
              placeholder="e.g. AB12 CDE"
              className="w-full rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 uppercase text-white outline-none focus:border-cyan-500"
              value={form.registration}
              onChange={(e) =>
                updateField("registration", e.target.value.toUpperCase())
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-300">
              Location
            </label>

            <input
              type="text"
              placeholder="Address / town"
              className="w-full rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white outline-none focus:border-cyan-500"
              value={form.location}
              onChange={(e) => updateField("location", e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-300">
              Date
            </label>

            <input
              type="date"
              className="w-full rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white outline-none focus:border-cyan-500"
              value={form.booking_date}
              onChange={(e) =>
                updateField("booking_date", e.target.value)
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-300">
              Time
            </label>

            <input
              type="time"
              className="w-full rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white outline-none focus:border-cyan-500"
              value={form.booking_time}
              onChange={(e) =>
                updateField("booking_time", e.target.value)
              }
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-bold text-gray-300">
              Job details
            </label>

            <textarea
              placeholder="What needs doing?"
              className="min-h-[120px] w-full rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white outline-none focus:border-cyan-500"
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
            />
          </div>

          <div className="flex justify-end md:col-span-2">
            <button
              type="button"
              onClick={saveBooking}
              disabled={saving}
              className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Booking"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}