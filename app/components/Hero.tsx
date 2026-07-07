import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

      <div className="mb-10 rounded-full bg-cyan-500/10 p-6 shadow-[0_0_80px_rgba(34,211,238,0.15)]">
        <Image
          src="/images/logo.png"
          alt="WMS Scotland Logo"
          width={420}
          height={420}
          className="drop-shadow-2xl"
          priority
        />
      </div>

      <p className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
        Mobile Mechanical Services • Cars • Vans • 4x4s • Tractors • Boats
      </p>

      <h1 className="text-5xl font-black tracking-tight md:text-7xl">
        WMS Scotland
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-cyan-400 md:text-3xl">
        We Come To You.
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
        Professional mobile mechanical services covering Dunbar and East
        Lothian. From cars and vans to tractors and boats, we bring the
        workshop to you.
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
  );
}