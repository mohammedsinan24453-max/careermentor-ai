import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { AlertCircle, Brain, Clock, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'Information Overload',
    description: 'Hundreds of courses, tutorials, and resources — but no clear path forward.',
  },
  {
    icon: Clock,
    title: 'Wasted Time',
    description: 'Hours spent researching what to learn next instead of actually learning.',
  },
  {
    icon: Brain,
    title: 'Analysis Paralysis',
    description: 'Too many choices lead to indecision and abandoned learning goals.',
  },
  {
    icon: TrendingDown,
    title: 'Outdated Advice',
    description: 'Generic roadmaps that don\'t reflect what companies actually hire for.',
  },
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="section-container bg-glow">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">The Learning </span>
            <span className="gradient-text">Trap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You're not lazy. You're not unmotivated. You're just overwhelmed by too many options 
            with no clear direction on what actually matters.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
