"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

import business from "../data/business";
import navigation from "../data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[#0b1220]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt={business.name}
            width={60}
            height={60}
            priority
            className="drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          />

          <div>
            <h1 className="text-xl font-black text-white">
              WMS <span className="text-cyan-400">Scotland</span>
            </h1>

            <p className="text-xs text-gray-400">
              Mobile Mechanic • {business.location}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href
                  ? "font-bold text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* Desktop Buttons */}

        <div className="hidden md:flex items-center gap-3">

          <a
            href={business.whatsapp}
            className="flex items-center gap-2 rounded-xl border border-cyan-500 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href={business.phoneLink}
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2 font-bold text-black transition hover:bg-cyan-400"
          >
            <Phone size={18} />
            Call
          </a>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-cyan-500/20 bg-[#0b1220] md:hidden">

          <div className="flex flex-col px-6 py-6">

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`py-3 ${
                  pathname === item.href
                    ? "font-bold text-cyan-400"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-3">

              <a
                href={business.whatsapp}
                className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500 px-4 py-3 font-semibold text-cyan-300"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <a
                href={business.phoneLink}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 font-bold text-black"
              >
                <Phone size={20} />
                Call Now
              </a>

            </div>

          </div>

        </div>
      )}
    </header>
  );
}