import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "how-it-works", label: "How It Works" },
    { id: "about", label: "About" }, // ✅ THIS WAS MISSING EARLIER
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-card border border-border/50">
              <img src={logo} alt="CareerMentor AI" className="h-6 w-6" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-foreground">CareerMentor</span>
              <span className="text-xs font-semibold gradient-text -mt-0.5">AI</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("waitlist")}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Toggle */}
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}

              <Button
                variant="hero"
                className="w-full"
                onClick={() => scrollToSection("waitlist")}
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
