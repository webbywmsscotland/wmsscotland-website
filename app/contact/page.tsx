import Container from "../components/ui/Container";
import CallToAction from "../components/CallToAction";

export default function ContactPage() {
  return (
    <main className="bg-[#08111F] text-white">
      <div className="py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Contact WMS Scotland
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Get in touch
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              For servicing, diagnostics, repairs, agricultural machinery or
              marine engine work, get in touch and I'll get back to you as soon
              as possible.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-8">
              <h2 className="text-2xl font-bold text-white">
                Contact details
              </h2>

              <div className="mt-6 space-y-4 text-gray-300">
                <p>
                  <strong>Phone:</strong> 07593 065949
                </p>

                <p>
                  <strong>Email:</strong> info@wmsscotland.com
                </p>

                <p>
                  <strong>Location:</strong> Dunbar, East Lothian
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:07593065949"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 font-bold text-black transition hover:bg-cyan-400"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/447593065949"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-cyan-500 px-5 py-3 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-8">
              <h2 className="text-2xl font-bold text-white">
                Quick message
              </h2>

              <p className="mt-4 text-gray-300">
                The quickest way to request a quote is to use the online quote
                form and upload photos of the problem if possible.
              </p>

              <div className="mt-8">
                <a
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 font-bold text-black transition hover:bg-cyan-400"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <CallToAction />
    </main>
  );
}