import Link from "next/link";
import Image from "next/image";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

import recentWork from "../data/recentWork";

export default function RepairsPage() {
  return (
    <main className="bg-[#08111F] py-20">

      <Container>

        <SectionHeading
          title="Recent Repairs"
          subtitle="A selection of genuine repairs completed by WMS Scotland across East Lothian."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {recentWork.map((repair) => (

            <Link
              key={repair.slug}
              href={`/repairs/${repair.slug}`}
              className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#10192d] transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]"
            >

              <Image
                src={repair.image}
                alt={repair.title}
                width={800}
                height={600}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-8">

                <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold uppercase text-black">
                  {repair.category}
                </span>

                <h2 className="mt-5 text-2xl font-bold text-white">
                  {repair.title}
                </h2>

                <p className="mt-2 font-semibold text-cyan-400">
                  {repair.vehicle}
                </p>

                <p className="mt-5 leading-7 text-gray-300">
                  {repair.description}
                </p>

                <p className="mt-8 font-semibold text-cyan-400">
                  View Repair →
                </p>

              </div>

            </Link>

          ))}

        </div>

      </Container>

    </main>
  );
}