import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Menu, 
  X, 
  Phone, 
  Sparkles,
  ChevronRight,
  MessageSquare,
  Globe
} from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-2.5 sm:py-3.5 shadow-2xl shadow-black/40'
            : 'bg-dark-900/60 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-neon-cyan group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-xs sm:text-base text-gradient-cyan">SU</span>
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-display font-bold text-sm sm:text-lg text-white group-hover:text-cyan-400 transition-colors truncate">
                  {profile.name}
                </span>
                <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
                  {profile.degree}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 hidden xs:block truncate">
                MERN • TypeScript • Prisma • AI
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-dark-800/80 border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Call Button (Tablet & Desktop) */}
            <a
              href={`tel:${profile.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-800/80 hover:bg-dark-700 border border-white/10 text-slate-200 hover:text-cyan-400 text-xs font-mono transition-colors"
              title="Call directly"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profile.phone}</span>
            </a>

            {/* Resume Trigger Modal */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenResume}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-neon-cyan hover:shadow-neon-indigo transition-all cursor-pointer shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View CV</span>
              <Sparkles className="w-3 h-3 text-cyan-200 animate-pulse hidden xs:inline" />
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-dark-800/90 border border-white/10 text-slate-300 hover:text-white focus:outline-none min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-dark-950/80 backdrop-blur-xl lg:hidden flex flex-col pt-16"
          >
            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0 -z-10" 
              onClick={() => setMobileMenuOpen(false)} 
            />

            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl bg-dark-800/70 active:bg-dark-700 border border-white/5 text-left text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 text-dark-900 font-bold text-sm shadow-neon-emerald"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageSquare className="w-4 h-4 fill-dark-900" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-800 border border-cyan-500/30 text-cyan-300 text-sm font-mono"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call: {profile.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm shadow-neon-cyan"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full CV & Credentials</span>
                </button>
              </div>

              {/* Contact Information in Mobile Menu */}
              <div className="p-4 rounded-xl bg-dark-900/80 border border-white/5 text-xs text-slate-400 space-y-1.5 font-mono">
                <p className="text-slate-300 font-semibold">{profile.name} ({profile.degree})</p>
                <p className="truncate">{profile.email}</p>
                <p>{profile.locationShort}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
