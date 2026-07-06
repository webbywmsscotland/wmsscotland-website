export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <p className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
          Mobile Mechanic • Dunbar • East Lothian
        </p>

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          WMS Scotland
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-cyan-400 md:text-3xl">
          We Come To You.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Professional mobile mechanic covering Dunbar and East Lothian.
          Servicing, repairs, diagnostics and roadside assistance at your home
          or workplace.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:07523100958"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold transition hover:bg-cyan-400"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/447523100958"
            className="rounded-xl border border-cyan-500 px-8 py-4 text-lg font-bold transition hover:bg-cyan-500/20"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-10 shadow-2xl">
          <h3 className="mb-4 text-3xl font-bold text-cyan-400">
            👋 Hi, I'm Webby!
          </h3>

          <p className="text-lg leading-8 text-gray-300">
            Whether you're at home, at work or stuck at the roadside...
          </p>

          <p className="mt-4 text-2xl font-bold">
            WMS Scotland will come to you.
          </p>
        </div>
      </section>
    </main>
  );
}
