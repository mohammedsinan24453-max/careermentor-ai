import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => {
  const ref = useRef(null);

  // ✅ FIXED: mobile-friendly trigger
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px", // 👈 THIS IS THE MAGIC
  });

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { y: 30, opacity: 0 };
      case "down":
        return { y: -30, opacity: 0 };
      case "left":
        return { x: -30, opacity: 0 };
      case "right":
        return { x: 30, opacity: 0 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: 30, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : getInitial()}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ---------------- STAGGER ---------------- */

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.12,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-15% 0px",
  });

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.08,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};
