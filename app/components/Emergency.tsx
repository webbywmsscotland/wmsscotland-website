export default function Emergency() {
  return (
    <section className="bg-cyan-500 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">

        <h2 className="text-5xl font-black text-black">
          Broken Down?
        </h2>

        <p className="mt-6 max-w-3xl text-2xl text-black">
          Whether your car won't start, your van needs servicing or your
          tractor has let you down, WMS Scotland brings the garage to you.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">

          <a
            href="tel:07523100958"
            className="rounded-2xl bg-black px-10 py-5 text-xl font-bold text-white transition hover:scale-105"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/447523100958"
            className="rounded-2xl border-2 border-black px-10 py-5 text-xl font-bold text-black transition hover:bg-black hover:text-white"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}