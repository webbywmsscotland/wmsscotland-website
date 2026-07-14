import QuoteForm from "../components/forms/QuoteForm";
import QuoteTrustPanel from "../components/QuoteTrustPanel";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#08111F] py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-cyan-400">
            Free No Obligation Quote
          </span>

          <h1 className="mt-6 text-5xl font-black text-white">
            Tell Us About Your Vehicle
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            Whether your vehicle needs servicing, repairs or diagnostics,
            complete the form below and we'll get back to you as quickly as
            possible with honest advice and a competitive quotation.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <QuoteTrustPanel />

          <QuoteForm />

        </div>

      </div>

    </main>
  );
}