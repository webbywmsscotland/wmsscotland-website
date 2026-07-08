export default function Contact() {
  return (
    <section className="bg-[#0b1220] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-4 text-center text-5xl font-black text-white">
          Get In Touch
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-400">
          Need a mechanic? Whether it's routine servicing or an unexpected
          breakdown, we're only a phone call away.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-10">

            <h3 className="mb-8 text-3xl font-bold text-cyan-400">
              Contact Details
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-gray-400">📞 Phone</p>
                <a
                  href="tel:07523100958"
                  className="text-2xl font-bold hover:text-cyan-400"
                >
                  07523 100958
                </a>
              </div>

              <div>
                <p className="text-gray-400">💬 WhatsApp</p>
                <a
                  href="https://wa.me/447523100958"
                  className="text-2xl font-bold hover:text-cyan-400"
                >
                  Message Now
                </a>
              </div>

              <div>
                <p className="text-gray-400">📍 Service Area</p>
                <p className="text-xl">
                  Dunbar & East Lothian
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-10">

            <h3 className="mb-8 text-3xl font-bold text-cyan-400">
              Opening Hours
            </h3>

            <div className="space-y-4 text-xl">

              <div className="flex justify-between">
                <span>Monday</span>
                <span>8am - 6pm</span>
              </div>

              <div className="flex justify-between">
                <span>Tuesday</span>
                <span>8am - 6pm</span>
              </div>

              <div className="flex justify-between">
                <span>Wednesday</span>
                <span>8am - 6pm</span>
              </div>

              <div className="flex justify-between">
                <span>Thursday</span>
                <span>8am - 6pm</span>
              </div>

              <div className="flex justify-between">
                <span>Friday</span>
                <span>8am - 6pm</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8am - 1pm</span>
              </div>

              <div className="flex justify-between text-cyan-400 font-bold">
                <span>Sunday</span>
                <span>Emergency Call-Outs</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}