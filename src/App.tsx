import { useState, useEffect } from 'react';
import { 
  initialProfile, 
  initialStats, 
  initialSkills, 
  initialProjects, 
  initialExperiences, 
  initialEducation, 
  initialCertifications 
} from './data/portfolioData';
import { ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { GlowCursor } from './components/GlowCursor';
import { Toast } from './components/UI/Toast';
import { MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function App() {
  const [profile, setProfile] = useState(initialProfile);
  const [stats, setStats] = useState(initialStats);
  const [skills, setSkills] = useState(initialSkills);
  const [projects, setProjects] = useState(initialProjects);
  const [experiences, setExperiences] = useState(initialExperiences);
  const [education, setEducation] = useState(initialEducation);
  const [certifications, setCertifications] = useState(initialCertifications);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Optional background fetch from API backend if server is active
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const res = await fetch('/api/all');
        const contentType = res.headers.get('content-type');
        if (res.ok && contentType && contentType.includes('application/json')) {
          const data = await res.json();
          if (data.profile) setProfile(data.profile);
          if (data.stats) setStats(data.stats);
          if (data.skills) setSkills(data.skills);
          if (data.projects) setProjects(data.projects);
          if (data.experiences) setExperiences(data.experiences);
          if (data.education) setEducation(data.education);
          if (data.certificationsAndStandards) setCertifications(data.certificationsAndStandards);
        }
      } catch {
        // Fallback gracefully to bundled client data
      }
    };
    fetchApiData();
  }, []);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Dynamic Background Particles & Glow Spotlight (Hidden on Print) */}
      <div className="no-print">
        <ParticleBackground />
        <GlowCursor />
      </div>

      {/* Top Glass Navbar (Hidden on Print) */}
      <div className="no-print">
        <Navbar
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
      </div>

      {/* Main Content Sections (Entire main hidden when printing CV) */}
      <main className="relative z-10 no-print">
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onCopyText={handleCopyText}
        />

        <Stats stats={stats} />

        <About
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        <Skills skillCategories={skills} />

        <Projects
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
          onCopyText={handleCopyText}
        />

        <Experience experiences={experiences} />

        <Education
          education={education}
          certifications={certifications}
        />

        <Contact
          profile={profile}
          onCopyText={handleCopyText}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
      </main>

      {/* Footer (Hidden on Print) */}
      <div className="no-print">
        <Footer
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
      </div>

      {/* Floating Action Button (FAB) (Hidden on Print) */}
      <div className="fixed bottom-6 left-6 z-30 flex items-center gap-2 no-print">
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          href={profile.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-dark-900 font-bold text-xs shadow-neon-emerald backdrop-blur-md"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-dark-900" />
          <span className="hidden sm:inline">WhatsApp Chat</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          href={`tel:${profile.phone}`}
          className="flex items-center gap-2 p-3 rounded-full bg-dark-800 border border-cyan-500/40 text-cyan-300 shadow-neon-cyan backdrop-blur-md"
          title="Call Sami Ullah"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
        </motion.a>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCopyText={handleCopyText}
      />

      {/* Full Curriculum Vitae Modal (THE ONLY ELEMENT PRINTED) */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
        skills={skills}
        projects={projects}
        experiences={experiences}
        education={education}
        certifications={certifications}
      />

      {/* Floating Interactive Toast Feedback (Hidden on Print) */}
      <div className="no-print">
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </div>
    </div>
  );
}
export default App;
