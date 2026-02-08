<<<<<<< HEAD
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToSection } = useScroll();
=======
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
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* ================= LOGO ================= */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick("top")}
          >
            {/* TRANSPARENT LOGO — NO WHITE BG */}
            <div className="h-10 w-10 md:h-14 md:w-14 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="CareerMentor AI"
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-bold text-white tracking-tight">
                CareerMentor
              </span>
              <span className="text-[11px] md:text-[12px] font-bold text-[#EAB308] tracking-[0.25em] uppercase mt-0.5">
                AI
              </span>
            </div>
=======
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
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
          </div>

          {/* ================= DESKTOP LINKS ================= */}
          <div className="hidden md:flex items-center gap-8">
            <button
<<<<<<< HEAD
              onClick={() => handleNavClick("features")}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Features
            </button>

            <button
              onClick={() => handleNavClick("how-it-works")}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
=======
              onClick={() => scrollToSection('features')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
            >
              How It Works
            </button>

            <button
<<<<<<< HEAD
              onClick={() => handleNavClick("about")}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick("faq")}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
=======
              onClick={() => scrollToSection('testimonials')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
            >
              Testimonials
            </button>
          </div>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="sm"
              onClick={() => handleNavClick("waitlist")}
            >
              Get Early Access
            </Button>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-6 space-y-6">
              {["features", "how-it-works", "about", "faq"].map((id) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="block w-full text-left text-base font-medium text-muted-foreground hover:text-white capitalize"
                >
                  {id.replace("-", " ")}
                </button>
              ))}

=======
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
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
              <Button
                variant="hero"
                className="w-full h-12 mt-4"
                onClick={() => handleNavClick("waitlist")}
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
