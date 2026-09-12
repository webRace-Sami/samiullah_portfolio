import React from 'react';
import { 
  ArrowUp, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Github, 
  Globe, 
  FileText,
  ShieldCheck
} from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-900 border-t border-white/10 pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-neon-cyan shrink-0">
                <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-sm sm:text-base text-gradient-cyan">SU</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {profile.name} <span className="text-cyan-400 font-mono text-xs sm:text-sm">({profile.degree})</span>
                </h3>
                <p className="text-[11px] sm:text-xs font-mono text-slate-400">
                  Full-Stack MERN & TypeScript Web Developer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Building scalable, high-performance web applications with MERN Stack, TypeScript, Prisma ORM, Vite, and cutting-edge AI development tools.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>ISO 9001 / ISO 19011 Compliance Ready</span>
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div className="lg:col-span-4 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Direct Contact
            </h4>

            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors py-0.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{profile.phone} (Direct Call)</span>
                </a>
              </li>

              <li>
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors py-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp Messenger Chat</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors truncate py-0.5 cursor-pointer"
                  title={profile.email}
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
              </li>

              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  {profile.locationShort}
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation & Resume Trigger */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Quick Portals
            </h4>

            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={onOpenResume}
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono transition-colors text-left cursor-pointer min-h-[38px]"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>Interactive Full CV</span>
                </span>
                <span>↗</span>
              </button>

              <a
                href={profile.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 border border-white/5 text-slate-300 hover:text-white font-mono transition-colors cursor-pointer min-h-[38px]"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Vercel Portfolio</span>
                </span>
                <span>↗</span>
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 border border-white/5 text-slate-300 hover:text-white font-mono transition-colors cursor-pointer min-h-[38px]"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>GitHub Repositories</span>
                </span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px] sm:text-xs">
            <span>Built with MERN • TypeScript • Prisma • Vite • Tailwind</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 hover:bg-dark-700 border border-white/10 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
