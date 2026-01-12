import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { OutcomesSection } from '@/components/OutcomesSection';
import { FAQSection } from '@/components/FAQSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <OutcomesSection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
