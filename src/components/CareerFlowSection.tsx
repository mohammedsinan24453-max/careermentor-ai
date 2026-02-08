import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { BookOpen, FileText, Briefcase, ArrowRight } from 'lucide-react';

const flow = [
  {
    icon: BookOpen,
    title: 'Learn with a Clear Roadmap',
    description:
      'Follow a structured roadmap built from real job requirements. No guesswork, no distractions.',
  },
  {
    icon: FileText,
    title: 'Auto-Build Your Resume',
    description:
      'As you complete skills, your resume updates automatically with verified competencies.',
  },
  {
    icon: Briefcase,
    title: 'Discover Relevant Jobs',
    description:
      'Once your roadmap is completed, we surface jobs that match your exact skills and readiness.',
  },
];

export const CareerFlowSection = () => {
  return (
    <section className="section-container bg-black">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">From Learning</span>
            <span className="text-foreground"> to </span>
            <span className="gradient-text">Getting Hired</span>
          </h2>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            CareerMentor AI doesn’t stop at teaching skills — we guide you through
            learning, resume creation, and job discovery in one continuous flow.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {flow.map((item, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-8 h-full relative hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-foreground/75 leading-relaxed">
                  {item.description}
                </p>

                {index < flow.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-muted-foreground/40" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
