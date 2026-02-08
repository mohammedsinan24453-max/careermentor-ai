import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Circle } from 'lucide-react';

const roadmapSkills = [
  { name: 'Python Basics', status: 'complete' },
  { name: 'Data Structures', status: 'complete' },
  { name: 'SQL Fundamentals', status: 'in-progress' },
  { name: 'Machine Learning', status: 'locked' },
  { name: 'Deep Learning', status: 'locked' },
];

export const RoadmapPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimated(true), 300);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="premium-card p-6 bg-card/80">
      <div className="text-sm text-muted-foreground mb-4">Data Science Roadmap</div>
      <div className="space-y-3">
        {roadmapSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            {/* Connector line */}
            {index > 0 && (
              <div className="absolute -mt-6 ml-[11px] w-0.5 h-3 bg-[rgba(255,255,255,0.1)]" />
            )}
            
            {/* Status indicator */}
            <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
              skill.status === 'complete' 
                ? 'bg-primary text-primary-foreground' 
                : skill.status === 'in-progress'
                ? 'border-2 border-primary bg-transparent'
                : 'border border-[rgba(255,255,255,0.1)] bg-transparent'
            }`}>
              {skill.status === 'complete' && <Check size={12} strokeWidth={3} />}
              {skill.status === 'in-progress' && (
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}
            </div>

            {/* Skill name */}
            <span className={`text-sm ${
              skill.status === 'locked' ? 'text-muted-foreground/50' : 'text-foreground'
            }`}>
              {skill.name}
            </span>

            {/* Progress indicator for in-progress */}
            {skill.status === 'in-progress' && (
              <span className="ml-auto text-xs text-primary">60%</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
