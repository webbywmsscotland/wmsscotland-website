import Link from "next/link";

import services from "../data/services";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function ServicesPage() {
  return (
    <main className="bg-[#0b1220] py-24 text-white">
      <Container>

        <Link
          href="/"
          className="text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Home
        </Link>

        <div className="mt-8">

          <SectionHeading
            title="Our Services"
            subtitle="Professional mobile mechanical repairs carried out across East Lothian."
          />

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.slug}>

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

                <div className="mt-8 flex gap-3">

                  <Button href={`/services/${service.slug}`}>
                    Learn More
                  </Button>

                </div>

              </Card>
            );
          })}

        </div>

      </Container>
    </main>
  );
}