import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Terminal, 
  Sparkles, 
  Play, 
  RefreshCw,
  Cpu,
  Activity
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'architecture' | 'demo'>('case-study');
  const [demoState, setDemoState] = useState<{ isRunning: boolean; logs: string[]; metricVal: number }>({
    isRunning: false,
    logs: ['[System initialized. Ready for benchmark execution.]'],
    metricVal: 42
  });

  if (!project) return null;

  const runSimulator = () => {
    setDemoState({
      isRunning: true,
      logs: [
        `[Init] Connecting to ${project.title.split('—')[0].trim()} pipeline...`,
        `[Cluster] Provisioning 4 distributed workers across asia-southeast1...`,
        `[LoadTest] Ingesting 10,000 synthetic payload events with CRC32 verification...`
      ],
      metricVal: 88
    });

    setTimeout(() => {
      setDemoState((prev) => ({
        ...prev,
        logs: [
          ...prev.logs,
          `[Kafka] Batched 10k messages into 8 topic partitions (compression: snappy).`,
          `[Database] Bulk write executed in 24.8ms. Zero lock contention detected.`,
          `[Status] 100% telemetry validated. p99 response time: 38ms.`
        ],
        isRunning: false,
        metricVal: 99.9
      }));
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono font-semibold">
              {project.category}
            </span>
            <span className="text-zinc-600 text-xs font-mono">•</span>
            <span className="text-zinc-400 text-xs font-mono">{project.status}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Header & Hero Image */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 flex-wrap">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === 'case-study'
                  ? 'bg-zinc-800 text-emerald-400 border border-zinc-700 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 border border-transparent'
              }`}
            >
              CASE STUDY & SOLUTION
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-zinc-800 text-emerald-400 border border-zinc-700 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 border border-transparent'
              }`}
            >
              SYSTEM ARCHITECTURE
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'demo'
                  ? 'bg-zinc-800 text-emerald-400 border border-zinc-700 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 border border-transparent'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              LIVE SIMULATION
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'case-study' && (
            <div className="space-y-6 text-sm">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Project Overview
                </h4>
                <p className="text-zinc-300 leading-relaxed font-light">
                  {project.fullCaseStudy?.overview || project.description}
                </p>
              </div>

              {/* Challenges & Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-950 p-5 rounded-2xl border border-rose-950/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs font-mono uppercase">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Technical Challenges</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {(project.fullCaseStudy?.challenges || [
                      'High burst traffic concurrency and latency SLA constraints.',
                      'Complex cross-region data synchronization and caching.'
                    ]).map((ch, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-950 p-5 rounded-2xl border border-emerald-950/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineered Solutions</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {(project.fullCaseStudy?.solutions || [
                      'Partitioned message queue topology with idempotent workers.',
                      'Optimized state caching with multi-tier Redis and local memory.'
                    ]).map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Metrics / Outcomes */}
              {project.fullCaseStudy?.metrics && (
                <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-2.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>Impact & Measurable Results</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                    {project.fullCaseStudy.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 bg-zinc-900/90 p-2.5 rounded-xl border border-zinc-800 font-mono text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6 text-sm">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Data Flow & Topology Breakdown</span>
                </h4>
                <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 font-mono text-xs text-emerald-400 leading-relaxed overflow-x-auto">
                  {project.fullCaseStudy?.architecture || 'Ingress Gateway -> Load Balancer -> Microservices Worker Pool -> Distributed Database Cluster'}
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Technologies & Infrastructure</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-mono font-semibold text-zinc-300 uppercase">
                    Interactive Live Pipeline Test
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Trigger simulated latency benchmark and telemetry validation.
                  </p>
                </div>
                <button
                  onClick={runSimulator}
                  disabled={demoState.isRunning}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs font-mono rounded-xl transition-all cursor-pointer disabled:opacity-50"
                >
                  {demoState.isRunning ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Benchmarking...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>RUN PIPELINE TEST</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal View */}
              <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-4 font-mono text-xs space-y-1.5 max-h-56 overflow-y-auto">
                <div className="text-zinc-500 flex items-center gap-1.5 pb-2 border-b border-zinc-900">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Interactive Benchmark Console</span>
                </div>
                {demoState.logs.map((log, index) => (
                  <div key={index} className="text-zinc-300">
                    <span className="text-emerald-400">&gt;</span> {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs rounded-xl border border-zinc-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 text-xs rounded-xl border border-emerald-500/30 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>LIVE DEMO</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded-xl cursor-pointer transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
