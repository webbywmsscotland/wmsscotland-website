import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import recentWork from "../data/recentWork";

export default function RecentWorkPage() {
  return (
    <main className="bg-[#0b1220] py-24 text-white">
      <Container>

        <SectionHeading
          title="Recent Work"
          subtitle="A selection of recent repairs carried out across East Lothian. Every job is completed with the same attention to detail, whether it's routine servicing or complex fault finding."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {recentWork.map((job) => (
            <Card key={job.title}>

              <p className="text-sm uppercase tracking-widest text-cyan-400">
                {job.vehicle}
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                {job.title}
              </h2>

              <p className="mt-6 leading-8 text-gray-300">
                {job.description}
              </p>

            </Card>
          ))}

        </div>

        <div className="mt-20 text-center">

          <h2 className="text-4xl font-black">
            Need Something Similar?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Whether it's routine servicing, diagnostics or an unexpected
            breakdown, WMS Scotland brings professional mechanical repairs
            directly to your home, workplace or roadside.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Button href="/contact">
              Contact WMS Scotland
            </Button>

            <Button
              href="/services"
              variant="secondary"
            >
              View Services
            </Button>

          </div>

        </div>

      </Container>
    </main>
  );
}