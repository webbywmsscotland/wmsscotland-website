import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Truck,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import business from "../data/business";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-24">

      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div>

          <p className="mb-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Mobile Mechanic • {business.location}
          </p>

          <h1 className="text-5xl font-black text-white md:text-7xl">
            {business.name}
          </h1>

          <h2 className="mt-4 max-w-lg text-4xl font-black leading-tight text-cyan-400 md:text-5xl">
            {business.slogan}
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
            Honest, reliable mobile mechanical repairs carried out at your
            home, workplace or roadside.

            <br />
            <br />

            From servicing and diagnostics to brakes, suspension, clutches,
            agricultural machinery and marine engines, WMS Scotland keeps
            East Lothian moving.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href={business.phoneLink}
              className="flex items-center gap-3 rounded-2xl bg-cyan-500 px-10 py-5 text-xl font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              <Phone size={24} />
              Call Now
            </a>

            <a
              href={business.whatsapp}
              className="flex items-center gap-3 rounded-2xl border-2 border-cyan-500 px-10 py-5 text-xl font-bold transition duration-300 hover:scale-105 hover:bg-cyan-500/20"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-[#10192d] p-5 transition hover:-translate-y-1 hover:border hover:border-cyan-400">
              <Truck className="mb-3 text-cyan-400" size={34} />

              <h3 className="font-bold text-cyan-400">
                We Come To You
              </h3>
            </div>

            <div className="rounded-xl bg-[#10192d] p-5 transition hover:-translate-y-1 hover:border hover:border-cyan-400">
              <Wrench className="mb-3 text-cyan-400" size={34} />

              <h3 className="font-bold text-cyan-400">
                Cars • Vans • Tractors
              </h3>
            </div>

            <div className="rounded-xl bg-[#10192d] p-5 transition hover:-translate-y-1 hover:border hover:border-cyan-400">
              <ShieldCheck className="mb-3 text-cyan-400" size={34} />

              <h3 className="font-bold text-cyan-400">
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
              alt={business.name}
              width={500}
              height={500}
              priority
              className="drop-shadow-[0_0_60px_rgba(34,211,238,0.35)]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}