<<<<<<< HEAD
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Briefcase,
  Target,
  FileText,
  Rocket,
  ChevronRight
} from "lucide-react";

const mainSteps = [
  { id: "STEP 1", title: "Target Selection", icon: Briefcase },
  { id: "STEP 2", title: "Curated Roadmap", icon: Target },
  { id: "STEP 3", title: "Skill Verification", icon: FileText },
  { id: "STEP 4", title: "Career Launch", icon: Rocket },
=======
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
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="section-container bg-black py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How it <span className="text-[#EAB308]">works</span>
          </h2>
<<<<<<< HEAD

          {/* 🔥 only brightness increased */}
          <p className="text-foreground/85 text-lg max-w-xl mx-auto leading-relaxed">
            Our AI-driven system transforms your career in four intelligent steps.
          </p>
        </AnimatedSection>

        {/* ================= TOP STEPS ================= */}
        <div className="relative mb-32 px-10 hidden md:block">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 w-[75%] h-[2px] bg-[#EAB308] -translate-y-1/2 shadow-[0_0_20px_rgba(234,179,8,0.6)] animate-pulse" />

          <div className="relative flex justify-between items-center">
            {mainSteps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 bg-black z-10 ${
                    idx < 3
                      ? "border-[#EAB308] shadow-[0_0_15px_rgba(234,179,8,1)]"
                      : "border-white/20"
                  }`}
                />
                <div className="absolute mt-10 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#EAB308] font-bold bg-[#EAB308]/10 px-2 py-0.5 rounded">
                    {step.id}
                  </span>
                  <h4 className="text-sm font-bold text-foreground mt-1 whitespace-nowrap">
                    {step.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= AI ENGINE ================= */}
        <div className="glass-card p-12 relative overflow-hidden bg-black/90 rounded-3xl">

          <div className="grid lg:grid-cols-3 gap-16 items-center relative z-10">

            {/* LEFT INPUTS */}
            <div className="space-y-4">
              {["User Profile", "Market Trends", "Skill Gap Audit"].map((text) => (
                <div
                  key={text}
                  className="glass-card py-4 px-6 border-white/5 flex items-center justify-between bg-white/[0.02] rounded-xl"
                >
                  <span className="text-sm font-medium text-foreground/75 tracking-wide">
                    {text}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#EAB308] animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                </div>
              ))}
            </div>

            {/* CENTER ENGINE */}
            <div className="flex flex-col items-center justify-center relative">

              <div className="glass-card p-10 rounded-3xl bg-black border-[#EAB308]/30 shadow-[0_0_60px_rgba(234,179,8,0.25)]">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#EAB308]/10 flex items-center justify-center mb-4 border border-[#EAB308]/20">
                    <Target className="w-10 h-10 text-[#EAB308] animate-pulse" />
                  </div>

                  <h4 className="font-black text-xl text-foreground tracking-tight">
                    AI ENGINE
                  </h4>

                  <div className="mt-2 flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#EAB308] animate-bounce" />
                    <span className="w-1 h-1 rounded-full bg-[#EAB308] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-1 rounded-full bg-[#EAB308] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>

              {/* ✅ PAZHAYA DOTTED LINES — EXACT SAME */}
              <svg className="absolute w-[140%] h-[140%] pointer-events-none overflow-visible">
                <path
                  d="M -100 100 Q 50 100 100 150"
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  className="animate-neural-flow"
                />
                <path
                  d="M -100 200 Q 50 200 100 150"
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  className="animate-neural-flow"
                />
                <path
                  d="M 300 150 Q 350 100 500 100"
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  className="animate-neural-flow"
                />
                <path
                  d="M 300 150 Q 350 200 500 200"
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  className="animate-neural-flow"
                />

                <defs>
                  <linearGradient
                    id="line-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#EAB308" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* RIGHT OUTPUT */}
            <div className="space-y-6">
              <div className="glass-card p-6 border-[#EAB308]/30 bg-[#EAB308]/5 relative rounded-xl overflow-hidden">
                <FileText className="w-6 h-6 text-[#EAB308] mb-3" />
                <p className="text-sm font-bold text-foreground">
                  ATS Resume Sync
                </p>

                <div className="mt-3 h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 ats-loading" />
                </div>
              </div>

              <div className="glass-card p-6 border-white/5 bg-white/[0.02] rounded-xl">
                <Rocket className="w-6 h-6 text-foreground/60 mb-3" />
                <p className="text-sm font-bold text-foreground/75">
                  Custom Career Roadmap
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <button className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-black py-5 px-12 rounded-2xl transition-all shadow-[0_0_30px_rgba(234,179,8,0.4)] flex items-center gap-4 mx-auto uppercase tracking-widest text-sm">
              Check Your Eligibility
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

=======
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
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default HowItWorksSection;
=======
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
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
