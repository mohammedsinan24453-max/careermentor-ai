import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";

export const HeroSection = () => {
  const { scrollToSection } = useScroll();

  return (
    <div className="bg-black overflow-hidden">
      <section className="relative pt-20 md:pt-28 pb-14 md:pb-24 bg-black overflow-hidden">

        {/* ================= SOFT GOLD BACKGROUND ================= */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-end justify-center">
          <div
            className="absolute bottom-[-18%] w-[160vw] h-[520px] md:h-[620px] rounded-[100%] opacity-20"
            style={{
              background: `radial-gradient(50% 50% at 50% 50%, #EAB308 0%, transparent 100%)`,
              filter: "blur(120px)",
            }}
          />
        </div>

        {/* ================= TOP CENTER ANNOUNCEMENT ================= */}
        <AnimatedSection delay={0}>
          <div className="relative z-10 w-full flex justify-center mb-10 md:mb-14 px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-white/60 font-semibold">
                Now accepting early access applications
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ================= LEFT TEXT ================= */}
          <div className="flex flex-col items-start text-left">

            <AnimatedSection delay={0.1}>
              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-7xl
                  font-bold
                  leading-[1.15]
                  mb-5
                  text-white
                "
              >
                <span className="text-[#EAB308]">One Clear Roadmap.</span>
                <br />
                One Job-Ready Resume.
                <br />
                Real Job Matches.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                className="
                  text-base
                  sm:text-lg
                  md:text-xl
                  text-white/40
                  max-w-xl
                  mb-8
                  md:mb-12
                  leading-relaxed
                "
              >
                Personalized learning paths built from real job requirements —
                with resume building and job discovery included.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <button
                onClick={() => scrollToSection("waitlist")}
                className="
                  group
                  flex items-center gap-3
                  px-8 md:px-10
                  h-12 md:h-14
                  rounded-full
                  border border-[#EAB308]
                  text-[#EAB308]
                  font-semibold
                  text-base md:text-lg
                  transition-all duration-300
                  hover:bg-[#EAB308]
                  hover:text-black
                "
              >
                Join the Waitlist
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </AnimatedSection>
          </div>

          {/* ================= RIGHT BRAIN ================= */}
          <div className="relative flex justify-center items-center mt-10 lg:mt-0">

            {/* glow */}
            <div className="absolute w-[260px] sm:w-[320px] md:w-[420px] h-[260px] sm:h-[320px] md:h-[420px] bg-[#EAB308]/10 blur-[120px] rounded-full" />

            {/* animated rings */}
            <svg
              viewBox="0 0 400 400"
              className="
                absolute
                w-[280px]
                sm:w-[340px]
                md:w-[520px]
                animate-orbit-slow
              "
              fill="none"
            >
              <ellipse
                cx="200"
                cy="200"
                rx="170"
                ry="110"
                stroke="#EAB308"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              <ellipse
                cx="200"
                cy="200"
                rx="110"
                ry="170"
                stroke="#EAB308"
                strokeOpacity="0.35"
                strokeWidth="1.1"
              />
            </svg>

            <img
              src="/brain-gold.png"
              alt="AI Brain"
              className="
                relative
                w-[220px]
                sm:w-[280px]
                md:w-[420px]
                lg:w-[620px]
                select-none
                pointer-events-none
                animate-brain-float
              "
            />
          </div>
        </div>
      </section>
    </div>
  );
};
