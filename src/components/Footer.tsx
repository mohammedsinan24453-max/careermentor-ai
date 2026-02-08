import { AnimatedSection } from "@/components/AnimatedSection";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-black py-14 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10">

          {/* LOGO */}
          <div className="flex items-center gap-3 justify-center md:justify-start">

            {/* LOGO IMAGE */}
            <img
              src="/logo.png"
              alt="CareerMentor AI"
              className="h-8 md:h-9 w-auto object-contain"
            />

            {/* BRAND TEXT */}
            <div className="flex flex-col leading-none text-center md:text-left">
              <span className="text-base font-semibold text-white tracking-tight">
                CareerMentor
              </span>
              <span className="text-[11px] font-semibold text-[#EAB308] tracking-wide mt-0.5">
                AI
              </span>
            </div>

          </div>

          {/* LINKS */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-white/75">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-white/60 text-center md:text-right">
            © {currentYear} CareerMentor AI. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};
