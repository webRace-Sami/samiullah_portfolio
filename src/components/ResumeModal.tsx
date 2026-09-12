import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award,
  Layers
} from 'lucide-react';
import { 
  ProfileData, 
  SkillCategory, 
  ProjectItem, 
  ExperienceItem, 
  EducationItem, 
  CertificationItem 
} from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  skills: SkillCategory[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
  experiences,
  education,
  certifications,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="resume-modal-container fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop for Screen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-900/90 backdrop-blur-md no-print"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 25 }}
          transition={{ duration: 0.25 }}
          className="resume-sheet relative w-full max-w-4xl bg-dark-800 border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-2 sm:my-4 text-slate-100 max-h-[94vh] flex flex-col print:max-h-none print:my-0 print:border-none print:shadow-none print:rounded-none"
        >
          {/* On-Screen Action Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-white/10 bg-dark-900/95 no-print shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span className="font-display font-bold text-white text-xs sm:text-base truncate">
                Curriculum Vitae — {profile.name} ({profile.degree})
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-dark-900 font-bold text-xs shadow-neon-cyan transition-all cursor-pointer min-h-[36px]"
              >
                <Printer className="w-3.5 h-3.5 fill-dark-900 shrink-0" />
                <span className="hidden xs:inline">Save as PDF / Print</span>
                <span className="xs:hidden">Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                title="Close CV"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Sheet */}
          <div className="overflow-y-auto p-4 sm:p-10 space-y-5 sm:space-y-7 bg-dark-800 text-slate-200 print:bg-white print:text-slate-900 print:overflow-visible print:p-0 print:space-y-5">
            
            {/* CV Header: Rendered ONCE at the top */}
            <div className="resume-header border-b border-white/10 pb-4 sm:pb-5 print:border-sky-700 print:border-b-2 print:pb-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                <div>
                  <h1 className="text-2xl sm:text-4xl font-display font-black text-white print:text-slate-950 tracking-tight">
                    {profile.name}
                  </h1>
                  <p className="text-xs sm:text-base font-mono text-cyan-400 print:text-sky-700 font-bold mt-1">
                    Full-Stack Web Developer & Control Management Specialist
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 print:text-slate-600 mt-0.5">
                    MERN Stack • TypeScript • Prisma ORM • Vite • SCM, Finance & Quality Audits
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono text-slate-300 print:text-slate-800 text-left sm:text-right shrink-0">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-sky-700 shrink-0" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-sky-700 shrink-0" />
                    <span className="truncate max-w-[200px] xs:max-w-none">{profile.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-sky-700 shrink-0" />
                    <span className="truncate max-w-[240px] sm:max-w-[280px]" title={profile.address}>{profile.address}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-purple-400 print:text-sky-700 shrink-0" />
                    <a href={profile.portfolioUrl} target="_blank" rel="noreferrer" className="text-cyan-400 print:text-sky-700 underline truncate max-w-[200px] xs:max-w-none">
                      {profile.portfolioUrl}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="resume-section space-y-1.5 sm:space-y-2">
              <h2 className="text-xs sm:text-sm font-mono text-cyan-400 print:text-sky-800 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 print:border-slate-300 pb-1">
                <Code2 className="w-4 h-4 print:text-sky-700 shrink-0" />
                <span>Executive Profile</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* Control Management & Core Disciplines */}
            <div className="resume-section space-y-1.5 sm:space-y-2">
              <h2 className="text-xs sm:text-sm font-mono text-cyan-400 print:text-sky-800 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 print:border-slate-300 pb-1">
                <Layers className="w-4 h-4 print:text-sky-700 shrink-0" />
                <span>Control Management & Corporate Governance</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs">
                {profile.managementExpertise.map((item) => (
                  <div key={item.domain} className="p-2 sm:p-2.5 rounded-lg bg-white/5 print:bg-slate-100 border border-white/5 print:border-slate-300">
                    <div className="font-bold text-cyan-300 print:text-slate-900 mb-0.5">{item.domain}</div>
                    <div className="text-slate-300 print:text-slate-700 text-[11px] leading-relaxed">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical & Software Skills */}
            <div className="resume-section space-y-2 sm:space-y-2.5">
              <h2 className="text-xs sm:text-sm font-mono text-cyan-400 print:text-sky-800 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 print:border-slate-300 pb-1">
                <Code2 className="w-4 h-4 print:text-sky-700 shrink-0" />
                <span>Technical & Software Skills Matrix</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs">
                <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 print:bg-slate-50 border border-white/5 print:border-slate-300">
                  <div className="font-bold text-cyan-300 print:text-sky-800 mb-0.5">Web Engineering & Languages</div>
                  <div className="text-slate-300 print:text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                    MERN Stack, TypeScript, JavaScript (ES6+), React.js, Vite, Node.js, Express.js, Python (Django), HTML5, CSS3, Tailwind CSS
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 print:bg-slate-50 border border-white/5 print:border-slate-300">
                  <div className="font-bold text-indigo-300 print:text-sky-800 mb-0.5">Databases & Prisma ORM</div>
                  <div className="text-slate-300 print:text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                    Prisma ORM, MongoDB, Mongoose, SQL, PostgreSQL, SQLite, Database Architecture & Schema Relations
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 print:bg-slate-50 border border-white/5 print:border-slate-300">
                  <div className="font-bold text-emerald-300 print:text-sky-800 mb-0.5">Enterprise ERP & Office Tools</div>
                  <div className="text-slate-300 print:text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                    Microsoft Dynamics 365 (D365 ERP), MS Excel (Advanced Reporting, Formulas, Macros), MS Word (Audit Format), MS PowerPoint
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 print:bg-slate-50 border border-white/5 print:border-slate-300">
                  <div className="font-bold text-amber-300 print:text-sky-800 mb-0.5">Data Analysis & ISO Standards</div>
                  <div className="text-slate-300 print:text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                    Power BI (ETL & Dashboards), ISO-19011 (Auditing), ISO 9001 (QMS), ISO 2859-1 (AQL Sampling)
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="resume-section space-y-2 sm:space-y-3">
              <h2 className="text-xs sm:text-sm font-mono text-cyan-400 print:text-sky-800 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 print:border-slate-300 pb-1">
                <Briefcase className="w-4 h-4 print:text-sky-700 shrink-0" />
                <span>Enterprise Career Experience</span>
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1 sm:space-y-1.5 border-l-2 border-cyan-500/40 print:border-sky-600 pl-3 sm:pl-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <span className="font-bold text-white print:text-slate-900 text-xs sm:text-sm">{exp.role}</span>
                        <span className="text-xs text-cyan-400 print:text-sky-700 font-semibold ml-0 sm:ml-2 block sm:inline">
                          — {exp.company} ({exp.location})
                        </span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-mono text-slate-400 print:text-slate-600 shrink-0">{exp.tenure}</span>
                    </div>

                    <p className="text-[11px] text-slate-400 print:text-slate-600 italic leading-snug">
                      {exp.companyOverview}
                    </p>

                    <ul className="space-y-1 text-xs text-slate-300 print:text-slate-800">
                      {exp.duties.map((duty, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 print:bg-sky-700 mt-1.5 shrink-0" />
                          <span>
                            <strong className="text-slate-100 print:text-slate-900">{duty.title}:</strong> {duty.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="resume-section space-y-2">
              <h2 className="text-xs sm:text-sm font-mono text-cyan-400 print:text-sky-800 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 print:border-slate-300 pb-1">
                <GraduationCap className="w-4 h-4 print:text-sky-700 shrink-0" />
                <span>Education & Academic Credentials</span>
              </h2>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs">
                    <div>
                      <div className="font-bold text-white print:text-slate-900 text-xs sm:text-sm">
                        {edu.degree}
                        <span className="ml-2 px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/20 text-emerald-300 print:bg-emerald-100 print:text-emerald-800 border border-emerald-500/30">
                          {edu.status}
                        </span>
                      </div>
                      <div className="text-slate-400 print:text-slate-600">{edu.institution} — {edu.boardOrUni}</div>
                      <div className="text-slate-300 print:text-slate-700 text-[11px] mt-0.5">{edu.description}</div>
                    </div>
                    <div className="font-mono text-cyan-400 print:text-slate-700 text-left sm:text-right shrink-0">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects & Live URLs */}
            <div className="resume-section space-y-2">
              <h2 className="text-xs sm:text-sm font-mono text-cyan-400 print:text-sky-800 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 print:border-slate-300 pb-1">
                <Globe className="w-4 h-4 print:text-sky-700 shrink-0" />
                <span>Live Project Deployments & Test Credentials</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {projects.map((p) => (
                  <div key={p.id} className="p-2 rounded-lg bg-white/5 print:bg-slate-50 border border-white/5 print:border-slate-300">
                    <div className="font-bold text-white print:text-slate-900">{p.title}</div>
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-cyan-400 print:text-sky-700 underline truncate block text-[11px] mt-0.5">
                      {p.liveUrl}
                    </a>
                    {p.credentials && (
                      <div className="text-[10px] font-mono text-amber-300 print:text-slate-700 mt-1">
                        {p.credentials.adminId && `Admin: ${p.credentials.adminId} | Pass: ${p.credentials.password}`}
                        {p.credentials.username && `User: ${p.credentials.username} | Pass: ${p.credentials.password}`}
                        {p.credentials.note && !p.credentials.adminId && !p.credentials.username && p.credentials.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ISO Standards */}
            <div className="resume-section space-y-2">
              <h2 className="text-xs sm:text-sm font-mono text-cyan-400 print:text-sky-800 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 print:border-slate-300 pb-1">
                <Award className="w-4 h-4 print:text-sky-700 shrink-0" />
                <span>ISO Auditing & Quality Frameworks</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {certifications.map((cert) => (
                  <div key={cert.code} className="p-2 rounded-lg bg-white/5 print:bg-slate-50 border border-white/5 print:border-slate-300">
                    <div className="font-bold text-amber-300 print:text-slate-900">{cert.code}</div>
                    <div className="text-slate-300 print:text-slate-700 text-[11px]">{cert.title}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
