import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { RoadmapPreview } from '@/components/ui/RoadmapPreview';
import { ResumePreview } from '@/components/ui/ResumePreview';
import { SkillTrackingPreview } from '@/components/ui/SkillTrackingPreview';
import { JobMatchingPreview } from '@/components/ui/JobMatchingPreview';

export const FeaturesSection = () => {
  return (
    <section id="features" className="section-container">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Everything You Need to Get </span>
            <span className="gradient-text">Job-Ready</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All the tools you need — connected in one clear system.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-8" staggerDelay={0.15}>
          {/* Feature 1: Industry-Driven Roadmaps */}
          <StaggerItem>
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Industry-Driven Roadmaps
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Learn only what companies actually hire for.
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    Your roadmap is built by analyzing real job postings — not random course lists.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <RoadmapPreview />
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 2: Resume Builder */}
          <StaggerItem>
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-first">
                  <ResumePreview />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Resume Builder
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Your resume builds itself as you complete skills.
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    Everything you learn is reflected instantly in a job-ready resume.
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 3: Skill Tracking */}
          <StaggerItem>
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Skill Tracking
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Your progress updates automatically as you learn.
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    No manual tracking — your dashboard always reflects real progress.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <SkillTrackingPreview />
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 4: Job Matching */}
          <StaggerItem>
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-first">
                  <JobMatchingPreview />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Job Matching
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Apply only when you're ready.
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    Unlock job opportunities matched to your verified skills.
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
