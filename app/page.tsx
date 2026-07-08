import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Emergency from "./components/Emergency";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Areas from "./components/Areas";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <Navbar />
      <Hero />
      <Emergency />
      <Services />
      <WhyChoose />
      <About />
      <Reviews />
      <Areas />
      <Contact />
    </main>
  );
}