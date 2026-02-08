import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lock, Unlock, Check } from 'lucide-react';

const jobs = [
  { title: 'Data Analyst', company: 'TechCorp', status: 'matched', match: 95 },
  { title: 'ML Engineer', company: 'AI Labs', status: 'locked', match: 65 },
  { title: 'Data Scientist', company: 'StartupX', status: 'locked', match: 45 },
];

export const JobMatchingPreview = () => {
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
      <div className="text-sm text-muted-foreground mb-4">Job Matches</div>
      <div className="space-y-3">
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 10 }}
            animate={animated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className={`flex items-center justify-between p-3 rounded-lg border ${
              job.status === 'matched'
                ? 'bg-primary/5 border-primary/20'
                : 'bg-secondary/30 border-[rgba(255,255,255,0.04)]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                job.status === 'matched' ? 'bg-primary/20' : 'bg-secondary'
              }`}>
                {job.status === 'matched' ? (
                  <Unlock size={14} className="text-primary" />
                ) : (
                  <Lock size={14} className="text-muted-foreground/50" />
                )}
              </div>
              <div>
                <div className={`text-sm font-medium ${
                  job.status === 'locked' ? 'text-muted-foreground/60' : 'text-foreground'
                }`}>
                  {job.title}
                </div>
                <div className="text-xs text-muted-foreground/60">{job.company}</div>
              </div>
            </div>
            
            {job.status === 'matched' ? (
              <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 rounded-full">
                <Check size={12} className="text-primary" />
                <span className="text-xs text-primary font-medium">Matched</span>
              </div>
            ) : (
              <div className="text-xs text-muted-foreground/50">
                {job.match}% skills
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
