import { Phone, MessageCircle } from "lucide-react";

import business from "../data/business";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-cyan-500/20 bg-[#08111F]/95 backdrop-blur-md md:hidden">

      <div className="mx-auto flex max-w-md gap-3 p-4">

        <a
          href={business.phoneLink}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-4 font-bold text-black transition hover:bg-cyan-400"
        >
          <Phone size={22} />
          Call
        </a>

        <a
          href={business.whatsapp}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-cyan-500 py-4 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
        >
          <MessageCircle size={22} />
          WhatsApp
        </a>

      </div>

    </div>
  );
}