import { AnimatedSection } from '@/components/AnimatedSection';
import { LineChart, FileText, CheckCircle, TrendingUp } from 'lucide-react';

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
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Python Fundamentals</span>
                  <span className="text-sm text-primary">Complete</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-full bg-primary rounded-full" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Data Analysis</span>
                  <span className="text-sm text-muted-foreground">In Progress</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Machine Learning</span>
                  <span className="text-sm text-muted-foreground">Upcoming</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary rounded-full" />
                </div>
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
                  {['Python', 'SQL', 'Pandas', 'Data Viz', 'Statistics'].map((skill, i) => (
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
