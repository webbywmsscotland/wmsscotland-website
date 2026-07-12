export default function Services() {
  const services = [
    {
      title: "Servicing",
      text: "Routine servicing for all makes and models.",
      icon: "🔧",
    },
    {
      title: "Diagnostics",
      text: "Professional fault finding and diagnostics.",
      icon: "💻",
    },
    {
      title: "Brakes & Suspension",
      text: "Keeping your vehicle safe and reliable.",
      icon: "🛞",
    },
    {
      title: "Cars & Vans",
      text: "Repairs and maintenance at your home or workplace.",
      icon: "🚗",
    },
    {
      title: "Tractors",
      text: "Agricultural servicing and repairs.",
      icon: "🚜",
    },
    {
      title: "Boats",
      text: "Marine engine servicing and mechanical repairs.",
      icon: "🚤",
    },
  ];

  return (
    <section
  id="services"
  className="mx-auto max-w-7xl px-6 py-20"
>
      <h2 className="mb-12 text-center text-4xl font-black text-white">
        Our Services
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-cyan-500/20 bg-[#10192d] p-8 transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
          >
            <div className="mb-4 text-5xl">{service.icon}</div>

            <h3 className="mb-3 text-2xl font-bold text-cyan-400">
              {service.title}
            </h3>

            <p className="text-gray-300">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}