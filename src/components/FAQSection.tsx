<<<<<<< HEAD
import { AnimatedSection } from "@/components/AnimatedSection";
=======
import { AnimatedSection } from '@/components/AnimatedSection';
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
<<<<<<< HEAD
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
=======
    question: 'How is this different from online courses?',
    answer: 'Unlike courses that teach one topic, CareerMentor AI gives you a complete roadmap with all the skills you need, in the right order, with curated resources for each. It\'s a GPS for your career, not just a single destination.',
  },
  {
    question: 'Is CareerMentor AI free?',
    answer: 'Our core roadmaps and curated resources are completely free. We only recommend high-quality free resources from trusted sources. Premium features like advanced analytics may be offered later.',
  },
  {
    question: 'How are roadmaps created?',
    answer: 'We analyze real job postings from LinkedIn, Indeed, and company career pages to understand what skills employers actually hire for. Your roadmap is then personalized based on your goals and timeline.',
  },
  {
    question: 'Who is this for?',
    answer: 'CareerMentor AI is designed for students, freshers, and career switchers who want a clear path from learning to getting hired — without the confusion of figuring out what to learn.',
  },
  {
    question: 'How does resume generation work?',
    answer: 'As you complete skills in your roadmap, they\'re automatically added to your resume. You\'ll have a skills-based resume that accurately reflects what you\'ve learned, ready for job applications.',
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
  },
];

export const FAQSection = () => {
  return (
<<<<<<< HEAD
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
=======
    <section id="faq" className="section-container bg-glow">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
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
<<<<<<< HEAD
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-6">
=======
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 text-base">
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
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
