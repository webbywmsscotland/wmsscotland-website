import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Emergency from "./components/Emergency";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Areas from "./components/Areas";
import RecentRepairs from "./components/RecentRepairs";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="bg-[#0b1220] text-white">
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
    </main>
  );
}