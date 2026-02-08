import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import {
  Target,
  Route,
  BookOpen,
  CheckCircle,
  Briefcase,
  XCircle,
} from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: 'One Clear Roadmap',
    description:
      'Not a list of options — a single, focused path designed for your goals and timeline.',
  },
  {
    icon: Route,
    title: 'Industry-Aligned Skills',
    description:
      'Skills extracted from real job postings on LinkedIn, Indeed, and company career pages.',
  },
  {
    icon: BookOpen,
    title: 'Curated Resources',
    description:
      'Every topic comes with handpicked, high-quality resources mapped to your roadmap.',
  },
  {
    icon: CheckCircle,
    title: 'Progress Tracking & Resume',
    description:
      'Track your learning journey and automatically generate a skills-based resume as you learn.',
  },
  {
    icon: Briefcase,
    title: 'Job Matching & Opportunities',
    description:
      'After completing your roadmap and resume, discover relevant job opportunities matched to your skills.',
  },
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* ---------- Solution Header ---------- */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="gradient-text">CareerMentor AI</span>
            <span className="text-foreground"> Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CareerMentor AI provides a single, clear roadmap with resources included for every
            subtopic — and guides you all the way from learning to job opportunities.
          </p>
        </AnimatedSection>

        {/* ---------- Solution Cards ---------- */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-24" staggerDelay={0.1}>
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

        {/* ---------- WHY CAREERMENTOR AI ---------- */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Other Platforms */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Most Learning Platforms
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                  Too many resources with no clear direction
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                  Generic roadmaps for everyone
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                  Skills not aligned with real job requirements
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                  Learning ends without job guidance
                </li>
              </ul>
            </div>

            {/* CareerMentor AI */}
            <div className="glass-card p-8 border-primary/30">
              <h3 className="text-xl font-semibold mb-6">
                <span className="gradient-text">CareerMentor AI</span>
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  One clear roadmap based on your time and goals
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  Skills extracted from real job postings
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  Resources mapped to every subtopic
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  Learning → Resume → Job search (end-to-end)
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
