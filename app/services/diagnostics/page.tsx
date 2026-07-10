import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";

export default function DiagnosticsPage() {
  return (
    <main className="bg-[#0b1220] py-24 text-white">
      <Container>

        <SectionHeading
          title="Vehicle Diagnostics"
          subtitle="Professional fault finding using modern diagnostic equipment."
        />

        <div className="max-w-4xl space-y-8">

          <p className="text-lg leading-8 text-gray-300">
            Modern vehicles rely on complex electronic systems.
            If your engine management light, ABS, airbag or other warning
            lights are on, WMS Scotland can diagnose the problem at your
            home or workplace.
          </p>

          <p className="text-lg leading-8 text-gray-300">
            We don't just read fault codes—we investigate the underlying
            cause so unnecessary parts aren't replaced.
          </p>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8">

            <h2 className="text-2xl font-bold text-cyan-400">
              We can diagnose:
            </h2>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Engine Management Lights</li>
              <li>✔ ABS Faults</li>
              <li>✔ Airbag Warning Lights</li>
              <li>✔ DPF Issues</li>
              <li>✔ Battery Charging Faults</li>
              <li>✔ Sensor Failures</li>
            </ul>

          </div>

          <Button href="/contact">
            Book a Diagnostic Visit
          </Button>

        </div>

      </Container>
    </main>
  );
}