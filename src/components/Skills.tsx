import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Sparkles, 
  Cpu, 
  BarChart3, 
  ShieldCheck,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { SkillCategory } from '../types';
import { GlassCard } from './UI/GlassCard';
import { SectionHeading } from './UI/SectionHeading';
import { Badge } from './UI/Badge';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabOptions = [
    { id: 'all', label: 'All Disciplines', icon: Code2 },
    { id: 'frontend_backend', label: 'MERN & Full-Stack', icon: Code2 },
    { id: 'databases_orm', label: 'Prisma & Databases', icon: Database },
    { id: 'control_management', label: 'Control & SCM', icon: Layers },
    { id: 'ai_tooling', label: 'AI Web Apps', icon: Sparkles },
    { id: 'enterprise_erp', label: 'ERP & D365', icon: Cpu },
    { id: 'data_analysis', label: 'Excel & Power BI', icon: BarChart3 },
    { id: 'quality_compliance', label: 'ISO & Compliance', icon: ShieldCheck },
  ];

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.category === activeTab);

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden bg-dark-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Arsenal"
          title="Engineered for Scalability &"
          gradientWord="Operational Precision"
          subtitle="From full-stack TypeScript & Prisma ORM architectures to Supply Chain Management (SCM), financial ledgers, Microsoft Dynamics 365, and ISO audit governance."
          gradientType="purple"
        />

        {/* Filter Tabs (Responsive Scrollable on Mobile) */}
        <div className="flex flex-wrap sm:flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 px-1">
          {tabOptions.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer min-h-[36px] ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-neon-cyan'
                    : 'bg-dark-800/80 hover:bg-dark-700 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <GlassCard glowColor="indigo" className="p-5 sm:p-6 h-full flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-display font-bold text-white">
                          {cat.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill List with Progress Meters */}
                    <div className="space-y-3 mt-4 sm:mt-5">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs gap-2">
                            <div className="flex items-center gap-1.5 min-w-0 truncate">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span className="font-medium text-slate-200 truncate">{skill.name}</span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <Badge variant="neutral" size="sm">
                                {skill.badge}
                              </Badge>
                              <span className="font-mono text-cyan-300 font-semibold text-[11px]">
                                {skill.level}%
                              </span>
                            </div>
                          </div>

                          {/* Meter Bar */}
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                    <span>Proficiency Standard</span>
                    <span className="text-emerald-400 font-semibold">Industry Ready</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
