import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'indigo' | 'emerald' | 'amber' | 'neutral' | 'purple';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className = '',
}) => {
  const styles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25',
    indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
    neutral: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full border ${styles} ${sizeStyles} ${className} transition-colors`}
    >
      {children}
    </span>
  );
};
