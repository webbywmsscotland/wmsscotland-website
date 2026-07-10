import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

export default function NotFound() {
  return (
    <main className="bg-[#0b1220] py-32 text-white">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <div className="text-8xl">
            🔧
          </div>

          <h1 className="mt-8 text-6xl font-black">
            404
          </h1>

          <h2 className="mt-6 text-4xl font-bold text-cyan-400">
            Looks like this engine won't start...
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Sorry, we couldn't find the page you were looking for.
            But don't worry — WMS Scotland is still here to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Button href="/">
              🏠 Back to Home
            </Button>

            <Button
              href="tel:07523100958"
              variant="secondary"
            >
              📞 Call Now
            </Button>

          </div>

        </div>

      </Container>
    </main>
  );
}