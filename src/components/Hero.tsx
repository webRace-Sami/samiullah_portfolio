import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  FileText, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal,
  Database,
  Layers,
  Cpu,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume, onCopyText }) => {
  const [copied, setCopied] = useState(false);
  const [typeIndex, setTypeIndex] = useState(0);

  const dynamicRoles = [
    "MERN Stack & TypeScript Engineer",
    "Prisma ORM & Full-Stack Architect",
    "Control Management & SCM Specialist",
    "AI-Powered Web Applications Builder",
    "SQL & MongoDB Database Specialist",
    "Microsoft Dynamics 365 & Audit Pro"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypeIndex((prev) => (prev + 1) % dynamicRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [dynamicRoles.length]);

  const handleCopyEmail = () => {
    onCopyText(profile.email, "Email address");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techBadges = [
    { name: "React 19 & Vite", icon: Zap, color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
    { name: "TypeScript", icon: Terminal, color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
    { name: "Prisma ORM", icon: Database, color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10" },
    { name: "MERN Stack", icon: Layers, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
    { name: "Supply Chain & Finance", icon: Sparkles, color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
    { name: "AI Web Apps", icon: Sparkles, color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
    { name: "Dynamics 365 ERP", icon: Cpu, color: "text-teal-400 border-teal-500/30 bg-teal-500/10" },
    { name: "ISO 9001 / 19011", icon: ShieldCheck, color: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 sm:pt-32 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-dark-800/90 border border-cyan-500/30 shadow-neon-cyan mb-6 sm:mb-8 backdrop-blur-md max-w-full"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-200 truncate">
              Available for Full-Stack, MERN, Prisma & AI Web Projects
            </span>
          </motion.div>

          {/* Name & Academic Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white mb-3 sm:mb-4"
          >
            Hi, I'm <span className="text-gradient-cyan">{profile.name}</span>
            <span className="block sm:inline sm:ml-3 text-lg xs:text-xl sm:text-3xl font-mono text-cyan-400/80 font-normal">
              ({profile.degree})
            </span>
          </motion.h1>

          {/* Dynamic Role Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-[2.5rem] sm:min-h-[3rem] mb-4 sm:mb-6 flex items-center justify-center px-2"
          >
            <span className="text-base xs:text-lg sm:text-2xl md:text-3xl font-mono font-semibold text-gradient-purple text-center leading-tight">
              {dynamicRoles[typeIndex]}
            </span>
          </motion.div>

          {/* Bio Overview */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 font-normal px-2"
          >
            Specialized in crafting scalable web applications using{' '}
            <span className="text-cyan-300 font-medium">MERN Stack</span>,{' '}
            <span className="text-indigo-300 font-medium">TypeScript</span>,{' '}
            <span className="text-purple-300 font-medium">Prisma ORM</span>, and{' '}
            <span className="text-emerald-300 font-medium">Vite</span> with{' '}
            <span className="text-white font-medium">SQL & MongoDB</span> databases. Strong corporate foundations in <span className="text-amber-300 font-medium">Supply Chain, Finance & Control Management</span> and cutting-edge <span className="text-cyan-400 font-medium">AI tools</span>.
          </motion.p>

          {/* Quick Connect & Direct CTAs (Responsive Grid/Wrap) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-6 sm:mb-10 px-2 max-w-xl sm:max-w-none mx-auto"
          >
            {/* WhatsApp Direct Chat */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-900 font-bold text-xs sm:text-sm shadow-neon-emerald transition-all cursor-pointer min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 fill-dark-900 shrink-0" />
              <span>WhatsApp Chat</span>
            </motion.a>

            {/* Direct Phone Call */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`tel:${profile.phone}`}
              className="flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-dark-800 hover:bg-dark-700 border border-cyan-500/40 text-cyan-300 font-mono text-xs sm:text-sm shadow-neon-cyan transition-all cursor-pointer min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{profile.phone}</span>
            </motion.a>

            {/* Explore Projects */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-neon-indigo transition-all cursor-pointer min-h-[44px]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </motion.a>

            {/* Open Full CV Modal */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-xl bg-dark-800/90 hover:bg-dark-700/90 border border-white/10 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all cursor-pointer min-h-[44px]"
            >
              <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>View Full CV</span>
            </motion.button>
          </motion.div>

          {/* Quick Copy Contact Bar (Responsive Wrap) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-2 rounded-2xl bg-dark-800/70 border border-white/10 backdrop-blur-md text-xs font-mono text-slate-400 max-w-full"
          >
            <span className="text-slate-300 font-medium">Email:</span>
            <span className="text-cyan-400 truncate max-w-[200px] xs:max-w-none">{profile.email}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">{profile.locationShort}</span>
          </motion.div>

          {/* Floating Interactive Tech Stack Pills (Responsive Wrap) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/5"
          >
            <p className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">
              Core Technical Mastery & Management Frameworks
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-2">
              {techBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + idx * 0.04 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border text-[11px] sm:text-xs font-mono font-medium shadow-sm cursor-default transition-all ${badge.color}`}
                  >
                    <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>{badge.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
