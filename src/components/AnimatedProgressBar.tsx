import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface AnimatedProgressBarProps {
  label: string;
  percentage: number;
  status?: string;
  statusType?: 'complete' | 'inProgress' | 'upcoming';
  delay?: number;
}

export const AnimatedProgressBar = ({
  label,
  percentage,
  status,
  statusType = 'inProgress',
  delay = 0,
}: AnimatedProgressBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Spring animation for smooth easing
  const progress = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  // Transform spring value to display percentage
  const displayValue = useTransform(progress, (latest) => Math.round(latest));
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const unsubscribe = displayValue.on('change', (latest) => {
      setDisplayNumber(latest);
    });
    return () => unsubscribe();
  }, [displayValue]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        progress.set(percentage);
        setHasAnimated(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, percentage, progress, delay]);

  const getStatusColor = () => {
    switch (statusType) {
      case 'complete':
        return 'text-primary';
      case 'inProgress':
        return 'text-muted-foreground';
      case 'upcoming':
        return 'text-muted-foreground/60';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-foreground font-medium">{label}</span>
        <div className="flex items-center gap-2">
          {status && (
            <span className={`text-sm ${getStatusColor()}`}>{status}</span>
          )}
          <span className="text-sm font-semibold text-primary min-w-[3ch] text-right">
            {displayNumber}%
          </span>
        </div>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
        <motion.div
          className="h-full rounded-full relative"
          style={{
            width: `${hasAnimated ? percentage : 0}%`,
            background: statusType === 'complete' 
              ? 'hsl(var(--primary))' 
              : 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
          }}
          initial={{ width: '0%' }}
          animate={isInView ? { width: `${percentage}%` } : { width: '0%' }}
          transition={{
            duration: 1.5,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier: slow start → smooth acceleration → soft stop
          }}
        >
          {/* Glow effect while animating */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'inherit',
              filter: 'blur(6px)',
              opacity: 0,
            }}
            animate={isInView && !hasAnimated ? {
              opacity: [0, 0.8, 0.6, 0.8, 0],
            } : { opacity: 0 }}
            transition={{
              duration: 1.5,
              delay: delay,
              ease: 'easeOut',
            }}
          />
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: delay + 0.2 }}
          >
            <motion.div
              className="absolute inset-0 -translate-x-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              }}
              animate={isInView ? { translateX: ['0%', '200%'] } : {}}
              transition={{
                duration: 1.2,
                delay: delay + 0.3,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
