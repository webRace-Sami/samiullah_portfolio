import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  gradientWord?: string;
  subtitle: string;
  align?: 'left' | 'center';
  gradientType?: 'cyan' | 'purple' | 'emerald' | 'gold';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  gradientWord,
  subtitle,
  align = 'center',
  gradientType = 'cyan',
}) => {
  const gradientClass = {
    cyan: 'text-gradient-cyan',
    purple: 'text-gradient-purple',
    emerald: 'text-gradient-emerald',
    gold: 'text-gradient-gold',
  }[gradientType];

  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {badge}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4"
      >
        {title}{' '}
        {gradientWord && <span className={gradientClass}>{gradientWord}</span>}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base md:text-lg text-slate-400 leading-relaxed font-normal"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};
