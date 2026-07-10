import Container from "./ui/Container";
import Button from "./ui/Button";

export default function CallToAction() {
  return (
    <section className="bg-cyan-500 py-20">
      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-black text-black">
            Need a Mobile Mechanic?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-black/80">
            Whether it's servicing, diagnostics, brakes or an unexpected
            breakdown, WMS Scotland is ready to help across East Lothian.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button href="tel:07523100958">
              📞 Call Now
            </Button>

            <Button
              href="https://wa.me/447523100958"
              variant="secondary"
            >
              💬 WhatsApp
            </Button>

          </div>

        </div>

      </Container>
    </section>
  );
}