export default function WhyChoose() {
  const reasons = [
    {
      title: "We Come To You",
      text: "No garage waiting rooms. We carry out repairs at your home, workplace or roadside.",
      icon: "🚐",
    },
    {
      title: "Honest Pricing",
      text: "Clear advice, fair prices and no unnecessary work.",
      icon: "💷",
    },
    {
      title: "Fully Equipped",
      text: "Professional diagnostic equipment and quality tools brought to every job.",
      icon: "🧰",
    },
    {
      title: "Wide Range of Vehicles",
      text: "Cars, vans, 4x4s, tractors and boats all welcome.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="bg-[#09101d] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-black">
          Why Choose WMS Scotland?
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-400">
          Reliable mobile mechanical services across East Lothian with honest
          workmanship, professional equipment and the convenience of us coming
          to you.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            >
              <div className="mb-5 text-5xl">{reason.icon}</div>

              <h3 className="mb-3 text-2xl font-bold text-cyan-400">
                {reason.title}
              </h3>

              <p className="leading-8 text-gray-300">
                {reason.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}