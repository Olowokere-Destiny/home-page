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
      </main>
    </>
  );
}
