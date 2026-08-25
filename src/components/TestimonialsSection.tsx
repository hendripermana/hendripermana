import React from 'react';
import { Quote, Sparkles, MessageSquareHeart, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>ENDORSEMENTS & PEERS / 06</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            What Engineering Leaders Say
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm">
            Feedback from engineering leaders, product executives, and peers who have collaborated directly with me.
          </p>
        </div>

        {/* Testimonials Grid in Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/90 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-emerald-500/30 group-hover:text-emerald-400/60 transition-colors" />
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic font-light">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-2xl object-cover border border-zinc-800"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-emerald-400 font-medium">{t.role}</div>
                  <div className="text-[11px] text-zinc-500 font-mono">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
