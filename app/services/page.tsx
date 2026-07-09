import Link from "next/link";
import { Wrench, Car, Cpu, Truck, Tractor, Ship } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Vehicle Servicing",
    description:
      "Interim, full and manufacturer servicing carried out at your home or workplace.",
  },
  {
    icon: Cpu,
    title: "Diagnostics",
    description:
      "Professional fault finding, warning lights, ABS, airbag and engine management diagnostics.",
  },
  {
    icon: Wrench,
    title: "Brakes & Suspension",
    description:
      "Brake pads, discs, calipers, springs, shocks and suspension repairs.",
  },
  {
    icon: Truck,
    title: "Cars, Vans & 4x4s",
    description:
      "Repairs and servicing for private and commercial vehicles.",
  },
  {
    icon: Tractor,
    title: "Agricultural Machinery",
    description:
      "On-site repairs and servicing to keep farms and businesses moving.",
  },
  {
    icon: Ship,
    title: "Marine Engines",
    description:
      "Servicing and repairs for boat engines and marine equipment.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0b1220] text-white">

      <section className="mx-auto max-w-7xl px-6 py-20">

        <Link
          href="/"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-6xl font-black">
          Our Services
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-300">
          WMS Scotland offers professional mobile mechanical services
          across East Lothian. We bring the workshop to your home,
          workplace or roadside, helping keep you moving with honest,
          reliable workmanship.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8 transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.20)]"
              >
                <Icon
                  size={42}
                  className="text-cyan-400"
                />

                <h2 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-4 leading-8 text-gray-300">
                  {service.description}
                </p>

                <button className="mt-8 rounded-xl bg-cyan-500 px-5 py-3 font-bold text-black transition hover:bg-cyan-400">
                  Learn More
                </button>

              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
}