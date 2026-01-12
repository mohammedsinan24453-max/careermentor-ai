import { AnimatedSection } from '@/components/AnimatedSection';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const careers = ['Data Science', 'Web Dev', 'Product', 'Design', 'ML/AI'];
const timelines = ['3 months', '6 months', '12 months'];

const roadmapSteps = [
  { name: 'Python Fundamentals', status: 'complete' },
  { name: 'Data Analysis', status: 'complete' },
  { name: 'SQL & Databases', status: 'current' },
  { name: 'Machine Learning', status: 'upcoming' },
  { name: 'Projects & Portfolio', status: 'upcoming' },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-container bg-glow">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">How </span>
            <span className="gradient-text">It Works</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frame 1: Choose Career & Timeline */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Choose Your Career & Timeline
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Tell us where you want to go and how fast you want to get there.
              </p>
              <p className="text-muted-foreground/70 text-xs mb-6">
                Choose your target role and timeline so your roadmap fits your life.
              </p>

              {/* Career Selection */}
              <div className="mb-6">
                <div className="text-xs text-muted-foreground mb-2">Select Career</div>
                <div className="flex flex-wrap gap-2">
                  {careers.map((career, index) => (
                    <button
                      key={career}
                      className={`px-3 py-1.5 text-xs rounded-full transition-all ${
                        index === 0
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                      }`}
                    >
                      {career}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Selection */}
              <div>
                <div className="text-xs text-muted-foreground mb-2">Set Timeline</div>
                <div className="flex gap-2">
                  {timelines.map((timeline, index) => (
                    <button
                      key={timeline}
                      className={`flex-1 px-3 py-2 text-xs rounded-lg border transition-all ${
                        index === 1
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-[rgba(255,255,255,0.06)] text-muted-foreground hover:border-primary/30'
                      }`}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Frame 2: Get Industry-Driven Roadmap */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Get an Industry-Driven Roadmap
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                We generate a clear, job-focused roadmap using real hiring data.
              </p>
              <p className="text-muted-foreground/70 text-xs mb-6">
                Every skill is relevant, ordered, and practical.
              </p>

              {/* Roadmap Preview */}
              <RoadmapFlowPreview />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const RoadmapFlowPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimated(true), 300);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="space-y-2">
      {roadmapSteps.map((step, index) => (
        <motion.div
          key={step.name}
          initial={{ opacity: 0, x: -20 }}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          {/* Status indicator */}
          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
            step.status === 'complete'
              ? 'bg-primary'
              : step.status === 'current'
              ? 'border-2 border-primary'
              : 'border border-[rgba(255,255,255,0.15)]'
          }`}>
            {step.status === 'complete' && (
              <Check size={10} className="text-primary-foreground" strokeWidth={3} />
            )}
            {step.status === 'current' && (
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            )}
          </div>

          {/* Skill name */}
          <span className={`text-sm ${
            step.status === 'upcoming' ? 'text-muted-foreground/50' : 'text-foreground'
          }`}>
            {step.name}
          </span>

          {/* Current indicator */}
          {step.status === 'current' && (
            <span className="ml-auto text-xs text-primary">Current</span>
          )}
        </motion.div>
      ))}
    </div>
  );
};
