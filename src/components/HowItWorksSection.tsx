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

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
