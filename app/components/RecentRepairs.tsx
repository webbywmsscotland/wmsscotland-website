export default function RecentRepairs() {
  const repairs = [
    {
      vehicle: "Ford Transit Custom",
      repair: "Rear brake discs and pads replaced at customer's workplace.",
      location: "Dunbar",
      result: "Completed same day",
    },
    {
      vehicle: "BMW 320d",
      repair: "Battery drain diagnosed and repaired at customer's home.",
      location: "Haddington",
      result: "Customer back on the road",
    },
    {
      vehicle: "New Holland Tractor",
      repair: "Starter motor replaced on-site during harvest.",
      location: "East Linton",
      result: "Returned to work immediately",
    },
  ];

  return (
    <section
      id="recent-repairs"
      className="bg-[#0b1220] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-black text-white">
          Recent Repairs
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-gray-400">
          Every repair is carried out at your home, workplace or roadside,
          saving you the hassle of taking your vehicle to a garage.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {repairs.map((repair) => (
            <div
              key={repair.vehicle}
              className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {repair.vehicle}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {repair.repair}
              </p>

              <div className="mt-8 border-t border-cyan-500/20 pt-5">

                <p className="text-sm uppercase tracking-wider text-gray-400">
                  Location
                </p>

                <p className="mt-1 font-semibold text-white">
                  📍 {repair.location}
                </p>

                <p className="mt-5 text-sm uppercase tracking-wider text-gray-400">
                  Outcome
                </p>

                <p className="mt-1 font-semibold text-cyan-400">
                  ✔ {repair.result}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}