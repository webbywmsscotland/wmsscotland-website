export default function Areas() {
  const areas = [
    "Dunbar",
    "East Linton",
    "North Berwick",
    "Haddington",
    "Tranent",
    "Prestonpans",
    "Longniddry",
    "Musselburgh",
    "Gifford",
    "Cockburnspath",
    "West Barns",
    "Innerwick",
  ];

  return (
    <section className="bg-[#09101d] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-black text-white">
          Areas We Cover
        </h2>

        <p className="mx-auto mt-6 mb-14 max-w-3xl text-center text-lg text-gray-400">
          Based in Dunbar, WMS Scotland provides professional mobile mechanical
          services across East Lothian and surrounding areas.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-cyan-500/20 bg-[#10192d] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400"
            >
              📍 <span className="font-semibold">{area}</span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-400">
          Don't see your area listed?
          <br />
          <span className="font-semibold text-cyan-400">
            Give us a call — we're always happy to help.
          </span>
        </p>

      </div>
    </section>
  );
}