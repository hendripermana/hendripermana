import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Award 
} from 'lucide-react';
import { Experience, Education } from '../types';

interface ExperienceSectionProps {
  experiences: Experience[];
  education: Education[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, education }) => {
  return (
    <section id="experience" className="py-20 md:py-28 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>CAREER PATH & EDUCATION / 05</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Professional Trajectory
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm">
            Track record of technical leadership, architectural decisions, and product execution across high-growth startups and enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Work Experience Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-400 pb-2">
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Work Experience</span>
              </span>
              <span className="text-zinc-500">Timeline</span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div 
                  key={exp.id} 
                  className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all text-left space-y-4 group"
                >
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {exp.role}
                        </h4>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Current Role
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-emerald-400 font-mono">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-zinc-400 font-mono shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                      Key Accomplishments
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-zinc-800/80">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 rounded-md text-[10px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-400 pb-2">
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Education</span>
              </span>
              <span className="text-zinc-500">Degrees</span>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all text-left space-y-3"
                >
                  <div className="w-10 h-10 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-semibold text-emerald-400 font-mono mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>

                  {edu.details && (
                    <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-zinc-800/80">
                      {edu.details}
                    </p>
                  )}

                  {edu.honors && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                      <Sparkles className="w-3 h-3" />
                      <span>{edu.honors}</span>
                    </div>
                  )}
                </div>
              ))}

              {/* Certifications in Bento Tile */}
              <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 text-left space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Certifications & Focus</span>
                </h4>
                <div className="space-y-2 text-xs text-zinc-300">
                  <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                    <div className="font-semibold text-white">Google Cloud Certified</div>
                    <div className="text-[11px] text-zinc-500 font-mono">Professional Cloud Architect</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                    <div className="font-semibold text-white">Certified Kubernetes Administrator</div>
                    <div className="text-[11px] text-zinc-500 font-mono">CKA - Cloud Native Computing Foundation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
