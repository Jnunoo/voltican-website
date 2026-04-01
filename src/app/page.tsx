import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AIServices from "@/components/AIServices";
import CapabilitiesShowcase from "@/components/CapabilitiesShowcase";
import HowWeWork from "@/components/HowWeWork";
import Industries from "@/components/Industries";
import TechPartners from "@/components/TechPartners";
import SocialProof from "@/components/SocialProof";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechPartners />
        <Services />
        <CapabilitiesShowcase />
        <AIServices />
        <HowWeWork />
        <Industries />
        <SocialProof />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
