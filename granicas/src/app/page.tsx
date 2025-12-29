import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import RealizationsSection from "@/components/home/RealizationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";
import AreaSection from "@/components/home/AreaSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import Footer from "@/components/home/Footer";
import AboutSection from "@/components/home/AboutSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <HowWeWorkSection />
      <RealizationsSection />
      {/* <AboutSection /> */}
      <TestimonialsSection />
      {/* <PricingSection />
       */}
      <AreaSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </>
  );
}
