import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { GraduationCap, Briefcase, ArrowRightLeft, Users, Award } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Build job-ready skills alongside your degree with structured learning paths.',
  },
  {
    icon: Users,
    title: 'Freshers',
    description: 'Stand out in the job market with in-demand skills and an auto-generated resume.',
  },
  {
    icon: Briefcase,
    title: 'Working Professionals',
    description: 'Upskill efficiently with roadmaps designed for your limited time.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Career Switchers',
    description: 'Navigate your transition with clear paths from your current role to your dream career.',
  },
  {
    icon: Award,
    title: 'Govt Exam Aspirants',
    description: 'UPSC, SSC, and more — structured prep roadmaps coming soon.',
    upcoming: true,
  },
];

export const WhoIsThisForSection = () => {
  return (
    <section className="section-container bg-glow">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Who This Is </span>
            <span className="gradient-text">For</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're just starting out or looking to level up, CareerMentor AI 
            meets you where you are.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {audiences.map((audience, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300 group relative">
                {audience.upcoming && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                    Coming Soon
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
