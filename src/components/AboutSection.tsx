import { AnimatedSection } from '@/components/AnimatedSection';
import { Target, Sparkles, Rocket } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Why </span>
            <span className="gradient-text">CareerMentor AI?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe career guidance shouldn't be confusing, overwhelming, or gatekept. 
            CareerMentor AI exists to give you clarity — so you can focus on learning, not searching.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 text-center h-full hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Clarity First</h3>
              <p className="text-muted-foreground leading-relaxed">
                One clear roadmap. No information overload. Just the skills you need, 
                in the order you need them.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 text-center h-full hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Industry-Aligned</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on real hiring data from LinkedIn and job postings — so you learn 
                what employers actually want.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="glass-card p-8 text-center h-full hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Outcome-Focused</h3>
              <p className="text-muted-foreground leading-relaxed">
                Not just learning — we help you build a resume and discover jobs 
                after you complete your roadmap.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
