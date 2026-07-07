export default function About() {
  return (
    <section className="py-24 bg-[#0b1220]">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">

        <div>
          <h2 className="text-4xl font-black text-white mb-6">
            Meet <span className="text-cyan-400">Webby</span>
          </h2>

          <p className="text-gray-300 leading-8 text-lg mb-6">
            I'm Scott, owner of WMS Scotland.
          </p>

          <p className="text-gray-300 leading-8 mb-6">
            I started WMS Scotland to offer something different from the
            traditional garage experience. No waiting around, no recovery
            trucks and no unnecessary inconvenience.
          </p>

          <p className="text-gray-300 leading-8 mb-6">
            Whether you're at home, at work or stranded at the roadside,
            I bring professional mechanical services directly to you.
          </p>

          <p className="text-gray-300 leading-8">
            From family cars and vans to tractors, agricultural machinery,
            4x4s and boats — if it has an engine, there's a good chance I
            can help.
          </p>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-10">

          <h3 className="text-2xl font-bold text-cyan-400 mb-6">
            Why customers choose WMS Scotland
          </h3>

          <ul className="space-y-5 text-lg text-gray-200">
            <li>✅ Honest advice</li>
            <li>✅ Mobile service at your home or workplace</li>
            <li>✅ Friendly, personal service</li>
            <li>✅ Modern diagnostics</li>
            <li>✅ Cars, vans, 4x4s, tractors & boats</li>
            <li>✅ Quality parts used wherever possible</li>
          </ul>

        </div>

      </div>
    </section>
  );
}