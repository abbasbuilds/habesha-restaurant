import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { OwnerStory } from "@/components/OwnerStory";
import { About } from "@/components/About";
import { EthiopianBorder } from "@/components/EthiopianBorder";
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
      <OwnerStory />
      <EthiopianBorder id="hr-story-about" flip />
      <About />
      <EthiopianBorder id="hr-ab-menu" />
      <Menu />
      <EthiopianBorder id="hr-menu-buf" flip />
      <Buffet />
      <EthiopianBorder id="hr-buf-ev" />
      <Events />
      <Reviews />
      <VisitUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
