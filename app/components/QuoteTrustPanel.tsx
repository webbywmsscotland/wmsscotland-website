import { CheckCircle, Star, Phone } from "lucide-react";

export default function QuoteTrustPanel() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8">

      <div className="mb-8 flex items-center gap-2 text-yellow-400">
        <Star fill="currentColor" size={20} />
        <Star fill="currentColor" size={20} />
        <Star fill="currentColor" size={20} />
        <Star fill="currentColor" size={20} />
        <Star fill="currentColor" size={20} />

        <span className="ml-2 font-semibold text-white">
          Trusted by local customers
        </span>
      </div>

      <h2 className="mb-6 text-3xl font-black text-white">
        Why Choose WMS Scotland?
      </h2>

      <div className="space-y-5">

        <div className="flex gap-3">
          <CheckCircle className="mt-1 text-cyan-400" />
          <div>
            <h3 className="font-bold text-white">
              We Come To You
            </h3>

            <p className="text-gray-400">
              Home, workplace or roadside across East Lothian.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <CheckCircle className="mt-1 text-cyan-400" />
          <div>
            <h3 className="font-bold text-white">
              Honest Advice
            </h3>

            <p className="text-gray-400">
              No unnecessary repairs. Just straightforward advice.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <CheckCircle className="mt-1 text-cyan-400" />
          <div>
            <h3 className="font-bold text-white">
              Local & Trusted
            </h3>

            <p className="text-gray-400">
              Proudly serving Dunbar and the surrounding area.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-10 rounded-2xl bg-cyan-500/10 p-5">

        <div className="flex items-center gap-3">

          <Phone className="text-cyan-400" />

          <div>
            <p className="text-sm text-gray-400">
              Prefer to speak to someone?
            </p>

            <p className="text-2xl font-black text-white">
              07523 100958
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}