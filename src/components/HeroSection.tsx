import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Now accepting early access applications</span>
          </div>
        </AnimatedSection>

        {/* Main Headline */}
        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">Stop drowning in resources.</span>
            <br />
            <span className="text-foreground">Start making progress.</span>
          </h1>
        </AnimatedSection>

        {/* Subheading */}
        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            CareerMentor AI creates your personalized roadmap, tracks your progress, 
            auto-generates your resume, and helps you discover relevant job opportunities — all in one place.
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('waitlist')}
              className="group"
            >
              Join Waitlist
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection('how-it-works')}
              className="group"
            >
              <Play size={16} className="mr-2" />
              See How It Works
            </Button>
          </div>
        </AnimatedSection>

        {/* Trust Indicators */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Trusted by learners preparing for</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground/70">
              <span className="text-sm font-medium">Tech Careers</span>
              <span className="text-muted-foreground/30">•</span>
              <span className="text-sm font-medium">Data Science</span>
              <span className="text-muted-foreground/30">•</span>
              <span className="text-sm font-medium">Product Management</span>
              <span className="text-muted-foreground/30">•</span>
              <span className="text-sm font-medium">Design</span>
              <span className="text-muted-foreground/30">•</span>
              <span className="text-sm font-medium">More</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
