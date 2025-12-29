import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="CareerMentor AI" className="h-8 w-auto" />
            <span className="text-xl font-bold text-foreground">areerMentor</span>
            <span className="text-xl font-bold gradient-text">AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection('waitlist')}
            >
              Join Waitlist
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
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('problem')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Problem
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </button>
              <Button
                variant="hero"
                className="w-full"
                onClick={() => scrollToSection('waitlist')}
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
