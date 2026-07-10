import Hero from "./components/Hero";
import Emergency from "./components/Emergency";
import Services from "./components/Services";
import RecentRepairs from "./components/RecentRepairs";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Areas from "./components/Areas";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">

      <Hero />

      <Emergency />

      <Services />

      <RecentRepairs />

      <WhyChoose />

      <About />

      <Reviews />

      <Areas />

      <FAQ />

      <Contact />

      <CallToAction />

    </main>
  );
}