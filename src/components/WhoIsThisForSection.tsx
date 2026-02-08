import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import {
  GraduationCap,
  Briefcase,
  ArrowRightLeft,
  Users,
  Award,
} from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Build job-ready skills alongside your degree with structured learning paths.",
  },
  {
    icon: Users,
    title: "Freshers",
    description:
      "Stand out in the job market with in-demand skills and an auto-generated resume.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description:
      "Upskill efficiently with roadmaps designed for your limited time.",
  },
  {
    icon: ArrowRightLeft,
    title: "Career Switchers",
    description:
      "Navigate your transition with clear paths from your current role to your dream career.",
  },
  {
    icon: Award,
    title: "Govt Exam Aspirants",
    description:
      "UPSC, SSC and more — structured preparation roadmaps coming soon.",
    upcoming: true,
  },
];

export const WhoIsThisForSection = () => {
  return (
    <section className="bg-black py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Who This Is <span className="text-[#EAB308]">For</span>
          </h2>

          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Whether you’re just starting out or planning your next big move,
            CareerMentor AI meets you exactly where you are.
          </p>
        </AnimatedSection>

        {/* CARDS */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {audiences.map((audience, index) => (
            <StaggerItem key={index}>
              <div
                className="
                  relative h-full p-8 rounded-2xl
                  border border-white/10
                  bg-white/[0.02]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-[#EAB308]/40
                  hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]
                  group
                "
              >
                {/* Coming soon */}
                {audience.upcoming && (
                  <span className="absolute top-4 right-4 text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#EAB308]/15 text-[#EAB308] font-semibold">
                    Coming Soon
                  </span>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#EAB308]/10 flex items-center justify-center mb-6 group-hover:bg-[#EAB308]/20 transition-colors">
                  <audience.icon className="w-7 h-7 text-[#EAB308]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {audience.title}
                </h3>

                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                  {audience.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
