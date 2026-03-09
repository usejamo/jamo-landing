import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import HowItWorks from "@/components/HowItWorks";
import WhyJamo from "@/components/WhyJamo";
import DemoRequest from "@/components/DemoRequest";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <PainSection />
      <HowItWorks />
      <WhyJamo />
      <DemoRequest />
      <Footer />
    </main>
  );
};

export default Index;
