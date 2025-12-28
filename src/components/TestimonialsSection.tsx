import { useRef } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I was drowning in YouTube tutorials and random courses. CareerMentor AI gave me one clear path and I finally started making real progress.",
    name: "Priya Sharma",
    role: "Data Science Student",
    avatar: "PS",
  },
  {
    quote: "The roadmap was exactly what I needed to switch from marketing to tech. No more guessing what to learn next.",
    name: "Arjun Mehta",
    role: "Career Switcher",
    avatar: "AM",
  },
  {
    quote: "As a fresher, I had no idea where to start. Now I have a clear plan and my resume builds itself as I learn.",
    name: "Sneha Patel",
    role: "Computer Science Graduate",
    avatar: "SP",
  },
  {
    quote: "The industry-driven approach makes so much sense. I'm learning skills companies actually want.",
    name: "Rahul Kumar",
    role: "Software Developer",
    avatar: "RK",
  },
  {
    quote: "Finally, a platform that doesn't just throw resources at you. It actually guides you through them.",
    name: "Ananya Reddy",
    role: "Product Manager Aspirant",
    avatar: "AR",
  },
  {
    quote: "The progress tracking keeps me motivated. I can see exactly how far I've come.",
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
            Real stories from learners who stopped researching and started achieving.
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
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
