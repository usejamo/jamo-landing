import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import HowItWorks from "@/components/HowItWorks";
import DemoRequest from "@/components/DemoRequest";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PainSection />
      <HowItWorks />
      <DemoRequest />
      <Footer />
    </main>
  );
};

export default Index;
