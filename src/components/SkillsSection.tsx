import React, { useState, useMemo } from 'react';
import { 
  Cpu, 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  Layers, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';
import { Skill } from '../types';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryMap: { [key: string]: { label: string; icon: React.ReactNode } } = {
    all: { label: 'All Technologies', icon: <Cpu className="w-3.5 h-3.5" /> },
    frontend: { label: 'Frontend & UI', icon: <Code2 className="w-3.5 h-3.5" /> },
    backend: { label: 'Backend & APIs', icon: <Server className="w-3.5 h-3.5" /> },
    cloud: { label: 'Cloud & DevOps', icon: <Cloud className="w-3.5 h-3.5" /> },
    database: { label: 'Databases & Storage', icon: <Database className="w-3.5 h-3.5" /> },
    architecture: { label: 'Architecture & Tooling', icon: <Layers className="w-3.5 h-3.5" /> },
  };

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchCat = activeCategory === 'all' || skill.category === activeCategory;
      const matchSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [skills, activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>TECHNICAL MATRIX / 04</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Production Capabilities & Stack
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              From web frontend orchestrations to distributed microservices, Kubernetes clusters, and low-latency data layers.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Go)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-emerald-500/60 rounded-2xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none font-mono"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {Object.entries(categoryMap).map(([key, item]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-zinc-800 text-emerald-400 border border-zinc-700 shadow-xs'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {item.icon}
                <span>{item.label.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/90 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="p-0.5 px-1.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono" title="Core Specialty">
                      CORE
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-zinc-400 font-medium">
                  {skill.yearsOfExp}+ yrs
                </span>
              </div>

              {/* Progress Meter */}
              <div className="space-y-1.5">
                <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span className="uppercase">{skill.category}</span>
                  <span className="text-zinc-400">{skill.level}% proficiency</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Overview Feature Strip in Bento Format */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-emerald-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Full-Lifecycle Delivery</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                From technical RFCs and architecture to containerized orchestration and continuous observability.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Type-Safe Contracts</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Strict TypeScript schemas, automated test harnesses with Vitest & Playwright for zero regression.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-emerald-400 shrink-0">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Cloud Resiliency</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Containerized clusters on Kubernetes, Terraform IaC, multi-region failovers, and low p99 latencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
