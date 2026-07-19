"use client";

import { useState } from "react";
import Button from "../ui/Button";
import ImageUpload from "../ui/ImageUpload";

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

  const [images, setImages] = useState<File[]>([]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("vehicle", formData.vehicle);
      data.append("registration", formData.registration);
      data.append("location", formData.location);
      data.append("message", formData.message);

      images.forEach((image) => {
        data.append("photos", image);
      });

      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send enquiry.");
      }

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

      setImages([]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your enquiry."
      );
    } finally {
      setLoading(false);
    }
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
          required
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <input
          name="email"
          type="email"
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
          required
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <input
          name="registration"
          placeholder="Registration"
          value={formData.registration}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <input
          name="location"
          placeholder="Town / Village"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <textarea
          name="message"
          placeholder="Tell us what's wrong..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
        />

        <ImageUpload
          images={images}
          setImages={setImages}
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