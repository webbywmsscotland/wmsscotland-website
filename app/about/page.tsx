import Container from "../components/ui/Container";
import CallToAction from "../components/CallToAction";
import Button from "../components/ui/Button";

export default function AboutPage() {
  return (
    <main className="bg-[#08111F] text-white">
      <div className="py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About WMS Scotland
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Local, Reliable Mobile Mechanic in East Lothian
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Based in Dunbar and covering East Lothian, WMS Scotland provides
              professional servicing, repairs and diagnostics at your home,
              workplace or roadside.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6 leading-7 text-gray-300">
              <p>
                I started WMS Scotland to offer a more convenient alternative to
                traditional garages. Instead of arranging lifts, waiting for
                appointments or being without your vehicle, I come to you.
              </p>

              <p>
                I work on cars, vans, 4x4s, agricultural machinery and marine
                engines, with a focus on honest advice, quality workmanship and
                keeping customers informed throughout the job.
              </p>

              <p>
                Whether it is routine servicing, fault finding, brakes,
                suspension, battery problems or unexpected breakdowns, the aim is
                always the same: get you back on the road as quickly and reliably
                as possible.
              </p>

              <div className="pt-4">
                <Button
                  onClickAction={{
                    "type": "open_url",
                    "handler": "client",
                    "payload": {
                      "url": "https://wmsscotland.com/contact"
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-8">
              <h2 className="text-2xl font-bold text-white">
                Why customers choose WMS Scotland
              </h2>

              <ul className="mt-6 space-y-4 text-gray-300">
                <li>✓ Mobile service at home or work</li>
                <li>✓ Honest fault diagnosis</li>
                <li>✓ Quality parts and workmanship</li>
                <li>✓ Clear pricing and communication</li>
                <li>✓ Cars, vans, 4x4s, agricultural and marine work</li>
                <li>✓ Based in Dunbar, covering East Lothian</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <CallToAction />
    </main>
  );
}