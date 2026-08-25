import React from 'react';
import { 
  Code2, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  ExternalLink 
} from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-bold text-white tracking-tight text-lg uppercase font-mono">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              {profile.tagline}
            </p>
            <div className="text-xs font-mono text-zinc-500">
              LOC: {profile.location.toUpperCase()}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400 font-mono">
              <a href="#about" className="hover:text-emerald-400 transition-colors">About & Bio</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills Stack</a>
              <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
              <a href="#testimonials" className="hover:text-emerald-400 transition-colors">Endorsements</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Get In Touch</a>
            </div>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Connect Online
            </h4>
            <div className="flex items-center md:justify-end gap-2">
              {profile.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-emerald-400 transition-colors"
                  title={social.name}
                >
                  {getSocialIcon(social.iconName)}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-2xl text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer font-mono"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>BENTO GRID SYSTEM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
