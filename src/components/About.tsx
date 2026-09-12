import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Sparkles, 
  Cpu, 
  FileCheck2, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  Layers,
  TrendingUp,
  Truck,
  Users
} from 'lucide-react';
import { ProfileData } from '../types';
import { GlassCard } from './UI/GlassCard';
import { SectionHeading } from './UI/SectionHeading';
import { Badge } from './UI/Badge';

interface AboutProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, onOpenResume }) => {
  const pillars = [
    {
      title: "MERN Stack & Prisma Architecture",
      icon: Code2,
      color: "cyan",
      badge: "Core Engineering",
      description: "Architecting scalable web applications using React, Vite, Node.js, Express, and Prisma ORM with PostgreSQL, SQL, and MongoDB schemas."
    },
    {
      title: "Control Management & Operations",
      icon: Layers,
      color: "amber",
      badge: "SCM • Finance • HRM",
      description: "Strategic operational governance across Supply Chain Management (SCM), Financial Ledgers & Commissions, Marketing Positioning, and HRM compliance."
    },
    {
      title: "AI-Powered Web Development",
      icon: Sparkles,
      color: "indigo",
      badge: "AI Accelerated",
      description: "Expert in generating and refining full-stack websites and complex web apps with state-of-the-art AI tools, prompt engineering, and modern agentic workflows."
    },
    {
      title: "Microsoft Dynamics 365 & ISO Audits",
      icon: Cpu,
      color: "emerald",
      badge: "Enterprise ERP & QA",
      description: "Managing mission-critical D365 ERP workflows, IRN/QO postings, inventory aging reports, and ISO 19011/9001/2859-1 quality governance."
    }
  ];

  const managementHighlights = [
    { name: "Supply Chain (SCM)", desc: "Inward logistics, PO/GDN/IGP audits & vendor reconciliation", icon: Truck },
    { name: "Financial Accounting", desc: "Deal ledgers, commission calculations & cash balance tracking", icon: TrendingUp },
    { name: "Marketing Strategy", desc: "E-commerce storefronts, catalog optimization & conversion flow", icon: Sparkles },
    { name: "HRM & Governance", desc: "Workforce tracking, CAPs safety logs & audit grievance controls", icon: Users },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Sami Ullah"
          title="Bridging Engineering Precision with"
          gradientWord="Corporate Control & Innovation"
          subtitle="BSCS graduate combining full-stack MERN & TypeScript software engineering, AI web development velocity, and corporate control management across supply chain, finance, and enterprise ERP."
          gradientType="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 sm:mb-12">
          
          {/* Left Column: Interactive Holographic ID Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <GlassCard glowColor="cyan" className="p-5 sm:p-8 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Profile Header */}
              <div className="flex items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-1 shadow-neon-cyan shrink-0">
                  <div className="w-full h-full bg-dark-900 rounded-[12px] sm:rounded-[14px] flex flex-col items-center justify-center text-center">
                    <span className="font-display font-black text-xl sm:text-2xl text-gradient-cyan">SU</span>
                    <span className="text-[8px] sm:text-[9px] font-mono text-emerald-400 font-bold">BSCS Grad</span>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white truncate">
                      {profile.name}
                    </h3>
                    <Badge variant="emerald" size="sm">BSCS Completed</Badge>
                  </div>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    {profile.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{profile.locationShort}</span>
                  </p>
                </div>
              </div>

              {/* Bio snippet */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 sm:mb-6">
                {profile.bio}
              </p>

              {/* Quick Details List */}
              <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10 text-xs font-mono text-slate-300 mb-5 sm:mb-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1.5 shrink-0">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone:
                  </span>
                  <a href={`tel:${profile.phone}`} className="text-cyan-300 hover:underline truncate">
                    {profile.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1.5 shrink-0">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" /> Email:
                  </span>
                  <span className="text-slate-200 truncate max-w-[180px] xs:max-w-[220px]" title={profile.email}>
                    {profile.email}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1.5 shrink-0">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> Degree:
                  </span>
                  <span className="text-emerald-300 font-bold truncate">BSCS (VU) Completed</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1.5 shrink-0">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" /> Enterprise ERP:
                  </span>
                  <span className="text-emerald-300 truncate">MS Dynamics 365 (D365)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-neon-cyan transition-all cursor-pointer min-h-[42px]"
                >
                  <span>Interactive CV</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#contact"
                  className="w-full py-2.5 px-3 rounded-xl bg-dark-700 hover:bg-dark-600 border border-white/10 text-slate-200 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[42px]"
                >
                  <span>Get in Touch</span>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: 4 Strategic Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <GlassCard
                    glowColor={pillar.color as any}
                    className="p-5 sm:p-6 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                        </div>
                        <Badge variant={pillar.color as any} size="sm">
                          {pillar.badge}
                        </Badge>
                      </div>

                      <h4 className="text-sm sm:text-base font-display font-bold text-white mb-1.5 sm:mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-cyan-400">
                      <span>Production Ready</span>
                      <span>100% Precision</span>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Dedicated Control Management Grid Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-dark-800/80 border border-amber-500/20 p-5 sm:p-8 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 text-amber-300 font-mono text-[11px] sm:text-xs uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Corporate Control Management & Business Systems</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-display font-bold text-white mb-4 sm:mb-6">
            Holistic Business Operations & Operational Governance
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {managementHighlights.map((m) => {
              const MIcon = m.icon;
              return (
                <div key={m.name} className="p-3.5 sm:p-4 rounded-xl bg-dark-900/60 border border-white/5 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 mb-1">
                    <MIcon className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{m.name}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
