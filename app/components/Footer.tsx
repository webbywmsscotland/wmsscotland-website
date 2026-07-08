export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#08101c]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Branding */}
          <div>
            <h3 className="text-3xl font-black text-white">
              WMS <span className="text-cyan-400">Scotland</span>
            </h3>

            <p className="mt-4 text-gray-400">
              The Garage That Comes To You.
            </p>

            <p className="mt-2 text-gray-500">
              Mobile Mechanic covering Dunbar & East Lothian.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xl font-bold text-cyan-400">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#reviews" className="hover:text-cyan-400 transition">
                  Reviews
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xl font-bold text-cyan-400">
              Contact
            </h4>

            <p className="text-gray-300">
              📞 07523 100958
            </p>

            <p className="mt-2 text-gray-300">
              💬 WhatsApp Available
            </p>

            <p className="mt-2 text-gray-300">
              📍 Dunbar, East Lothian
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-cyan-500/20 pt-6 text-center text-sm text-gray-500">
          <p>© 2026 WMS Scotland. All rights reserved.</p>

          <p className="mt-2">
            Website proudly built by Scott Webster with OpenAI's ChatGPT.
          </p>
        </div>

      </div>
    </footer>
  );
}