import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Eye, 
  Globe, 
  ArrowUpRight,
  KeyRound,
  Copy,
  Check
} from 'lucide-react';
import { ProjectItem } from '../types';
import { GlassCard } from './UI/GlassCard';
import { SectionHeading } from './UI/SectionHeading';
import { Badge } from './UI/Badge';

interface ProjectsProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onCopyText?: (text: string, label: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject, onCopyText }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const categories = ['All', 'Full-Stack', 'Enterprise', 'Web Apps', 'Interactive'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Portfolio"
          title="Proven Deployments &"
          gradientWord="Full-Stack Web Applications"
          subtitle="Explore live deployed production applications spanning MERN stack, TypeScript, Prisma ORM, enterprise showroom & inventory tracking, and dynamic e-commerce portals with test credentials."
          gradientType="cyan"
        />

        {/* Category Filters (Responsive Wrap) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 px-1">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-medium font-mono transition-all duration-200 cursor-pointer min-h-[36px] ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-neon-cyan'
                    : 'bg-dark-800/80 hover:bg-dark-700 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <GlassCard
                  glowColor={project.badgeColor as any}
                  className="p-5 sm:p-7 h-full flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Top Row */}
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <Badge variant={project.badgeColor as any} size="sm">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Live Online</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 flex items-center justify-between gap-1">
                      <span className="truncate">{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </h3>

                    <p className="text-xs font-mono text-cyan-400 mb-2.5 sm:mb-3">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-3.5 sm:mb-4 font-normal">
                      {project.description}
                    </p>

                    {/* Optional Demo Credentials Box (Responsive wrap) */}
                    {project.credentials && (
                      <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/25 mb-4 text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-cyan-300 font-semibold mb-1.5">
                          <KeyRound className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>Demo Login Credentials:</span>
                        </div>

                        {project.credentials.adminId && (
                          <div className="flex items-center justify-between text-slate-300 py-0.5 gap-2">
                            <span className="text-slate-400 text-[10px] sm:text-[11px] shrink-0">Admin ID:</span>
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="text-cyan-200 font-semibold truncate text-[11px]">{project.credentials.adminId}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(project.credentials!.adminId!, 'Admin ID', `${project.id}-admin`);
                                }}
                                className="p-1 hover:text-cyan-300 text-slate-400 shrink-0 cursor-pointer"
                                title="Copy Admin ID"
                              >
                                {copiedKey === `${project.id}-admin` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          </div>
                        )}

                        {project.credentials.username && (
                          <div className="flex items-center justify-between text-slate-300 py-0.5 gap-2">
                            <span className="text-slate-400 text-[10px] sm:text-[11px] shrink-0">Username:</span>
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="text-cyan-200 font-semibold truncate text-[11px]">{project.credentials.username}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(project.credentials!.username!, 'Username', `${project.id}-user`);
                                }}
                                className="p-1 hover:text-cyan-300 text-slate-400 shrink-0 cursor-pointer"
                                title="Copy Username"
                              >
                                {copiedKey === `${project.id}-user` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          </div>
                        )}

                        {project.credentials.password && (
                          <div className="flex items-center justify-between text-slate-300 py-0.5 gap-2">
                            <span className="text-slate-400 text-[10px] sm:text-[11px] shrink-0">Password:</span>
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="text-amber-300 font-semibold truncate text-[11px]">{project.credentials.password}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(project.credentials!.password!, 'Password', `${project.id}-pass`);
                                }}
                                className="p-1 hover:text-cyan-300 text-slate-400 shrink-0 cursor-pointer"
                                title="Copy Password"
                              >
                                {copiedKey === `${project.id}-pass` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          </div>
                        )}

                        {project.credentials.note && !project.credentials.adminId && !project.credentials.username && (
                          <div className="text-[10px] sm:text-[11px] text-slate-300 leading-snug mt-0.5">
                            {project.credentials.note}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 sm:px-2 py-0.5 rounded-md bg-white/5 text-[10px] sm:text-[11px] font-mono text-cyan-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA Links */}
                  <div className="pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Deep Dive</span>
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 text-xs font-mono font-medium transition-all cursor-pointer"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Visit App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
