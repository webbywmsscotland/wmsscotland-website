import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div>

          <p className="mb-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Mobile Mechanic • Dunbar • East Lothian
          </p>

          <h1 className="text-5xl font-black text-white md:text-7xl">
            WMS Scotland
          </h1>

          <h2 className="mt-4 max-w-lg text-4xl font-black leading-tight text-cyan-400 md:text-5xl">
  The Garage That Comes To You.
</h2>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
            Honest, reliable mobile mechanical repairs carried out at
            your home, workplace or roadside.

            From servicing and diagnostics to brakes, suspension,
            clutches, agricultural machinery and marine engines,
            WMS Scotland keeps East Lothian moving.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="tel:07523100958"
              className="rounded-2xl bg-cyan-500 px-10 py-5 text-xl font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/447523100958"
              className="rounded-2xl border-2 border-cyan-500 px-10 py-5 text-xl font-bold transition hover:scale-105 hover:bg-cyan-500/20"
            >
              💬 WhatsApp
            </a>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-[#10192d] p-5">
              🚐
              <h3 className="mt-2 font-bold text-cyan-400">
                We Come To You
              </h3>
            </div>

            <div className="rounded-xl bg-[#10192d] p-5">
              🔧
              <h3 className="mt-2 font-bold text-cyan-400">
                Cars • Vans • Tractors
              </h3>
            </div>

            <div className="rounded-xl bg-[#10192d] p-5">
              ⭐
              <h3 className="mt-2 font-bold text-cyan-400">
                Honest & Reliable
              </h3>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <div className="rounded-full bg-cyan-500/10 p-8 shadow-[0_0_120px_rgba(34,211,238,0.25)]">

            <Image
              src="/images/logo.png"
              alt="WMS Scotland"
              width={520}
              height={520}
              priority
              className="drop-shadow-[0_0_60px_rgba(34,211,238,0.35)]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}