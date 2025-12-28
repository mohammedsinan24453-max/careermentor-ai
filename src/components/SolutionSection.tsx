import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Target, Route, BookOpen, CheckCircle } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: 'One Clear Roadmap',
    description: 'Not a list of options — a single, focused path designed for your goals and timeline.',
  },
  {
    icon: Route,
    title: 'Industry-Aligned Skills',
    description: 'Skills extracted from real job postings on LinkedIn, Indeed, and company career pages.',
  },
  {
    icon: BookOpen,
    title: 'Curated Resources',
    description: 'Every topic comes with handpicked, high-quality free resources from trusted sources.',
  },
  {
    icon: CheckCircle,
    title: 'Progress Tracking',
    description: 'Track your learning journey and auto-generate a skills-based resume as you learn.',
  },
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="section-container">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="gradient-text">CareerMentor AI</span>
            <span className="text-foreground"> Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CareerMentor AI provides a single, clear roadmap with resources included for every 
            subtopic — so you can stop researching and start learning.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {solutions.map((solution, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
