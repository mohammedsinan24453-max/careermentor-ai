import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from online courses?",
    answer:
      "Unlike courses that teach you one topic, CareerMentor AI gives you a complete roadmap with all the topics you need to learn, in the right order, with curated resources for each. It's a GPS for your career, not just a single destination.",
  },
  {
    question: "Is CareerMentor AI really free?",
    answer:
      "Yes. Our core roadmaps and free resources are free. Premium features may be introduced later.",
  },
  {
    question: "How are roadmaps created?",
    answer:
      "We analyze real job postings and hiring requirements to build structured learning paths.",
  },
  {
    question: "Can students and career switchers use this?",
    answer:
      "Absolutely. CareerMentor AI is built for students, freshers, and professionals.",
  },
  {
    question: "Will this support UPSC / SSC?",
    answer:
      "Yes. Government exam preparation features are planned.",
  },
  {
    question: "How does resume generation work?",
    answer:
      "Completed skills are automatically reflected in your resume as you progress.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-black py-28">
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADER */}
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked{" "}
            <span className="text-[#EAB308]">Questions</span>
          </h2>

          <p className="text-foreground/80 text-lg">
            Everything you need to know before joining CareerMentor AI.
          </p>
        </AnimatedSection>

        {/* FAQ LIST */}
        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                  rounded-xl
                  border border-white/10
                  bg-white/[0.02]
                  px-6
                "
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-foreground/75 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

      </div>
    </section>
  );
};
