export default function Reviews() {
  const reviews = [
    {
      name: "Sarah – Dunbar",
      text: "Fantastic service. Scott came to my house the same day and got my car running again. Highly recommended!",
    },
    {
      name: "James – Haddington",
      text: "Professional, friendly and much more convenient than taking my van to a garage.",
    },
    {
      name: "Emma – North Berwick",
      text: "Honest advice, fair pricing and excellent workmanship. I'll definitely use WMS Scotland again.",
    },
  ];

  return (
   
    <section
  id="reviews"
  className="bg-[#09101d] py-24"
>
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-black text-white">
          Customer Reviews
        </h2>

        <p className="mb-16 text-center text-lg text-gray-400">
          Real feedback from happy customers across East Lothian.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8"
            >
              <div className="mb-4 text-2xl text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mb-6 italic text-gray-300">
                "{review.text}"
              </p>

              <p className="font-bold text-cyan-400">
                {review.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}