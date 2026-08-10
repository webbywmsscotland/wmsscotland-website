export default function CallToAction() {
  return (
    <section className="border-t border-cyan-500/20 bg-[#0B1220]">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Need a mobile mechanic in East Lothian?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Get in touch for servicing, diagnostics, brakes, suspension,
          agricultural machinery or marine engine repairs at your home or
          workplace.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:07593065949"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            📞 Call Now
          </a>

          <a
            href="/quote"
            className="inline-flex items-center justify-center rounded-xl border border-cyan-500 px-6 py-3 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}