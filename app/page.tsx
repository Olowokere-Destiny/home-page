import AdSection from "@/components/AdSection";
import CabSection from "@/components/CabSection";
import ChooseSection from "@/components/ChooseSection";
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
        {/* <ReviewSection /> */}
      </main>
    </>
  );
}
