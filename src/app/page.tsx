
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AIServices from "@/components/AIServices";
import HowWeWork from "@/components/HowWeWork";
import Industries from "@/components/Industries";
import TechPartners from "@/components/TechPartners";
import SocialProof from "@/components/SocialProof";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { getPublishedTestimonials } from "@/lib/cms/testimonials";

export default async function Home() {
  const testimonials = await getPublishedTestimonials();
  return (
    <>
      <main>
        <Hero />
        <About />
        <TechPartners />
        <Services />
        <AIServices />
        <HowWeWork />
        <Industries />
        <SocialProof testimonials={testimonials} />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
