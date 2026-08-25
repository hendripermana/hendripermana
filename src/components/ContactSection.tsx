import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Copy, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'twitter': return <Twitter className="w-4 h-4" />;
      case 'mail': return <Mail className="w-4 h-4" />;
      default: return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative text-left">
      {/* Ambient background styling */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>DISPATCH & CONNECT / 07</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Let's Engineer Together
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm">
            Have an engineering leadership opportunity, a high-throughput systems project, or an architecture consultation? Reach out below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Professional Profiles */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  I typically respond to consulting requests and leadership inquiries within 12-24 hours.
                </p>
              </div>

              {/* Email Copy Card in Bento style */}
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2.5">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  Primary Direct Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-emerald-400 font-mono truncate">
                    {profile.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Copied to clipboard</span>
                  </div>
                )}
              </div>

              {/* Meta information */}
              <div className="space-y-3 pt-2 text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Available for Global Remote & Hybrid Roles</span>
                </div>
              </div>

              {/* Professional Links List */}
              <div className="space-y-3 pt-4 border-t border-zinc-800">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                  Professional Profiles
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {profile.socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all text-zinc-300 hover:text-white group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                          {getSocialIcon(social.iconName)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {social.name}
                          </div>
                          <div className="text-[11px] text-zinc-500 font-mono">
                            {social.username || social.url}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-left space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-wider font-mono">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Fill out the fields below for an immediate direct response.
                </p>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Message received!</div>
                    <div className="mt-0.5 text-emerald-300/90">
                      Thank you for reaching out. Hendri will review your message and reply promptly.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-zinc-400">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-emerald-500/60 rounded-2xl text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-zinc-400">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-emerald-500/60 rounded-2xl text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Subject / Project Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Distributed System Architecture Advisory"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-emerald-500/60 rounded-2xl text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Your Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your technical requirements, goals, timeline, or open role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-emerald-500/60 rounded-2xl text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors resize-none font-mono"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] text-zinc-500 font-mono">
                    Direct delivery: hendripermana13@gmail.com
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-2xl transition-all cursor-pointer disabled:opacity-50 active:scale-95 uppercase tracking-wider font-mono"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Dispatch</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
