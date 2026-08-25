import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  MapPin, 
  Award, 
  CheckCircle2, 
  FileText, 
  Code, 
  HeartHandshake,
  Cpu,
  Globe
} from 'lucide-react';
import { ProfileData } from '../types';

interface BioSectionProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const BioSection: React.FC<BioSectionProps> = ({ profile, onOpenResume }) => {
  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'shield-check': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-emerald-300" />;
      case 'layers': return <Layers className="w-5 h-5 text-zinc-300" />;
      default: return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative text-left">
      {/* Background styling */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>BIOGRAPHY & PRINCIPLES / 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Crafting Software That Withstands Scale
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm">
            Technical background, architectural ethos, and how I build resilient distributed systems for millions of users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Portrait & Key Facts Bento Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-zinc-900/60 border border-zinc-800 p-4 overflow-hidden group hover:border-zinc-700 transition-all">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-full h-80 sm:h-96 object-cover rounded-2xl grayscale-20 contrast-105 group-hover:scale-102 transition-transform duration-500"
              />
              
              {/* Floating bento pill badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">LOCATION</div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{profile.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">EXPERIENCE</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    8+ Years In Tech
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Highlights list in Bento style */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Technical DNA</span>
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Core Focus</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-zinc-200 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Distributed Systems</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>React 19 & TypeScript</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cloud Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High-Throughput Queues</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-mono text-xs font-semibold rounded-xl border border-zinc-700 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>VIEW DETAILED RESUME & CREDENTIALS</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Architectural Principles in Bento Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Story Bento Container */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Narrative & Background
              </div>
              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                {profile.fullBio.map((paragraph, index) => (
                  <p key={index} className="text-zinc-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Core Principles Grid in Bento Format */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400">
                <span className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                  <span>Engineering Principles</span>
                </span>
                <span className="text-zinc-500">4 Pillars</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.principles.map((principle, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/90 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      {getPrincipleIcon(principle.icon)}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">
                      {principle.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
