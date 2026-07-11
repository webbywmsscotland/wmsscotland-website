import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";

import business from "../data/business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/20 bg-[#050B16]">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">

        {/* Company */}

        <div>

          <h2 className="text-3xl font-black text-white">
            WMS <span className="text-cyan-400">Scotland</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Professional mobile mechanic covering East Lothian.
            Repairs, servicing, diagnostics, agricultural machinery
            and marine engines carried out at your home or workplace.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold text-white">
            Quick Links
          </h3>

          <div className="mt-6 flex flex-col gap-4">

            <Link href="/" className="text-gray-400 transition hover:text-cyan-400">
              Home
            </Link>

            <Link href="/services" className="text-gray-400 transition hover:text-cyan-400">
              Services
            </Link>

            <Link href="/repairs" className="text-gray-400 transition hover:text-cyan-400">
              Repair Portfolio
            </Link>

            <Link href="/about" className="text-gray-400 transition hover:text-cyan-400">
              About
            </Link>

            <Link href="/contact" className="text-gray-400 transition hover:text-cyan-400">
              Contact
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold text-white">
            Contact
          </h3>

          <div className="mt-6 space-y-5">

            <a
              href={business.phoneLink}
              className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
            >
              <Phone size={18} />
              {business.phone}
            </a>

            <a
              href={business.whatsapp}
              className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} />
              Dunbar, East Lothian
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-cyan-500/10 py-6">

        <p className="text-center text-sm text-gray-500">
          © {year} WMS Scotland. All rights reserved.
        </p>

      </div>

    </footer>
  );
}