import CallToAction from "../components/CallToAction";

const jobs = [
  {
    title: "Brake overhaul on Ford Transit",
    text: "Front discs, pads and calipers replaced on a customer's work van at their home address in Dunbar.",
  },
  {
    title: "Diagnostic repair on VW Golf",
    text: "Intermittent running fault traced to a fuel pressure issue and repaired without the vehicle visiting a garage.",
  },
  {
    title: "Agricultural machinery service",
    text: "Routine servicing and inspection carried out on a compact tractor for a local customer.",
  },
];

export default function RecentWorkPage() {
  return (
    <main className="bg-[#08111F] text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Recent Work
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            A few recent jobs completed by WMS Scotland
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            From everyday servicing and brake repairs to diagnostics and
            agricultural work, these are the types of jobs regularly carried out
            across East Lothian.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-6"
            >
              <h2 className="text-xl font-bold text-white">{job.title}</h2>
              <p className="mt-4 leading-7 text-gray-300">{job.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            Contact WMS Scotland
          </a>
        </div>
      </div>

      <CallToAction />
    </main>
  );
}