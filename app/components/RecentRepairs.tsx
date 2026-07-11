import Image from "next/image";
import Link from "next/link";

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

            <Link
              key={repair.slug}
              href={`/repairs/${repair.slug}`}
              className="group"
            >

              <Card className="overflow-hidden h-full cursor-pointer">

                <div className="overflow-hidden rounded-xl">

                  <Image
                    src={repair.image}
                    alt={repair.title}
                    width={800}
                    height={500}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="mt-6">

                  <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold uppercase text-black">
                    {repair.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-cyan-400 transition group-hover:text-white">
                    {repair.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-white">
                    {repair.vehicle}
                  </p>

                  <p className="mt-5 leading-8 text-gray-300">
                    {repair.description}
                  </p>

                  <div className="mt-8 flex items-center font-bold text-cyan-400 transition group-hover:translate-x-2">
                    View Repair →
                  </div>

                </div>

              </Card>

            </Link>

          ))}

        </div>

      </Container>
    </section>
  );
}