"use client";

import { useState } from "react";
import Button from "../ui/Button";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    registration: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(
          "Thanks! Your enquiry has been sent. We'll be in touch as soon as possible."
        );

        setFormData({
          name: "",
          phone: "",
          email: "",
          vehicle: "",
          registration: "",
          location: "",
          message: "",
        });
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch {
      setError("Unable to send your enquiry.");
    }

    setLoading(false);
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8 shadow-xl">
      <h2 className="mb-2 text-4xl font-black text-white">
        Request a Quote
      </h2>

      <p className="mb-8 text-gray-400">
        Tell us a little about your vehicle and the problem you're having.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
          required
        />

        <input
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <input
          name="vehicle"
          placeholder="Vehicle"
          value={formData.vehicle}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <input
          name="registration"
          placeholder="Registration"
          value={formData.registration}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <input
          name="location"
          placeholder="Town / Village"
          value={formData.location}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <textarea
          name="message"
          placeholder="Tell us what's wrong..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        {success && (
          <div className="rounded-xl bg-green-600/20 p-4 text-green-400">
            {success}
          </div>
        )}

        {error && (
          <div className="rounded-xl bg-red-600/20 p-4 text-red-400">
            {error}
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Request My Quote"}
        </Button>

      </form>
    </div>
  );
}