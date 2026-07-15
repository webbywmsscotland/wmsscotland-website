import Image from "next/image";
import {
  CheckCircle,
  Phone,
  Clock,
  ShieldCheck,
  MapPin,
} from "lucide-react";

export default function QuoteTrustPanel() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-10">

      {/* Profile */}

      <div className="flex flex-col items-center text-center">

        <Image
          src="/images/scott.jpg"
          alt="Scott Webster"
          width={140}
          height={140}
          className="rounded-full border-4 border-cyan-400 shadow-xl"
          priority
        />

        <span className="mt-6 rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
          Owner • WMS Scotland
        </span>

        <h2 className="mt-6 text-4xl font-black text-white">
          Hi, I'm Scott.
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Thanks for taking the time to visit my website.
        </p>

        <p className="mt-5 leading-8 text-gray-400">
          When you submit a quote request it comes directly to me.
          I'll personally read through your enquiry, offer honest
          advice and get back to you as quickly as I can.
        </p>

        <p className="mt-5 leading-8 text-gray-400">
          I started WMS Scotland because I believe vehicle repairs
          shouldn't mean taking time off work, arranging lifts or
          sitting in a waiting room all day.
        </p>

        <p className="mt-6 text-xl font-semibold italic text-cyan-400">
          "Treat every customer honestly, do the job properly,
          and leave them happy they chose WMS Scotland."
        </p>

      </div>

      {/* Features */}

      <div className="mt-12 space-y-8">

        <div className="flex gap-4">

          <CheckCircle className="mt-1 text-cyan-400" />

          <div>

            <h3 className="font-bold text-white">
              The Garage Comes To You
            </h3>

            <p className="text-gray-400">
              Home, workplace or roadside across East Lothian.
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <ShieldCheck className="mt-1 text-cyan-400" />

          <div>

            <h3 className="font-bold text-white">
              Honest Advice
            </h3>

            <p className="text-gray-400">
              I'll only recommend work that's genuinely needed.
              No unnecessary repairs.
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <Clock className="mt-1 text-cyan-400" />

          <div>

            <h3 className="font-bold text-white">
              Fast Response
            </h3>

            <p className="text-gray-400">
              Every enquiry comes directly to me and I'll respond
              as quickly as possible.
            </p>

          </div>

        </div>

      </div>

      {/* Contact */}

      <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

        <div className="flex items-center gap-4">

          <Phone
            className="text-cyan-400"
            size={28}
          />

          <div>

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Need an urgent repair?
            </p>

            <p className="text-3xl font-black text-white">
              07593 065949
            </p>

            <p className="mt-2 text-sm text-gray-400">
              If I'm underneath a vehicle I may not answer
              immediately, but I'll always call you back.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-10 flex items-center justify-center gap-2 text-gray-400">

        <MapPin
          size={18}
          className="text-cyan-400"
        />

        <span className="font-medium">
          Proudly serving Dunbar & East Lothian
        </span>

      </div>

    </div>
  );
}