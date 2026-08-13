"use client";

import { useState } from "react";

export default function ManualBookingForm() {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    location: "",
    message: "",
    booking_date: "",
    booking_time: "",
  });

  async function saveBooking() {
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
      alert("Request failed: " + err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-white">Manual Booking</h2>
          <p className="mt-1 text-sm text-gray-400">
            Add jobs from calls, texts or WhatsApp
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl bg-cyan-500 px-4 py-2 font-bold text-black hover:bg-cyan-400"
        >
          {open ? "Close" : "+ Add Booking"}
        </button>
      </div>

      {open && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            placeholder="Customer name"
            className="rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Phone number"
            className="rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            placeholder="Vehicle"
            className="rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white"
            value={form.vehicle}
            onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
          />

          <input
            placeholder="Location"
            className="rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />

          <input
            type="date"
            className="rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white"
            value={form.booking_date}
            onChange={(e) =>
              setForm({ ...form, booking_date: e.target.value })
            }
          />

          <input
            type="time"
            className="rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white"
            value={form.booking_time}
            onChange={(e) =>
              setForm({ ...form, booking_time: e.target.value })
            }
          />

          <textarea
            placeholder="Job details"
            className="md:col-span-2 min-h-[120px] rounded-xl border border-cyan-500/20 bg-[#08111F] p-3 text-white"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <div className="md:col-span-2 flex justify-end">
            <button
              type="button"
              onClick={saveBooking}
              disabled={saving}
              className="rounded-xl bg-cyan-500 px-5 py-3 font-bold text-black hover:bg-cyan-400 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Booking"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}