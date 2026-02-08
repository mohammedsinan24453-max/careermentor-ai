import { AnimatedSection } from "@/components/AnimatedSection";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-black py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Why <span className="text-[#EAB308]">CareerMentor AI</span> Exists
          </h2>

          <p className="text-lg text-foreground/85 max-w-3xl mx-auto leading-relaxed">
            CareerMentor AI was built to solve one painful problem —{" "}
            <span className="text-foreground font-medium">
              learning confusion.
            </span>{" "}
            Today, students and professionals waste months jumping between
            resources without knowing what actually leads to jobs.
          </p>
        </AnimatedSection>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          {[
            {
              title: "Clarity Over Chaos",
              text: (
                <>
                  No endless playlists or random courses. You get{" "}
                  <span className="text-foreground font-medium">
                    one clear, practical roadmap
                  </span>{" "}
                  tailored to your career goal and available time.
                </>
              ),
            },
            {
              title: "Outcomes, Not Just Learning",
              text: (
                <>
                  Learning alone is not the goal. CareerMentor AI helps you{" "}
                  <span className="text-foreground font-medium">
                    track progress, build your resume,
                  </span>{" "}
                  and move toward real job opportunities.
                </>
              ),
            },
            {
              title: "Built From Hiring Data",
              text: (
                <>
                  Roadmaps are powered by{" "}
                  <span className="text-foreground font-medium">
                    real job postings and skill requirements
                  </span>{" "}
                  from companies — not outdated advice or guesswork.
                </>
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              className="
                p-8 rounded-2xl
                border border-border/50
                bg-card/40 backdrop-blur-xl
                transition-all duration-300
                hover:border-[#EAB308]/40
                hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]
              "
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {card.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* CLOSING LINE */}
        <AnimatedSection delay={0.2} className="text-center mt-20">
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            CareerMentor AI is designed to take you from{" "}
            <span className="text-foreground font-medium">
              “What should I learn?”
            </span>{" "}
            to{" "}
            <span className="text-foreground font-medium">
              “I’m ready to apply.”
            </span>
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
};
