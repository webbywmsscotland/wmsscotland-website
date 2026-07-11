export default function Reviews() {
  const reviews = [
    {
      name: "Ashlie H.",
      date: "April 2026",
      text: "Communication is on point, open and honest. Scott made me feel completely at ease with my car. Priced extremely fairly and I'll continue recommending him to anyone.",
    },
    {
      name: "Megan M.",
      date: "May 2026",
      text: "Amazing service and a mechanic who genuinely cares about the customer's car, not the money. Excellent price and I'll definitely be booking again.",
    },
    {
      name: "Kate H.",
      date: "February 2026",
      text: "Absolutely wonderful service, quick, reasonably priced and I cannot recommend Scott enough.",
    },
    {
      name: "Joe W.",
      date: "April 2026",
      text: "Top bloke and looks after you.",
    },
  ];

  return (
    <section className="bg-[#08111F] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-cyan-400">
            ⭐ Facebook Recommendations
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Trusted by Local Customers
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-400">
            Genuine recommendations from customers across East Lothian.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="text-2xl text-yellow-400">
                ★★★★★
              </div>

              <p className="mt-6 italic leading-8 text-gray-300">
                "{review.text}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="font-bold text-white">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-400">
                  Facebook Recommendation • {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}