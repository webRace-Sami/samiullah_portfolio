import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { EducationItem, CertificationItem } from '../types';
import { GlassCard } from './UI/GlassCard';
import { SectionHeading } from './UI/SectionHeading';
import { Badge } from './UI/Badge';

interface EducationProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const Education: React.FC<EducationProps> = ({ education, certifications }) => {
  return (
    <section id="education" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic & Standards"
          title="Academic Qualifications &"
          gradientWord="ISO Quality Frameworks"
          subtitle="A solid computer science academic trajectory combined with international audit governance and quality assurance certifications."
          gradientType="purple"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Academic Education Timeline */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                Academic Degrees & Foundations
              </h3>
            </div>

            {education.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <GlassCard glowColor="cyan" className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-display font-bold text-white">
                        {item.degree}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400 mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    <Badge
                      variant={item.status === 'Completed' ? 'emerald' : 'cyan'}
                      size="sm"
                    >
                      {item.status}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono text-slate-400 mb-2.5 sm:mb-3 flex-wrap">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      {item.year}
                    </span>
                    <span>•</span>
                    <span className="text-slate-400">{item.boardOrUni}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Right Column: ISO Standards & Industry Learnings */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                ISO Auditing & Quality Frameworks
              </h3>
            </div>

            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <GlassCard glowColor="amber" className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2.5 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono font-bold text-xs">
                        {cert.code}
                      </div>
                      <h4 className="text-sm sm:text-base font-display font-bold text-white">
                        {cert.title}
                      </h4>
                    </div>

                    <Badge variant="amber" size="sm">
                      {cert.scope}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mt-2 sm:mt-3">
                    {cert.description}
                  </p>

                  <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>Applied across industrial manufacturing & ERP tracking</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* AI & Future Readiness Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassCard glowColor="indigo" className="p-5 sm:p-6 bg-gradient-to-br from-indigo-950/30 to-purple-950/20 border-indigo-500/30">
                <div className="flex items-center gap-2 text-indigo-300 mb-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Continuous Engineering Evolution</span>
                </div>
                <h4 className="text-sm sm:text-base font-display font-bold text-white mb-1 sm:mb-2">
                  Advanced AI Agentic Workflows & Web Scaling
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Continuously mastering new-generation AI development tools, automated agent workflows, and modern cloud deployment pipelines across Vercel and Render.
                </p>
              </GlassCard>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
