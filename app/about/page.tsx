import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import CallToAction from "../components/CallToAction";
import Button from "../components/ui/Button";
import { Box } from "@/components/ui/box";

export default function AboutPage() {
  return (
    <main className="bg-[#08111F] text-white">
      <Box className="py-20">
        <Container>
          <SectionHeading
            eyebrow="About WMS Scotland"
            title="Local, Reliable Mobile Mechanic in East Lothian"
            description="Based in Dunbar and covering East Lothian, WMS Scotland provides professional servicing, repairs and diagnostics at your home, workplace or roadside."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6 text-gray-300 leading-7">
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
              <h3 className="text-2xl font-bold text-white">
                Why customers choose WMS Scotland
              </h3>

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
      </Box>

      <CallToAction />
    </main>
  );
}