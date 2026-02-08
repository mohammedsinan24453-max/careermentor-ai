<<<<<<< HEAD
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection"; 
import { CareerFlowSection } from "@/components/CareerFlowSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { WhoIsThisForSection } from "@/components/WhoIsThisForSection";
import WaitlistSection from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
=======
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { OutcomesSection } from '@/components/OutcomesSection';
import { FAQSection } from '@/components/FAQSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { Footer } from '@/components/Footer';
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll to Top Anchor */}
      <div id="top" /> 
      
      <Navbar />

      <main>
        {/* Landing Page */}
        <HeroSection />
<<<<<<< HEAD

        {/* Features - Industry Roadmaps */}
        <div id="features">
          <FeaturesSection />
        </div>

        {/* How It Works - The Step-by-Step Logic */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        {/* Secondary Info */}
        <CareerFlowSection />

        {/* About Section */}
        <div id="about">
          <AboutSection />
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <FAQSection />
        </div>

        <WhoIsThisForSection />

        {/* Waitlist - Target for all "Join Waitlist" buttons */}
        <div id="waitlist">
          <WaitlistSection />
        </div>
=======
        <FeaturesSection />
        <HowItWorksSection />
        <OutcomesSection />
        <FAQSection />
        <WaitlistSection />
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
      </main>

      <Footer />
    </div>
  );
};

export default Index;