import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Main Headline */}
        <AnimatedSection delay={0}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Your Personal </span>
            <span className="gradient-text">AI Career Mentor</span>
          </h1>
        </AnimatedSection>

        {/* Subheadline */}
        <AnimatedSection delay={0.1}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Simple. Personalized. Actionable.
          </p>
        </AnimatedSection>

        {/* Supporting Text */}
        <AnimatedSection delay={0.15}>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Get custom roadmaps based on your time, only the highest-quality resources, 
            automated resume building, and job suggestions — all in one place.
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('waitlist')}
              className="group"
            >
              Get Early Access
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => window.open('https://wa.me/', '_blank')}
              className="group"
            >
              <MessageCircle size={18} className="mr-2" />
              Try the AI on WhatsApp
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
