import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function ContactPage() {
  return (
    <main className="bg-[#0b1220] py-24 text-white">
      <Container>

        <SectionHeading
          title="Contact WMS Scotland"
          subtitle="Need a repair, service or diagnostics? Get in touch today and we'll get you back on the road."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <Card>

            <h2 className="text-3xl font-bold text-cyan-400">
              📞 Call
            </h2>

            <p className="mt-6 text-2xl font-semibold">
              07523 100958
            </p>

            <p className="mt-6 leading-8 text-gray-300">
              If your vehicle needs attention, give us a call and we'll
              discuss the problem and arrange a convenient time.
            </p>

            <div className="mt-8">
              <Button href="tel:07523100958">
                Call Now
              </Button>
            </div>

          </Card>

          <Card>

            <h2 className="text-3xl font-bold text-cyan-400">
              💬 WhatsApp
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Send photos of the problem, tell us what's happening and
              we'll reply as soon as possible.
            </p>

            <div className="mt-8">
              <Button
                href="https://wa.me/447523100958"
                variant="secondary"
              >
                Send WhatsApp
              </Button>
            </div>

          </Card>

        </div>

        <div className="mt-20">

          <Card>

            <h2 className="text-3xl font-bold text-cyan-400">
              📍 Areas Covered
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Based in Dunbar, WMS Scotland proudly covers East Lothian
              including:
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              <div>✔ Dunbar</div>
              <div>✔ East Linton</div>
              <div>✔ North Berwick</div>
              <div>✔ Haddington</div>
              <div>✔ Gullane</div>
              <div>✔ Longniddry</div>

            </div>

          </Card>

        </div>

      </Container>
    </main>
  );
}