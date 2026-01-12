import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const skills = [
  { name: 'Python', percent: 100, status: 'Complete' },
  { name: 'SQL', percent: 75, status: 'In Progress' },
  { name: 'Machine Learning', percent: 30, status: 'In Progress' },
];

export const SkillTrackingPreview = () => {
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
      <div className="text-sm text-muted-foreground mb-4">Skill Progress</div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillProgressBar
            key={skill.name}
            skill={skill}
            delay={index * 0.15}
            animate={animated}
          />
        ))}
      </div>
    </div>
  );
};

const SkillProgressBar = ({ 
  skill, 
  delay, 
  animate 
}: { 
  skill: typeof skills[0]; 
  delay: number; 
  animate: boolean;
}) => {
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        let start = 0;
        const duration = 1200;
        const startTime = Date.now();
        
        const animateValue = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayPercent(Math.round(eased * skill.percent));
          
          if (progress < 1) {
            requestAnimationFrame(animateValue);
          }
        };
        
        animateValue();
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [animate, skill.percent, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm text-foreground">{skill.name}</span>
          {skill.status === 'Complete' && (
            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
              <Check size={10} className="text-primary-foreground" strokeWidth={3} />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs ${
            skill.status === 'Complete' ? 'text-primary' : 'text-muted-foreground'
          }`}>
            {skill.status}
          </span>
          <span className="text-sm text-muted-foreground w-8 text-right">
            {displayPercent}%
          </span>
        </div>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(43_80%_57%)]"
          initial={{ width: 0 }}
          animate={animate ? { width: `${skill.percent}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 1.2, ease: 'easeOut' }}
          style={{
            boxShadow: skill.percent === 100 ? '0 0 12px hsl(45 87% 62% / 0.5)' : 'none'
          }}
        />
      </div>
    </motion.div>
  );
};
