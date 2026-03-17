import CabSection from "@/components/CabSection";
import ChooseSection from "@/components/ChooseSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
      </main>
    </>
  );
}
