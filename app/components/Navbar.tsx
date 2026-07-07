import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[#0b1220]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="WMS Scotland"
            width={70}
            height={70}
            priority
          />

          <div>
            <h1 className="text-2xl font-black text-white">
              WMS <span className="text-cyan-400">Scotland</span>
            </h1>

            <p className="text-xs text-gray-400">
              Mobile Mechanic • East Lothian
            </p>
          </div>
        </a>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Services
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Areas
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        <a
          href="tel:07523100958"
          className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400"
        >
          📞 Call
        </a>

      </nav>
    </header>
  );
}