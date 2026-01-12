import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Route, FileText, Rocket } from 'lucide-react';

const outcomes = [
  {
    icon: Route,
    title: 'A clear roadmap with zero confusion',
    description: 'Know exactly what to learn, in what order, with no guesswork.',
  },
  {
    icon: FileText,
    title: 'A resume aligned to real hiring needs',
    description: 'Your skills translate directly into what recruiters are looking for.',
  },
  {
    icon: Rocket,
    title: 'Confidence to apply for real roles',
    description: 'Apply knowing you have the verified skills companies want.',
  },
];

export const OutcomesSection = () => {
  return (
    <section id="testimonials" className="section-container">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">What You'll Achieve in </span>
            <span className="gradient-text">90 Days</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {outcomes.map((outcome, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-8 h-full text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <outcome.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {outcome.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
