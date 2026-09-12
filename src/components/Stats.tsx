import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Building2, Code2, ShieldCheck } from 'lucide-react';
import { StatItem } from '../types';
import { GlassCard } from './UI/GlassCard';

interface StatsProps {
  stats: StatItem[];
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />,
    Building2: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
    Code2: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
  };

  const glowColors: ('cyan' | 'indigo' | 'emerald' | 'amber')[] = [
    'cyan',
    'indigo',
    'indigo',
    'emerald',
  ];

  return (
    <section className="relative -mt-6 sm:-mt-10 mb-16 sm:mb-20 z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, index) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard
                  glowColor={glowColors[index % glowColors.length]}
                  className="p-4 sm:p-6 h-full flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                      {iconMap[stat.icon] || <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Verified
                    </span>
                  </div>

                  <div>
                    <div className="text-2xl xs:text-3xl sm:text-4xl font-display font-black text-white mb-1 flex items-baseline gap-1 flex-wrap">
                      {stat.prefix && <span className="text-cyan-400">{stat.prefix}</span>}
                      <span>{stat.value}</span>
                      {stat.suffix && <span className="text-emerald-400 text-xs sm:text-lg">{stat.suffix}</span>}
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-normal">
                      {stat.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
