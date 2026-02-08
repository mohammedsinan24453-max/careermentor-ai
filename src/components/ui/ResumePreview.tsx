import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { FileText } from 'lucide-react';

export const ResumePreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [animated, setAnimated] = useState(false);

  const scoreSpring = useSpring(0, { stiffness: 50, damping: 20 });
  const scoreDisplay = useTransform(scoreSpring, (val) => Math.round(val));

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setAnimated(true);
        scoreSpring.set(87);
      }, 300);
    }
  }, [isInView, scoreSpring]);

  const skills = ['Python', 'SQL', 'Pandas', 'NumPy'];

  return (
    <div ref={ref} className="premium-card p-6 bg-card/80">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText size={16} className="text-primary" />
          <span className="text-sm text-muted-foreground">Resume Score</span>
        </div>
        <motion.div 
          className="text-2xl font-bold gradient-text"
          initial={{ opacity: 0 }}
          animate={animated ? { opacity: 1 } : {}}
        >
          <motion.span>{scoreDisplay}</motion.span>/100
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-secondary rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-[hsl(43_80%_57%)] rounded-full"
          initial={{ width: 0 }}
          animate={animated ? { width: '87%' } : {}}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        />
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">Verified Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animated ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};
