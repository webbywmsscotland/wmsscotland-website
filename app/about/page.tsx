import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import CallToAction from "./components/CallToAction";
import Button from "../components/ui/Button";

export default function AboutPage() {
  return (
    <main className="bg-[#0b1220] py-24 text-white">
      <Container>

        <SectionHeading
          title="About WMS Scotland"
          subtitle="Professional mobile vehicle repairs carried out where it's most convenient for you."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <h2 className="text-3xl font-bold text-cyan-400">
              Hi, I'm Scott.
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              I founded WMS Scotland to offer an honest, reliable mobile
              mechanic service that saves customers the hassle of taking
              their vehicle to a garage.
            </p>

            <p className="mt-6 leading-8 text-gray-300">
              Whether you're at home, at work or broken down, my aim is
              simple: provide quality workmanship, honest advice and a
              service that's convenient for you.
            </p>

            <p className="mt-6 leading-8 text-gray-300">
              I work on everything from everyday cars and vans to
              agricultural machinery and marine engines, bringing
              professional tools and diagnostics directly to you.
            </p>

            <div className="mt-10">
              <Button href="/contact">
                Get In Touch
              </Button>
            </div>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-16 text-center">

            <div className="text-8xl">
              👨‍🔧
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              WMS Scotland
            </h3>

            <p className="mt-4 text-gray-400">
              Honest advice.
              <br />
              Professional workmanship.
              <br />
              The garage that comes to you.
            </p>

          </div>

        </div>

      </Container>
    </main>
  );
}