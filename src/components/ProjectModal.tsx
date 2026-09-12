import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Globe,
  KeyRound,
  Copy,
  Check
} from 'lucide-react';
import { ProjectItem } from '../types';
import { Badge } from './UI/Badge';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onCopyText?: (text: string, label: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onCopyText }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!project) return null;

  const handleCopy = (text: string, label: string, keyId: string) => {
    if (onCopyText) {
      onCopyText(text, label);
    } else {
      navigator.clipboard.writeText(text);
    }
    setCopiedKey(keyId);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-900/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-dark-800 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8 text-slate-100 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-dark-900/80 shrink-0">
            <div className="flex items-center gap-2">
              <Badge variant={project.badgeColor as any} size="sm">
                {project.category}
              </Badge>
              <span className="text-xs font-mono text-slate-400 hidden xs:inline">Project Overview</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto">
            {/* Title & Tagline */}
            <div>
              <h3 className="text-xl sm:text-3xl font-display font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-cyan-400">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Demo Credentials Box */}
            {project.credentials && (
              <div className="p-3 sm:p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                  <KeyRound className="w-4 h-4 text-cyan-400" />
                  <span>Demo Access Credentials</span>
                </div>

                {project.credentials.adminId && (
                  <div className="flex items-center justify-between p-2 rounded-lg bg-dark-900/70 border border-white/5 gap-2">
                    <span className="text-slate-400 text-[11px] sm:text-xs">Admin ID:</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <span className="text-cyan-200 font-bold text-[11px] sm:text-xs truncate">{project.credentials.adminId}</span>
                      <button
                        onClick={() => handleCopy(project.credentials!.adminId!, 'Admin ID', 'modal-admin')}
                        className="px-2 py-1 rounded bg-white/10 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-[10px] sm:text-[11px] flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        {copiedKey === 'modal-admin' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>Copy</span>
                      </button>
                    </div>
                  </div>
                )}

                {project.credentials.username && (
                  <div className="flex items-center justify-between p-2 rounded-lg bg-dark-900/70 border border-white/5 gap-2">
                    <span className="text-slate-400 text-[11px] sm:text-xs">Username:</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <span className="text-cyan-200 font-bold text-[11px] sm:text-xs truncate">{project.credentials.username}</span>
                      <button
                        onClick={() => handleCopy(project.credentials!.username!, 'Username', 'modal-user')}
                        className="px-2 py-1 rounded bg-white/10 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-[10px] sm:text-[11px] flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        {copiedKey === 'modal-user' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>Copy</span>
                      </button>
                    </div>
                  </div>
                )}

                {project.credentials.password && (
                  <div className="flex items-center justify-between p-2 rounded-lg bg-dark-900/70 border border-white/5 gap-2">
                    <span className="text-slate-400 text-[11px] sm:text-xs">Password:</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <span className="text-amber-300 font-bold text-[11px] sm:text-xs truncate">{project.credentials.password}</span>
                      <button
                        onClick={() => handleCopy(project.credentials!.password!, 'Password', 'modal-pass')}
                        className="px-2 py-1 rounded bg-white/10 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-[10px] sm:text-[11px] flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        {copiedKey === 'modal-pass' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>Copy</span>
                      </button>
                    </div>
                  </div>
                )}

                {project.credentials.note && (
                  <p className="text-[10px] sm:text-[11px] text-slate-300 mt-1 leading-snug">
                    ℹ️ {project.credentials.note}
                  </p>
                )}
              </div>
            )}

            {/* Architecture Highlights */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">Engineering Highlight</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.highlights}
              </p>
            </div>

            {/* Core Features */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Capabilities & Features</span>
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-dark-700 border border-white/10 text-[11px] font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-neon-cyan transition-all cursor-pointer min-h-[40px]"
              >
                <Globe className="w-4 h-4" />
                <span>Open Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-700 hover:bg-dark-600 border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-mono transition-colors cursor-pointer min-h-[40px]"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
