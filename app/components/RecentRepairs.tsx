import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import recentWork from "../data/recentWork";

export default function RecentRepairs() {
  return (
    <section
      id="recent-repairs"
      className="bg-[#0b1220] py-24"
    >
      <Container>

        <SectionHeading
          title="Recent Repairs"
          subtitle="Every repair is carried out at your home, workplace or roadside, saving you the hassle of taking your vehicle to a garage."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {recentWork.map((repair) => (
            <Card key={repair.title}>

              <h3 className="text-2xl font-bold text-cyan-400">
                {repair.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-white">
                {repair.vehicle}
              </p>

              <p className="mt-5 leading-8 text-gray-300">
                {repair.description}
              </p>

            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}