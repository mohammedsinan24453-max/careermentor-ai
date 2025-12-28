import { AnimatedSection } from '@/components/AnimatedSection';
import { Linkedin, Building2, TrendingUp } from 'lucide-react';

export const IndustryDrivenSection = () => {
  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Industry-Driven</span>
              <br />
              <span className="text-foreground">Roadmaps</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our roadmaps aren't based on generic advice or outdated tutorials. 
              We analyze real job postings from top companies to understand what 
              skills they actually hire for — and build your path around that.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground">LinkedIn job analysis</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">Indeed & company career pages</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground">Real-time skill demand tracking</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Most in-demand skills (2024)</span>
                  <span className="text-xs text-primary">Live data</span>
                </div>
                <div className="space-y-4">
                  {[
                    { skill: 'Python', percent: 92 },
                    { skill: 'SQL', percent: 88 },
                    { skill: 'Machine Learning', percent: 75 },
                    { skill: 'Data Visualization', percent: 70 },
                    { skill: 'Cloud (AWS/GCP)', percent: 65 },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground">{item.skill}</span>
                        <span className="text-muted-foreground">{item.percent}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
