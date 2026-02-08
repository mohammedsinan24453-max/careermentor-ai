<<<<<<< HEAD
import { useEffect, useState, useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle, Briefcase } from "lucide-react";

export const FeaturesSection = () => {
  const skillProgress = 72;
  const resumeScore = 85;
  const jobMatchScore = 68;

  const calculatedReadiness = Math.round(
    skillProgress * 0.4 +
      resumeScore * 0.35 +
      jobMatchScore * 0.25
  );

  const [careerReadiness, setCareerReadiness] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHasStarted(true),
      { threshold: 0.3 }
    );
    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start: number | null = null;
    const duration = 2000;

    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      setCareerReadiness(Math.floor(p * calculatedReadiness));
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [hasStarted, calculatedReadiness]);

  return (
    <section id="features" className="section-container bg-black py-20">
      <div className="max-w-6xl mx-auto space-y-28 px-4 md:px-0">

        {/* ================= FEATURE 1 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="md:order-1">
            <div>
              <h3 className="mb-5 leading-tight">
                <span className="block text-xs uppercase tracking-widest text-[#EAB308] mb-2 font-bold">
                  Features
                </span>
                <span className="block text-3xl md:text-4xl font-bold text-[#EAB308]">
                  Industry-Driven
                </span>
                <span className="block text-3xl md:text-4xl font-bold text-foreground">
                  Roadmaps
                </span>
              </h3>

              <p className="text-base md:text-xl text-foreground/80 mb-6 leading-relaxed">
                Our roadmaps are built by analyzing real job postings to
                understand what companies actually hire for.
              </p>

              <ul className="space-y-3 text-sm md:text-lg text-foreground/75">
                <li>• LinkedIn & company job analysis</li>
                <li>• Real-time skill demand tracking</li>
                <li>• Role-specific learning paths</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="md:order-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10">
              <p className="text-xs text-foreground/60 mb-4 uppercase tracking-widest font-bold">
                Most in-demand skills
              </p>

              <div className="space-y-3 text-foreground/85">
                {[
                  ["Python", "92%"],
                  ["SQL", "88%"],
                  ["Machine Learning", "75%"],
                  ["Data Visualization", "70%"],
                  ["Cloud (AWS/GCP)", "65%"],
                ].map(([skill, percent]) => (
                  <div
                    key={skill}
                    className="flex justify-between border-b border-white/5 pb-2"
                  >
                    <span>{skill}</span>
                    <span className="text-[#EAB308] font-black">
                      {percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ================= FEATURE 2 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="md:order-2">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                <span className="text-[#EAB308]">Free, High-Quality</span>
                <br />
                <span className="text-foreground">Resources</span>
              </h3>

              <p className="text-base md:text-xl text-foreground/80">
                Carefully selected, free learning materials from the
                world’s most trusted institutions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="md:order-1">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10">
              <p className="text-xs text-foreground/60 mb-4 uppercase tracking-widest font-bold">
                Trusted sources
              </p>

              <div className="grid grid-cols-2 gap-4 text-foreground/85">
                {[
                  "Harvard University",
                  "MIT OpenCourseWare",
                  "Stanford Online",
                  "Google",
                  "IITs",
                  "Cambridge University",
                ].map((source) => (
                  <div key={source} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#EAB308]" />
                    <span>{source}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ================= FEATURE 3 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="md:order-1">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                <span className="text-[#EAB308]">Personal AI</span>
                <br />
                <span className="text-foreground">Career Guidance</span>
              </h3>

              <p className="text-base md:text-xl text-foreground/80 mb-6">
                CareerMentor AI continuously evaluates your progress.
              </p>

              <ul className="space-y-3 text-sm md:text-lg text-foreground/75">
                <li>• Automated career readiness tracking</li>
                <li>• Clear weekly focus areas</li>
                <li>• Adaptive learning paths</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="md:order-2">
            <div
              ref={triggerRef}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 flex flex-col items-center"
            >
              <div className="w-40 h-40 rounded-full border-2 border-[#EAB308] flex items-center justify-center relative">
                {hasStarted && (
                  <div className="absolute inset-0 rounded-full border-2 border-[#EAB308] border-t-transparent animate-spin" />
                )}
                <span className="text-4xl md:text-5xl font-black text-foreground">
                  {careerReadiness}%
                </span>
              </div>

              <p className="text-xs text-foreground/60 mt-6 uppercase tracking-widest font-bold">
                Career Readiness Score
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* ================= FEATURE 4 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="md:order-2">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                <span className="text-[#EAB308]">ATS-Optimized</span>
                <br />
                <span className="text-foreground">Resume Builder</span>
              </h3>

              <p className="text-base md:text-xl text-foreground/80">
                Our AI automatically syncs your verified skills
                with job descriptions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="md:order-1">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10">
              <p className="text-xs text-[#EAB308] mb-4 uppercase tracking-widest font-black">
                Resume Optimizer
              </p>

              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-[#EAB308] animate-pulse w-[88%]" />
              </div>

              <p className="text-[10px] text-foreground/60 font-mono">
                MATCHING KEYWORDS: 19/20
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* ================= FEATURE 5 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center pb-12">
          <AnimatedSection className="md:order-1">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                <span className="text-[#EAB308]">Smart Job</span>
                <br />
                <span className="text-foreground">Discovery</span>
              </h3>

              <p className="text-base md:text-xl text-foreground/80 mb-6">
                Stop searching, start matching.
              </p>

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#EAB308]/10 border border-[#EAB308]/20">
                <Briefcase className="w-5 h-5 text-[#EAB308]" />
                <span className="text-[#EAB308] font-black text-xs uppercase tracking-widest">
                  Matches live now
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="md:order-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="space-y-4">
                {[
                  { company: "TechFlow AI", role: "Frontend Developer", match: "98%" },
                  { company: "Nexus Systems", role: "Software Engineer", match: "92%" },
                  { company: "CloudScale", role: "Fullstack Intern", match: "89%" },
                ].map((job, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-2xl"
                  >
                    <div>
                      <p className="text-foreground font-black text-sm">
                        {job.role}
                      </p>
                      <p className="text-foreground/70 text-xs">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-[#EAB308] font-black">
                      {job.match}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

=======
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { RoadmapPreview } from '@/components/ui/RoadmapPreview';
import { ResumePreview } from '@/components/ui/ResumePreview';
import { SkillTrackingPreview } from '@/components/ui/SkillTrackingPreview';
import { JobMatchingPreview } from '@/components/ui/JobMatchingPreview';

export const FeaturesSection = () => {
  return (
    <section id="features" className="section-container">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Everything You Need to Get </span>
            <span className="gradient-text">Job-Ready</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All the tools you need — connected in one clear system.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-8" staggerDelay={0.15}>
          {/* Feature 1: Industry-Driven Roadmaps */}
          <StaggerItem>
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Industry-Driven Roadmaps
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Learn only what companies actually hire for.
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    Your roadmap is built by analyzing real job postings — not random course lists.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <RoadmapPreview />
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 2: Resume Builder */}
          <StaggerItem>
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-first">
                  <ResumePreview />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Resume Builder
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Your resume builds itself as you complete skills.
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    Everything you learn is reflected instantly in a job-ready resume.
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 3: Skill Tracking */}
          <StaggerItem>
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Skill Tracking
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Your progress updates automatically as you learn.
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    No manual tracking — your dashboard always reflects real progress.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <SkillTrackingPreview />
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 4: Job Matching */}
          <StaggerItem>
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-first">
                  <JobMatchingPreview />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Job Matching
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Apply only when you're ready.
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    Unlock job opportunities matched to your verified skills.
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
      </div>
    </section>
  );
};
