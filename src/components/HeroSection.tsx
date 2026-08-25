import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Send, 
  FileText, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Clock,
  ArrowUpRight,
  Layers,
  Code2
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeroSectionProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenResume, onSelectProject }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'stack' | 'architecture' | 'stats'>('stack');
  const [currentTime, setCurrentTime] = useState<string>('14:42');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'twitter': return <Twitter className="w-4 h-4" />;
      case 'mail': return <Mail className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  const featuredProject1 = profile.projects[0];
  const featuredProject2 = profile.projects[1] || profile.projects[0];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden text-left">
      {/* Subtle Ambient Bento Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Bento Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800/90 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                SYSTEMS ARCHITECT & FULL-STACK
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              {profile.name}
            </h1>
            <p className="text-zinc-400 font-mono text-xs sm:text-sm uppercase tracking-wider mt-1">
              {profile.title} — Distributed Web & Cloud Platforms
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase text-zinc-400">
            <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-200">{profile.availabilityNote || 'Available for Projects'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {/* The Master Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          
          {/* Bento Tile 1: Main Large Biography Card (8 cols) */}
          <div className="md:col-span-8 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition-all duration-300">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                  BIOGRAPHY / 01
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-zinc-800 border border-zinc-700 text-zinc-300">
                  Engineering Ethos
                </span>
              </div>

              <p className="text-2xl sm:text-3xl text-zinc-100 leading-snug font-light max-w-2xl">
                I craft <span className="text-emerald-400 font-normal">robust digital ecosystems</span> at the intersection of extreme performance and clean typography. Focused on building systems that scale without friction.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                {profile.bioSummary}
              </p>
            </div>

            <div className="pt-6 relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/80 mt-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1 bg-zinc-800/80 rounded-full text-xs font-mono border border-zinc-700 text-zinc-300">
                  Architecture
                </span>
                <span className="px-3.5 py-1 bg-zinc-800/80 rounded-full text-xs font-mono border border-zinc-700 text-zinc-300">
                  Distributed Systems
                </span>
                <span className="px-3.5 py-1 bg-zinc-800/80 rounded-full text-xs font-mono border border-zinc-700 text-zinc-300">
                  Full-Stack React
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded-xl transition-all"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
          </div>

          {/* Bento Tile 2: Timezone & Active Node (4 cols) */}
          <div className="md:col-span-4 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-zinc-500">
              <span>Timezone / Node</span>
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            
            <div className="my-4">
              <div className="text-3xl sm:text-4xl font-light text-white tracking-widest font-mono">
                {currentTime} <span className="text-sm text-zinc-500 font-sans">WIB / UTC+7</span>
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-mono">
                {profile.location} • Global Collaboration
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Node Status: Online
              </span>
              <span className="text-zinc-500">&lt; 30ms latency</span>
            </div>
          </div>

          {/* Bento Tile 3: Expertise / Stack Breakdown (4 cols) */}
          <div className="md:col-span-4 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-zinc-500 tracking-widest mb-4">
              <span>Expertise / Stack</span>
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            <div className="grid grid-cols-2 gap-y-3.5 gap-x-2">
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-mono">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>TypeScript / JS</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-mono">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>Go / Rust</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-mono">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>React 19 / Next</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-mono">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>Kubernetes / K8s</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-mono">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>PostgreSQL / SQL</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-mono">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>GCP & AWS Cloud</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>18+ production frameworks</span>
              <a href="#skills" className="text-emerald-400 hover:underline">Full matrix &rarr;</a>
            </div>
          </div>

          {/* Bento Tile 4: High Contrast Light Highlight Project Bento (4 cols) */}
          {featuredProject1 && (
            <div className="md:col-span-4 bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between group overflow-hidden relative text-zinc-900 shadow-xl">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                    PROJECT ALPHA / 01
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-200 text-zinc-800 font-bold">
                    {featuredProject1.category}
                  </span>
                </div>
                <h3 className="text-zinc-950 text-2xl font-black tracking-tight">
                  {featuredProject1.title.split('—')[0].trim()}
                </h3>
                <p className="text-zinc-700 text-xs mt-2 leading-relaxed line-clamp-2">
                  {featuredProject1.tagline}
                </p>
              </div>

              <div className="mt-6 relative z-10 pt-4 border-t border-zinc-200">
                <div className="text-zinc-500 text-[10px] font-mono mb-2 uppercase flex items-center justify-between">
                  <span>Case Study & Architecture</span>
                  <span className="font-bold text-zinc-900">{featuredProject1.status}</span>
                </div>
                <button
                  onClick={() => onSelectProject(featuredProject1.id)}
                  className="w-full py-2.5 bg-zinc-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Bento Tile 5: Dark Highlight Project Bento (4 cols) */}
          {featuredProject2 && (
            <div 
              onClick={() => onSelectProject(featuredProject2.id)}
              className="md:col-span-4 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-600 transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                    PROJECT BETA / 02
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Featured
                  </span>
                </div>
                <h3 className="text-zinc-100 text-2xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
                  {featuredProject2.title.split('—')[0].trim()}
                </h3>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed line-clamp-2">
                  {featuredProject2.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex justify-between items-center">
                <div className="flex -space-x-1.5">
                  <div className="px-2 py-1 rounded-md border border-zinc-700 bg-emerald-500/10 text-emerald-300 text-[10px] font-mono font-bold">
                    KAFKA
                  </div>
                  <div className="px-2 py-1 rounded-md border border-zinc-700 bg-zinc-800 text-zinc-300 text-[10px] font-mono font-bold">
                    GRPC
                  </div>
                </div>
                <div className="text-zinc-400 font-mono text-xs flex items-center gap-1 group-hover:text-emerald-400">
                  <span>[CASE STUDY]</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          )}

          {/* Bento Tile 6: GitHub Stars / Impact Metric (3 cols) */}
          <a
            href="https://github.com/hendripermana"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3 bg-emerald-500 rounded-3xl p-6 flex flex-col justify-between text-zinc-950 hover:bg-emerald-400 transition-colors cursor-pointer group shadow-lg"
          >
            <div className="flex items-center justify-between text-xs font-mono uppercase font-bold">
              <span>GitHub</span>
              <Github className="w-4 h-4" />
            </div>
            <div className="my-2">
              <div className="text-4xl font-black tracking-tight">4.2k+</div>
              <div className="text-[11px] font-mono uppercase opacity-80 mt-0.5">Total Repo Stars</div>
            </div>
            <div className="text-[11px] font-mono font-bold flex items-center justify-between pt-2 border-t border-emerald-600/30">
              <span>Open Source Contributor</span>
              <span>&rarr;</span>
            </div>
          </a>

          {/* Bento Tile 7: LinkedIn Connect (3 cols) */}
          <a
            href="https://linkedin.com/in/hendripermana"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between text-white hover:bg-zinc-800/80 hover:border-zinc-700 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs font-mono uppercase text-zinc-500">
              <span>Network</span>
              <Linkedin className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="my-2">
              <div className="text-4xl font-bold tracking-tight">500+</div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">Professional Peers</div>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center justify-between pt-2 border-t border-zinc-800">
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Bento Tile 8: Direct Email One-Click Copy (6 cols) */}
          <div 
            onClick={copyEmail}
            className="md:col-span-6 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer hover:border-emerald-500/50 transition-colors"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-zinc-500">Direct Inquiries</span>
                {copiedEmail && (
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Copied!
                  </span>
                )}
              </div>
              <span className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-emerald-400 transition-colors truncate block">
                {profile.email}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                copyEmail();
              }}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-xl text-xs font-mono font-semibold border border-zinc-700 transition-colors flex items-center gap-1.5 shrink-0"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Bottom Bento Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          {profile.metrics.map((metric) => (
            <div key={metric.id} className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-emerald-400">
                {metric.label}
              </div>
              {metric.description && (
                <div className="text-[11px] text-zinc-500">
                  {metric.description}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
