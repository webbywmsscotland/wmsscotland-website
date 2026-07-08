import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[#0b1220]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="WMS Scotland"
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
              Mobile Mechanic • Dunbar
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-300 lg:flex">
          <a href="#services" className="transition hover:text-cyan-400">
            Services
          </a>

          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#reviews" className="transition hover:text-cyan-400">
            Reviews
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">

          <a
            href="https://wa.me/447523100958"
            className="hidden rounded-xl border border-cyan-500 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20 md:block"
          >
            💬 WhatsApp
          </a>

          <a
            href="tel:07523100958"
            className="rounded-xl bg-cyan-500 px-5 py-2 font-bold text-black transition hover:bg-cyan-400"
          >
            📞 Call
          </a>

        </div>

      </nav>
    </header>
  );
}