import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Process from "@/components/Process";
import About from "@/components/About";
import Review from "@/components/Review";
import Area from "@/components/Area";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        {/* <TrustBar /> */}
        <Services />
        <Process />
        {/* <About /> */}
        <Review />
        <Area />
        <Faq />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <hr className="border-line" />
        </div>
        {/* <Works /> */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
