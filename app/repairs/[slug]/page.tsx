
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";

import Container from "../../components/ui/Container";
import recentWork from "../../data/recentWork";
import business from "../../data/business";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return recentWork.map((repair) => ({
    slug: repair.slug,
  }));
}

export default async function RepairPage({ params }: Props) {
  const { slug } = await params;

  const repair = recentWork.find((item) => item.slug === slug);

  if (!repair) {
    notFound();
  }

  const relatedRepairs = recentWork
    .filter((item) => item.slug !== repair.slug)
    .slice(0, 3);

  return (
    <main className="bg-[#08111F] py-16">

      <Container>

        <Link
          href="/repairs"
          className="mb-10 inline-flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={18} />
          Back to Repair Portfolio
        </Link>

        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#10192d]">

          <Image
            src={repair.image}
            alt={repair.title}
            width={1400}
            height={900}
            className="h-[420px] w-full object-cover"
          />

          <div className="p-10">

            <div className="flex flex-wrap gap-3">

              <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-black">
                {repair.category}
              </span>

              <span className="rounded-full border border-cyan-500/30 px-4 py-2 text-sm font-semibold text-cyan-300">
                📍 {repair.location}
              </span>

            </div>

            <h1 className="mt-6 text-5xl font-black text-white">
              {repair.title}
            </h1>

            <p className="mt-3 text-2xl text-cyan-400">
              {repair.vehicle}
            </p>

          </div>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8">

            <h2 className="mb-4 text-2xl font-bold text-white">
              Problem Reported
            </h2>

            <p className="leading-8 text-gray-300">
              {repair.complaint}
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8">

            <h2 className="mb-4 text-2xl font-bold text-white">
              Diagnosis
            </h2>

            <p className="leading-8 text-gray-300">
              {repair.diagnosis}
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8">

            <h2 className="mb-4 text-2xl font-bold text-white">
              Repair Carried Out
            </h2>

            <p className="leading-8 text-gray-300">
              {repair.repair}
            </p>

          </div>

        </div>

        <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-transparent p-10">

          <h2 className="text-3xl font-black text-white">
            Need a Mobile Mechanic?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Whether your vehicle has broken down, developed a warning light or
            simply needs servicing, WMS Scotland carries out professional
            repairs at your home or workplace across East Lothian.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href={business.phoneLink}
              className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href={business.whatsapp}
              className="flex items-center gap-2 rounded-2xl border border-cyan-500 px-8 py-4 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

          </div>

        </div>

        <div className="mt-20">

          <h2 className="mb-8 text-3xl font-black text-white">
            Related Repairs
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {relatedRepairs.map((item) => (

              <Link
                key={item.slug}
                href={`/repairs/${item.slug}`}
                className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#10192d] transition hover:-translate-y-2 hover:border-cyan-400"
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-cyan-400">
                    {item.vehicle}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </Container>

    </main>
  );
}