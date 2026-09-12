import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { ExperienceItem } from '../types';
import { GlassCard } from './UI/GlassCard';
import { SectionHeading } from './UI/SectionHeading';
import { Badge } from './UI/Badge';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Enterprise Systems &"
          gradientWord="Industrial Auditing Experience"
          subtitle="Delivering high-stakes data integrity, Microsoft Dynamics 365 ERP operations, and rigorous quality auditing across Pakistan's premier multinational manufacturing conglomerates."
          gradientType="gold"
        />

        <div className="relative">
          {/* Vertical Glowing Timeline Line (Hidden on tiny screens, clean on tablet/desktop) */}
          <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-indigo-500 to-amber-500 -translate-x-1/2 hidden sm:block opacity-30" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => {
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
                >
                  {/* Timeline Center Node (Hidden on tiny screens) */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-900 border-2 border-cyan-400 shadow-neon-cyan hidden sm:flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full">
                    <GlassCard
                      glowColor={index === 0 ? 'cyan' : index === 1 ? 'indigo' : 'amber'}
                      className="p-5 sm:p-8"
                    >
                      {/* Top Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-lg sm:text-2xl font-display font-bold text-white">
                              {exp.company}
                            </h3>
                            <Badge variant={index === 0 ? 'cyan' : index === 1 ? 'indigo' : 'amber'} size="sm">
                              {exp.badge}
                            </Badge>
                          </div>
                          
                          <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold">
                            {exp.role}
                          </p>
                        </div>

                        <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-[11px] sm:text-xs font-mono text-slate-400 flex-wrap">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <Calendar className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            {exp.tenure}
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-400">
                            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Company Overview */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6 font-normal bg-white/[0.03] p-3 sm:p-3.5 rounded-xl border border-white/5">
                        {exp.companyOverview}
                      </p>

                      {/* Duties & Responsibilities Grid */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 sm:mb-3 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Key Duties & Technical Deliverables</span>
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5">
                          {exp.duties.map((duty, dIdx) => (
                            <div
                              key={dIdx}
                              className="p-3 sm:p-3.5 rounded-xl bg-dark-700/50 border border-white/5 hover:border-cyan-500/20 transition-colors"
                            >
                              <div className="text-xs font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                                <span className="truncate">{duty.title}</span>
                              </div>
                              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                                {duty.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Learnings & Technologies */}
                      <div className="pt-3.5 sm:pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 mr-1">Tools:</span>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-emerald-400">
                          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                          <span>Audit Discipline Verified</span>
                        </div>
                      </div>

                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
