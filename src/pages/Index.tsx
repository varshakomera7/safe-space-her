import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmergencySection from "@/components/EmergencySection";
import SafetyTips from "@/components/SafetyTips";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EmergencySection />
      <SafetyTips />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
