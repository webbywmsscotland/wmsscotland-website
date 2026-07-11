import Image from "next/image";

import Container from "./ui/Container";
import Card from "./ui/Card";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#08111F] py-24"
    >
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Photo */}

          <div>

            <Image
              src="/repairs/boat.jpeg"
              alt="Scott from WMS Scotland"
              width={800}
              height={900}
              className="rounded-3xl border border-cyan-500/20 shadow-2xl"
            />

          </div>

          {/* Story */}

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Meet Scott
            </p>

            <h2 className="text-5xl font-black text-white">
              The person behind
              <span className="block text-cyan-400">
                WMS Scotland
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Hi, I'm Scott, the owner of WMS Scotland.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-300">
              I started WMS Scotland with one simple goal: to make vehicle
              repairs easier. Instead of asking customers to take time off
              work, arrange lifts or sit in a waiting room, I bring
              professional mechanical repairs directly to your home,
              workplace or another convenient location.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-300">
              I work on everything from everyday family cars and vans to
              agricultural machinery and marine engines. Whatever I'm
              repairing, you'll always receive honest advice, quality
              workmanship and clear communication.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-300">
              I'm proud to be based in Dunbar and to help keep people moving
              across East Lothian.
            </p>

          </div>

        </div>

        {/* Values */}

        <div className="mt-20">

          <Card>

            <h3 className="mb-8 text-3xl font-black text-white">
              Why Customers Choose
              <span className="text-cyan-400"> WMS Scotland</span>
            </h3>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-[#08111F] p-6">
                <h4 className="mb-2 font-bold text-cyan-400">
                  🚐 We Come To You
                </h4>

                <p className="text-gray-300">
                  Repairs carried out at your home, workplace or another
                  convenient location.
                </p>
              </div>

              <div className="rounded-2xl bg-[#08111F] p-6">
                <h4 className="mb-2 font-bold text-cyan-400">
                  🤝 Honest Advice
                </h4>

                <p className="text-gray-300">
                  Straightforward recommendations without unnecessary work.
                </p>
              </div>

              <div className="rounded-2xl bg-[#08111F] p-6">
                <h4 className="mb-2 font-bold text-cyan-400">
                  🔧 Wide Experience
                </h4>

                <p className="text-gray-300">
                  Cars, vans, 4x4s, agricultural machinery and marine engines.
                </p>
              </div>

              <div className="rounded-2xl bg-[#08111F] p-6">
                <h4 className="mb-2 font-bold text-cyan-400">
                  ⭐ Quality Workmanship
                </h4>

                <p className="text-gray-300">
                  Every repair is completed with care, using quality parts
                  wherever practical.
                </p>
              </div>

            </div>

          </Card>

        </div>

      </Container>
    </section>
  );
}