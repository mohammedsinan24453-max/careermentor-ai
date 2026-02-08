import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToSection } = useScroll();

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
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
          </div>

          {/* ================= DESKTOP LINKS ================= */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick("features")}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Features
            </button>

            <button
              onClick={() => handleNavClick("how-it-works")}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              How It Works
            </button>

            <button
              onClick={() => handleNavClick("about")}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick("faq")}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="sm"
              onClick={() => handleNavClick("waitlist")}
            >
              Join Waitlist
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

              <Button
                variant="hero"
                className="w-full h-12 mt-4"
                onClick={() => handleNavClick("waitlist")}
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
