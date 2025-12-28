import { AnimatedSection } from '@/components/AnimatedSection';
import { GraduationCap, Star, Globe, CheckCircle } from 'lucide-react';

const sources = [
  'Harvard University',
  'MIT OpenCourseWare',
  'Cambridge University',
  'IITs',
  'Google',
  'Stanford Online',
];

export const FreeResourcesSection = () => {
  return (
    <section className="section-container bg-glow">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right" delay={0.2} className="order-2 lg:order-1">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold text-foreground">Trusted Sources</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {sources.map((source, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{source}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-primary" />
                    <span>Only top-rated, community-verified resources</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">100% Free Option</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Free, High-Quality</span>
              <br />
              <span className="text-foreground">Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe quality education should be accessible to everyone. That's why 
              every roadmap includes free resources from the world's most trusted 
              institutions and organizations.
            </p>
            <ul className="space-y-3">
              {[
                'University lectures and courses',
                'Official documentation and guides',
                'Community-curated tutorials',
                'Hands-on projects and exercises',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
