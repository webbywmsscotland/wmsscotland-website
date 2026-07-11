const reviews = [
  {
    initials: "AH",
    name: "Ashlie H.",
    text: "Communication is on point, open and honest. Scott made me feel completely at ease with my car. Priced extremely fairly and I'll continue recommending him to anyone.",
  },
  {
    initials: "MM",
    name: "Megan M.",
    text: "Amazing service and a mechanic who genuinely cares about the customer's car, not the money. Excellent price and I'll definitely be booking again.",
  },
  {
    initials: "KH",
    name: "Kate H.",
    text: "Absolutely wonderful service, quick, reasonably priced and I cannot recommend Scott enough.",
  },
  {
    initials: "JW",
    name: "Joe W.",
    text: "Top bloke and looks after you.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#08111F] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-cyan-400">
            ⭐ Facebook Recommendations
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Trusted by Local Customers
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            Real recommendations from customers who have trusted WMS Scotland
            with their vehicles.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="group rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#121d33] to-[#0b1220] p-10 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >

              <div className="text-2xl tracking-widest text-yellow-400">
                ★★★★★
              </div>

              <div className="mt-8 text-6xl font-black text-cyan-500/20">
                ❝
              </div>

              <p className="-mt-5 text-lg italic leading-9 text-gray-300">
                {review.text}
              </p>

              <div className="mt-10 flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 font-black text-black">
                  {review.initials}
                </div>

                <div>

                  <h3 className="text-lg font-bold text-white">
                    {review.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2">

                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                      Facebook
                    </span>

                    <span className="text-sm text-gray-400">
                      Verified Recommendation
                    </span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}