import { AnimatedSection } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "I was drowning in YouTube tutorials and random courses. CareerMentor AI gave me one clear roadmap, built my resume as I learned, and showed me where to apply next.",
    name: "Priya Sharma",
    role: "Data Science Student",
    avatar: "PS",
  },
  {
    quote:
      "The roadmap was exactly what I needed to switch from marketing to tech. After finishing it, I had a resume ready and relevant job roles to target.",
    name: "Arjun Mehta",
    role: "Career Switcher",
    avatar: "AM",
  },
  {
    quote:
      "As a fresher, I had no idea where to start. Now I have a clear learning plan, an auto-built resume, and confidence about which jobs I should apply for.",
    name: "Sneha Patel",
    role: "Computer Science Graduate",
    avatar: "SP",
  },
  {
    quote:
      "The industry-driven approach really works. I’m learning skills companies actually want, and CareerMentor AI shows jobs that match what I’ve learned.",
    name: "Rahul Kumar",
    role: "Aspiring Software Developer",
    avatar: "RK",
  },
  {
    quote:
      "Most platforms stop at learning. CareerMentor AI helped me go further — from roadmap to resume and finally to real job opportunities.",
    name: "Ananya Reddy",
    role: "Product Manager Aspirant",
    avatar: "AR",
  },
  {
    quote:
      "The progress tracking kept me motivated, and knowing that jobs would unlock after completion made the whole journey feel purposeful.",
    name: "Vikram Singh",
    role: "Working Professional",
    avatar: "VS",
  },
];

export const TestimonialsSection = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section-container bg-glow overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Join thousands already </span>
            <span className="gradient-text">making progress</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from learners who followed a clear path — from learning to jobs.
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Testimonials */}
        <motion.div
          className="flex gap-6 py-4"
          animate={{ x: [0, -50 * testimonials.length * 6] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 60,
              ease: 'linear',
            },
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 min-w-[350px] max-w-[350px] flex-shrink-0 hover:border-primary/30 transition-all duration-300"
            >
              <blockquote className="text-foreground mb-6 leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
