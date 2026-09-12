import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'indigo' | 'emerald' | 'amber' | 'none';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'none',
  hoverEffect = true,
  onClick,
}) => {
  const glowStyles = {
    cyan: 'hover:border-cyan-500/40 hover:shadow-neon-cyan',
    indigo: 'hover:border-indigo-500/40 hover:shadow-neon-indigo',
    emerald: 'hover:border-emerald-500/40 hover:shadow-neon-emerald',
    amber: 'hover:border-amber-500/40 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.45)]',
    none: 'hover:border-white/20',
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25 } } : undefined}
      className={`
        relative rounded-2xl bg-dark-800/70 backdrop-blur-xl 
        border border-white/[0.08] 
        transition-all duration-300
        ${hoverEffect ? 'hover:bg-dark-700/80 cursor-default' : ''}
        ${glowStyles[glowColor]}
        ${className}
      `}
    >
      {/* Subtle top reflection line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
};
