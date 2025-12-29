import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import VisionMission from "../components/VisionMission";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import News from "../components/News";
import Teachers from "../components/Teachers";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <VisionMission />
      <Features />
      <News />
      <Teachers />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}