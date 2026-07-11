import { PhoneCall, Truck, Wrench } from "lucide-react";

import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

export default function HowItWorks() {
  return (
    <section className="bg-[#08111F] py-24">
      <Container>

        <SectionHeading
          title="How It Works"
          subtitle="Getting your vehicle repaired shouldn't mean wasting your day. WMS Scotland brings professional mechanical services directly to your home or workplace."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          <Card className="text-center">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
              <PhoneCall size={38} className="text-cyan-400" />
            </div>

            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">
              Step 1
            </div>

            <h3 className="text-2xl font-bold text-white">
              Get In Touch
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Call or WhatsApp to discuss the issue. We'll offer honest advice
              and arrange a convenient time that works around your day.
            </p>

          </Card>

          <Card className="text-center">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
              <Truck size={38} className="text-cyan-400" />
            </div>

            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">
              Step 2
            </div>

            <h3 className="text-2xl font-bold text-white">
              We Come To You
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Whether you're at home or at work, we bring professional tools,
              diagnostic equipment and quality parts to your vehicle.
            </p>

          </Card>

          <Card className="text-center">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
              <Wrench size={38} className="text-cyan-400" />
            </div>

            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">
              Step 3
            </div>

            <h3 className="text-2xl font-bold text-white">
              Back On The Road
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Your repair is completed professionally with clear communication,
              quality workmanship and no unnecessary trips to a garage.
            </p>

          </Card>

        </div>

      </Container>
    </section>
  );
}