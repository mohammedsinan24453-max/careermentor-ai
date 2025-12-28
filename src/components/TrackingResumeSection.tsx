import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedProgressBar } from '@/components/AnimatedProgressBar';
import { LineChart, FileText, CheckCircle, TrendingUp } from 'lucide-react';

const skillsProgress = [
  { label: 'Python Fundamentals', percentage: 100, status: 'Complete', statusType: 'complete' as const },
  { label: 'Data Analysis', percentage: 67, status: 'In Progress', statusType: 'inProgress' as const },
  { label: 'Machine Learning', percentage: 35, status: 'In Progress', statusType: 'inProgress' as const },
  { label: 'SQL & Databases', percentage: 85, status: 'Almost Done', statusType: 'inProgress' as const },
  { label: 'Data Visualization', percentage: 52, status: 'In Progress', statusType: 'inProgress' as const },
  { label: 'Cloud Computing', percentage: 15, status: 'Getting Started', statusType: 'upcoming' as const },
];

export const TrackingResumeSection = () => {
  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Learning Progress</span>
            <span className="text-foreground"> & </span>
            <span className="gradient-text">Resume Builder</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfect for students, freshers, and career switchers — track your progress 
            and automatically build a skills-based resume as you learn.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection direction="left">
            <div className="glass-card p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Progress Tracking
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Visualize your learning journey with intuitive progress tracking. 
                See exactly where you are and what's coming next.
              </p>
              <div className="space-y-5">
                {skillsProgress.map((skill, index) => (
                  <AnimatedProgressBar
                    key={skill.label}
                    label={skill.label}
                    percentage={skill.percentage}
                    status={skill.status}
                    statusType={skill.statusType}
                    delay={index * 0.15}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="glass-card p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Auto Resume Generation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As you complete topics, your resume updates automatically. 
                Ready to apply whenever you are.
              </p>
              <div className="bg-secondary/50 rounded-xl p-6 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-foreground">Skills Section</span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Pandas', 'Data Viz', 'Statistics', 'ML Basics'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Skills verified by learning completion</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
