import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Briefcase, Clock, Route, LineChart, FileText, Search } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Briefcase,
    title: 'Choose Your Career',
    description: 'Select from tech, data science, product management, design, and more career paths.',
  },
  {
    step: '02',
    icon: Clock,
    title: 'Set Your Timeline',
    description: 'Pick 3 months, 6 months, or custom duration based on your availability.',
  },
  {
    step: '03',
    icon: Route,
    title: 'Get Your Roadmap',
    description: 'Receive a personalized learning path with curated resources for each skill.',
  },
  {
    step: '04',
    icon: LineChart,
    title: 'Track Progress',
    description: 'Mark topics as complete and visualize your journey with progress tracking.',
  },
  {
    step: '05',
    icon: FileText,
    title: 'Auto-Generate Resume',
    description: 'Your learning automatically builds a skills-based resume ready for applications.',
  },
  {
    step: '06',
    icon: Search,
    title: 'Discover Jobs',
    description: 'Find relevant job opportunities matched to your completed skills and resume.',
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-container bg-glow">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">How </span>
            <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From confusion to clarity in 5 simple steps. No complex setup, no overwhelming choices.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-6" staggerDelay={0.1}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-bold gradient-text opacity-50">{step.step}</span>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
