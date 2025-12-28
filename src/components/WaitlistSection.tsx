import { useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export const WaitlistSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !status) {
      toast({
        title: 'Please fill all fields',
        description: 'All fields are required to join the waitlist.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: 'Welcome to the waitlist!',
      description: "We'll notify you when CareerMentor AI launches.",
    });
  };

  return (
    <section id="waitlist" className="section-container">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Join the </span>
            <span className="gradient-text">Waitlist</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Be the first to access CareerMentor AI when we launch. 
            Get early access and exclusive updates.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll send you an email when CareerMentor AI is ready.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="h-12 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Current Status
                    </label>
                    <Select value={status} onValueChange={setStatus}>
                      <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20">
                        <SelectValue placeholder="Select your current status" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="working">Working Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
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
                        Join the Waitlist
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    No spam. No selling your data. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
