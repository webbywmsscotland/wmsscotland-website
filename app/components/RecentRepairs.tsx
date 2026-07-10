import Image from "next/image";

import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import recentWork from "../data/recentWork";

export default function RecentRepairs() {
  return (
    <section id="recent-repairs" className="bg-[#0b1220] py-24">
      <Container>
        <SectionHeading
          title="Recent Repairs"
          subtitle="Every repair shown below is genuine work completed by WMS Scotland. No stock photos—just real vehicles, real faults and real results."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentWork.map((repair) => (
            <Card
              key={repair.title}
              className="overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={repair.image}
                alt={repair.title}
                width={800}
                height={500}
                className="mb-6 h-56 w-full rounded-xl object-cover"
              />

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