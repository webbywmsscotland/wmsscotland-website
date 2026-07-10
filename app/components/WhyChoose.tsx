import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const reasons = [
  {
    title: "We Come To You",
    description:
      "No waiting around at a garage. We carry out repairs at your home, workplace or roadside where possible.",
  },
  {
    title: "Honest Advice",
    description:
      "Straightforward recommendations, transparent pricing and no unnecessary work.",
  },
  {
    title: "Wide Range of Vehicles",
    description:
      "Cars, vans, 4x4s, agricultural machinery and marine engines all supported.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#09101d] py-24">
      <Container>

        <SectionHeading
          title="Why Choose WMS Scotland?"
          subtitle="Professional mobile mechanical services with honest advice and quality workmanship."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {reasons.map((reason) => (
            <Card key={reason.title}>

              <h3 className="text-2xl font-bold text-cyan-400">
                {reason.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {reason.description}
              </p>

            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}