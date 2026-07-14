import QuoteForm from "../components/forms/QuoteForm";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#0b1220] py-24">
      <div className="mx-auto max-w-3xl px-6">

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-black text-white">
            Request a Quote
          </h1>

          <p className="text-lg text-gray-400">
            Tell us about your vehicle and the work you need. We'll get back to
            you as quickly as possible with honest advice and a competitive
            quote.
          </p>
        </div>

        <QuoteForm />

      </div>
    </main>
  );
}