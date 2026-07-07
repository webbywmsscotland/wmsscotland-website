import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <Hero />
      <Services />
      <WhyChoose />
      <About />
      <Reviews />
    </main>
  );
}