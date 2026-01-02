import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { AboutSection } from '@/components/AboutSection';
import { IndustryDrivenSection } from '@/components/IndustryDrivenSection';
import { FreeResourcesSection } from '@/components/FreeResourcesSection';
import { TrackingResumeSection } from '@/components/TrackingResumeSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { WhoIsThisForSection } from '@/components/WhoIsThisForSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <AboutSection />
        <IndustryDrivenSection />
        <FreeResourcesSection />
        <TrackingResumeSection />
        <TestimonialsSection />
        <FAQSection />
        <WhoIsThisForSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
