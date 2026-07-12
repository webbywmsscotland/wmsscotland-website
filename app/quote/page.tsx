export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#08111F] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-cyan-400">
            Request a Quote
          </span>

          <h1 className="mt-8 text-5xl font-black">
            Tell Us About Your Vehicle
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            Whether it's a warning light, strange noise, breakdown or routine
            servicing, complete the form below and we'll get back to you as
            soon as possible.
          </p>

        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-10">

          <form className="space-y-12">

            <div>
              <h2 className="mb-6 text-2xl font-bold text-cyan-400">
                Your Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  placeholder="Full Name"
                  className="rounded-xl border border-white/10 bg-[#08111F] p-4 outline-none focus:border-cyan-400"
                />

                <input
                  placeholder="Phone Number"
                  className="rounded-xl border border-white/10 bg-[#08111F] p-4 outline-none focus:border-cyan-400"
                />

                <input
                  placeholder="Email Address (Optional)"
                  className="rounded-xl border border-white/10 bg-[#08111F] p-4 outline-none focus:border-cyan-400 md:col-span-2"
                />

              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-cyan-400">
                Vehicle Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  placeholder="Vehicle Registration"
                  className="rounded-xl border border-white/10 bg-[#08111F] p-4 outline-none focus:border-cyan-400"
                />

                <input
                  placeholder="Make & Model"
                  className="rounded-xl border border-white/10 bg-[#08111F] p-4 outline-none focus:border-cyan-400"
                />

              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-cyan-400">
                What's Happening?
              </h2>

              <textarea
                rows={7}
                placeholder="Describe the fault... When did it start? Are there any warning lights or unusual noises?"
                className="w-full rounded-xl border border-white/10 bg-[#08111F] p-4 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-cyan-400">
                Can the vehicle still be driven?
              </h2>

              <div className="flex flex-wrap gap-6">

                <label className="flex items-center gap-3">
                  <input type="radio" name="driveable" />
                  Yes
                </label>

                <label className="flex items-center gap-3">
                  <input type="radio" name="driveable" />
                  No
                </label>

                <label className="flex items-center gap-3">
                  <input type="radio" name="driveable" />
                  Unsure
                </label>

              </div>

            </div>

            <div>

              <h2 className="mb-6 text-2xl font-bold text-cyan-400">
                Photos
              </h2>

              <div className="rounded-2xl border-2 border-dashed border-cyan-500/30 bg-[#08111F] p-12 text-center">

                <div className="text-5xl">
                  📷
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                  Upload Photos
                </h3>

                <p className="mt-4 text-gray-400">
                  Photos often help us diagnose faults before we contact you.
                </p>

                <button
                  type="button"
                  className="mt-8 rounded-full bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
                >
                  Choose Photos
                </button>

              </div>

            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-500 py-5 text-xl font-black text-black transition hover:bg-cyan-400"
            >
              Request My Quote
            </button>

          </form>

        </div>

      </div>
    </main>
  );
}