export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08111F] px-4 text-white">
      <div className="max-w-lg text-center">
        <div className="text-7xl font-black text-cyan-400">404</div>

        <h1 className="mt-6 text-3xl font-black">
          Page not found
        </h1>

        <p className="mt-4 text-lg leading-8 text-gray-300">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            🏠 Back to Home
          </a>

          <a
            href="/quote"
            className="inline-flex items-center justify-center rounded-xl border border-cyan-500 px-6 py-3 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </main>
  );
}