import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How is this different from online courses?',
    answer: 'Unlike courses that teach you one topic, CareerMentor AI gives you a complete roadmap with all the topics you need to learn, in the right order, with curated resources for each. It\'s a GPS for your career, not just a single destination.',
  },
  {
    question: 'Is CareerMentor AI really free?',
    answer: 'Yes! Our core roadmaps and free resources are completely free. We only use free, high-quality resources from trusted institutions like Harvard, MIT, Google, and IITs. Premium features like advanced tracking and resume templates may be offered later.',
  },
  {
    question: 'How are roadmaps created?',
    answer: 'We analyze thousands of real job postings from LinkedIn, Indeed, and company career pages to understand what skills employers actually hire for. Our AI then creates personalized learning paths based on your goals and available time.',
  },
  {
    question: 'Can students and career switchers use this?',
    answer: 'Absolutely! CareerMentor AI is designed specifically for students, freshers, and career switchers. The roadmaps are built to take you from zero knowledge to job-ready skills, with resume building included.',
  },
  {
    question: 'Will this support UPSC / SSC (upcoming)?',
    answer: 'Yes, government exam preparation roadmaps for UPSC, SSC, and other competitive exams are on our roadmap. These will include structured study plans, free resources, and progress tracking tailored to exam patterns.',
  },
  {
    question: 'How does resume generation work?',
    answer: 'As you complete topics in your roadmap, our system automatically adds those skills to your resume. You\'ll have a skills-based resume that accurately reflects what you\'ve learned, ready to use when applying for jobs.',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-container">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about CareerMentor AI.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
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
