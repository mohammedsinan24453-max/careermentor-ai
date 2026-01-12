import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Logo Mark - Curved stroke with c_ inside */}
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                {/* Outer curved stroke */}
                <path
                  d="M28 8 C34 14, 34 26, 24 32"
                  fill="none"
                  stroke="hsl(45 87% 62%)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* c_ text */}
                <text
                  x="10"
                  y="24"
                  fill="white"
                  fontSize="14"
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                >
                  c_
                </text>
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">CareerMentor AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection('waitlist')}
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-[rgba(255,255,255,0.06)]"
          >
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </button>
              <Button
                variant="hero"
                className="w-full"
                onClick={() => scrollToSection('waitlist')}
              >
                Get Early Access
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
