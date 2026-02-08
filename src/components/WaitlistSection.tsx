import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const WaitlistSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbynw1JPFqBoDdH7d75B07WObQuFmD9Aq7oUBsjFtvTHQztSILPKO5esZwRUQCcunnEmAA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !status) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email, status }),
      });

      setIsSubmitted(true);

      toast({
        title: "You're on the waitlist 🎉",
        description: "We’ll notify you as soon as early access opens.",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<<<<<<< HEAD
    <section id="waitlist" className="bg-black py-32">
      <div className="max-w-xl mx-auto px-6">

        {/* HEADER */}
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Secure Your{" "}
            <span className="text-[#EAB308]">Early Access</span>
          </h2>

          <p className="text-lg text-foreground/80 max-w-xl mx-auto">
            Join the waitlist and be among the first to experience
            CareerMentor AI.
          </p>
        </AnimatedSection>

        {/* FORM CARD */}
        <AnimatedSection delay={0.2}>
          <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">

            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#EAB308]/10 flex items-center justify-center border border-[#EAB308]/30">
                  <CheckCircle className="w-8 h-8 text-[#EAB308]" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  You're on the list!
                </h3>

                <p className="text-foreground/75">
                  We'll notify you when early access opens.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground/60 ml-1">
                    Full Name
                  </label>
                  <Input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="h-12 bg-black/40 border-white/10 text-foreground focus:border-[#EAB308]/60"
                  />
                </div>

                {/* STATUS */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground/60 ml-1">
                    Current Status
                  </label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="h-12 bg-black/40 border-white/10 text-foreground">
                      <SelectValue placeholder="Select your status" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A0A0A] border-white/10 text-foreground">
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="fresher">Fresher</SelectItem>
                      <SelectItem value="working">Working Professional</SelectItem>
                      <SelectItem value="switcher">Career Switcher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground/60 ml-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-12 bg-black/40 border-white/10 text-foreground focus:border-[#EAB308]/60"
                  />
                </div>

                {/* CTA */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full h-14
                    bg-[#EAB308]
                    hover:bg-[#EAB308]/90
                    text-black
                    font-black text-lg
                    rounded-full
                    transition-all
                    hover:scale-[1.02]
                  "
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-[10px] uppercase tracking-widest text-foreground/50 font-bold">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
=======
    <section id="waitlist" className="section-container">
      <div className="max-w-xl mx-auto text-center">
        <AnimatedSection className="mb-10">
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Join early and be the first to experience a clear path from learning to getting hired.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/8 rounded-full blur-3xl" />

            <div className="relative">
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We'll send you an email when CareerMentor AI is ready.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="h-12 bg-secondary/50 border-[rgba(255,255,255,0.06)] focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-foreground">
                      Current Status
                    </label>
                    <Select value={status} onValueChange={setStatus}>
                      <SelectTrigger className="h-12 bg-secondary/50 border-[rgba(255,255,255,0.06)] focus:border-primary/50 focus:ring-primary/20">
                        <SelectValue placeholder="Select your current status" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-[rgba(255,255,255,0.06)]">
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="working">Working Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-secondary/50 border-[rgba(255,255,255,0.06)] focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground pt-2">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
>>>>>>> 05e4b3f7d8dcbf8ed032cb15e8010b1108d9889f
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WaitlistSection;
