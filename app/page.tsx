import AdSection from "@/components/AdSection";
import AdSection2 from "@/components/AdSection2";
import CabSection from "@/components/CabSection";
import ChooseSection from "@/components/ChooseSection";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ReviewSection from "@/components/ReviewSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <CabSection />
        <ChooseSection />
        <AdSection />
        <HowItWorks />
        <ReviewSection />
        <AdSection2 />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
