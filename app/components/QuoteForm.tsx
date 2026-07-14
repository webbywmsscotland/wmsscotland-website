"use client";

export default function QuoteForm() {
  return (
    <section className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8">
      <h2 className="mb-2 text-3xl font-bold text-cyan-400">
        Request a Quote
      </h2>

      <p className="mb-8 text-gray-400">
        Tell us a little about your vehicle and we'll get back to you as soon
        as possible.
      </p>

      <form className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Name
          </label>

          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="07..."
            className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-cyan-500 px-6 py-4 text-lg font-bold text-black transition hover:bg-cyan-400"
        >
          Request My Quote
        </button>
      </form>
    </section>
  );
}