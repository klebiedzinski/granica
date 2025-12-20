import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import PricingSection from "@/components/home/PricingSection";
import RealizationsSection from "@/components/home/RealizationsSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <RealizationsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
