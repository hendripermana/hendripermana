import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { ProfileData } from '../types';

interface ResumeViewerModalProps {
  profile: ProfileData;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ profile, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown resume and trigger file download
    const markdownResume = `# ${profile.name} — ${profile.title}
Email: ${profile.email} | Location: ${profile.location}

## SUMMARY
${profile.bioSummary}

## CORE TECHNICAL SKILLS
${profile.skills.map(s => `- ${s.name} (${s.yearsOfExp}+ yrs)`).join('\n')}

## WORK EXPERIENCE
${profile.experiences.map(e => `
### ${e.role} — ${e.company} (${e.period})
${e.description}
Achievements:
${e.achievements.map(a => `* ${a}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`).join('\n')}

## EDUCATION
${profile.education.map(ed => `### ${ed.degree} — ${ed.institution} (${ed.period})
${ed.location} | ${ed.honors || ''}`).join('\n')}
`;

    const blob = new Blob([markdownResume], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profile.name.toLowerCase().replace(/\s+/g, '_')}_resume.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              CURRICULUM VITAE / DOSSIER
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>EXPORT MD</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-xs font-mono transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 space-y-8 bg-zinc-950 text-zinc-200 max-h-[75vh] overflow-y-auto font-sans print:max-h-none print:p-0">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-mono">
                  {profile.name}
                </h1>
                <p className="text-xs font-mono font-semibold text-emerald-400 mt-1 uppercase tracking-wider">
                  {profile.title}
                </p>
              </div>

              <div className="text-xs font-mono text-zinc-400 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed pt-2 font-light">
              {profile.bioSummary}
            </p>
          </div>

          {/* Technical Proficiencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800/80 pb-1">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {profile.skills.map((s) => (
                <div key={s.id} className="flex items-center gap-1.5 text-zinc-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="font-semibold text-zinc-200">{s.name}</span>
                  <span className="text-[10px] text-zinc-500 font-mono">({s.yearsOfExp}+ yrs)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800/80 pb-1">
              Professional Work History
            </h2>
            <div className="space-y-6">
              {profile.experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-white uppercase">{exp.role}</span>
                      <span className="text-zinc-600 mx-1.5">—</span>
                      <span className="text-xs font-semibold text-emerald-400 font-mono">{exp.company}</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">{exp.period}</span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 text-xs text-zinc-400">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800/80 pb-1">
              Education & Credentials
            </h2>
            {profile.education.map((edu) => (
              <div key={edu.id} className="space-y-1 text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white uppercase">{edu.degree}</span>
                  <span className="text-zinc-500">{edu.period}</span>
                </div>
                <div className="text-zinc-400">{edu.institution} — {edu.location}</div>
                {edu.honors && <div className="text-amber-400 text-[11px]">{edu.honors}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
