import Image from "next/image";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

import business from "../data/business";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08111F]">

      {/* Background glow */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Mobile Mechanic • {business.location}
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Professional
            <br />
            Mobile Mechanic
            <br />
            Services
          </h1>

          <h2 className="mt-6 text-3xl font-bold text-cyan-400">
            Keeping East Lothian Moving.
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
            Professional servicing, diagnostics and repairs carried out
            at your home, workplace or another convenient location.
            No waiting rooms. No recovery trucks. Just honest,
            reliable mechanical repairs that fit around your day.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={business.phoneLink}
              className="rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
            >
              <span className="flex items-center gap-2">
                <Phone size={20} />
                Call Now
              </span>
            </a>

            <a
              href={business.whatsapp}
              className="rounded-2xl border border-cyan-500 px-8 py-4 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
            >
              <span className="flex items-center gap-2">
                <MessageCircle size={20} />
                WhatsApp
              </span>
            </a>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">

              <CheckCircle className="text-cyan-400" />

              <span>Cars & Vans</span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle className="text-cyan-400" />

              <span>Agricultural Machinery</span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle className="text-cyan-400" />

              <span>Marine Engines</span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle className="text-cyan-400" />

              <span>Home & Workplace Visits</span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="absolute -inset-4 rounded-[40px] bg-cyan-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-[#10192D] p-3 shadow-2xl">

            <Image
              src="/repairs/hero-gti.jpg"
              alt="WMS Scotland Mobile Mechanic"
              width={900}
              height={900}
              priority
              className="rounded-[28px] object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

      </div>

    </section>
  );
}