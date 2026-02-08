import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedProgressBar } from '@/components/AnimatedProgressBar';
import {
  LineChart,
  FileText,
  CheckCircle,
  TrendingUp,
  Briefcase
} from 'lucide-react';

import resumePreview from '@/assets/resume-preview.png';

const skillsProgress = [
  { label: 'Python', percentage: 100, status: 'Complete', statusType: 'complete' as const },
  { label: 'Data Analysis', percentage: 67, status: 'In Progress', statusType: 'inProgress' as const },
  { label: 'Machine Learning', percentage: 35, status: 'In Progress', statusType: 'inProgress' as const },
  { label: 'SQL', percentage: 85, status: 'Almost Done', statusType: 'inProgress' as const },
];

export const TrackingResumeSection = () => {
  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Learning Progress</span>
            <span className="text-foreground">, </span>
            <span className="gradient-text">Resume</span>
            <span className="text-foreground"> & </span>
            <span className="gradient-text">Jobs</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your learning, auto-build a verified resume, and unlock jobs
            when you’re ready.
          </p>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* ✅ COMPACT SKILL TRACKER */}
          <AnimatedSection direction="left">
            <div className="glass-card p-6 max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Skill Progress
                </h3>
              </div>

              <div className="space-y-4">
                {skillsProgress.map((skill, index) => (
                  <AnimatedProgressBar
                    key={skill.label}
                    label={skill.label}
                    percentage={skill.percentage}
                    status={skill.status}
                    statusType={skill.statusType}
                    delay={index * 0.1}
                  />
                ))}
              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  4 skills • 72% completed
                </span>
                <span className="text-primary font-medium cursor-pointer hover:underline">
                  View Roadmap →
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* ✅ RESUME + JOB DISCOVERY (HERO) */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Resume → Job Discovery
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your resume updates automatically as you learn. Once verified,
                CareerMentor AI matches you with real job opportunities.
              </p>

              {/* Resume Image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-xl" />
                <img
                  src={resumePreview}
                  alt="AI resume preview"
                  className="relative rounded-xl border border-border shadow-xl"
                />
              </div>

              {/* Resume Highlights */}
              <div className="bg-secondary/50 rounded-xl p-6 border border-border/50 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-foreground">
                    Verified Skills
                  </span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Pandas', 'Statistics', 'ML Basics'].map(
                    (skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Skills verified through learning completion</span>
                  </div>
                </div>
              </div>

              {/* Job CTA */}
              <div className="flex items-start gap-3 text-sm text-muted-foreground mt-auto">
                <Briefcase className="w-4 h-4 text-primary mt-0.5" />
                <span>
                  Personalized job matches unlock after roadmap completion.
                </span>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
