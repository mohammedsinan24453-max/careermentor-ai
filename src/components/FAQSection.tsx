import { AnimatedSection } from '@/components/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
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
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-container bg-glow">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
