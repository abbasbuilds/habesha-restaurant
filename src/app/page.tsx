import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Buffet } from "@/components/Buffet";
import { Events } from "@/components/Events";
import { Reviews } from "@/components/Reviews";
import { VisitUs } from "@/components/VisitUs";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Buffet />
      <Events />
      <Reviews />
      <VisitUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
