import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Globe, 
  ArrowUpRight,
  Zap
} from 'lucide-react';
import { ProfileData } from '../types';
import { GlassCard } from './UI/GlassCard';
import { SectionHeading } from './UI/SectionHeading';
import { Badge } from './UI/Badge';

interface ContactProps {
  profile: ProfileData;
  onCopyText: (text: string, label: string) => void;
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ profile, onCopyText, onOpenResume }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    onCopyText(profile.phone, "Phone number");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    onCopyText(profile.email, "Email address");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-dark-900/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-emerald-600/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Reach Out"
          title="Let's Build Something"
          gradientWord="Extraordinary Together"
          subtitle="Direct channels for project inquiries, full-stack web contracts, and technical consultations. Fast response guaranteed via phone, WhatsApp, or email."
          gradientType="cyan"
        />

        {/* Action Grid (Responsive: 1 col on mobile, 2 col on tablet, 3 col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-12">
          
          {/* Card 1: Phone & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard glowColor="emerald" className="p-5 sm:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <Badge variant="emerald" size="sm">
                    Instant Response
                  </Badge>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-white mb-1">
                  Mobile & WhatsApp
                </h3>
                <p className="text-xs text-slate-400 mb-3 sm:mb-4">
                  Direct voice call or quick chat via WhatsApp messenger.
                </p>

                <div className="p-3 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between font-mono text-xs sm:text-sm text-emerald-300 mb-5">
                  <span className="truncate">{profile.phone}</span>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3.5 sm:pt-4 border-t border-white/5">
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-dark-700 hover:bg-dark-600 border border-white/10 text-slate-200 hover:text-white text-xs font-mono font-medium transition-colors min-h-[42px] cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Direct</span>
                </a>

                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-900 text-xs font-bold shadow-neon-emerald transition-all min-h-[42px] cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-dark-900" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard glowColor="cyan" className="p-5 sm:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </div>
                  <Badge variant="cyan" size="sm">
                    Inquiries & Proposals
                  </Badge>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-white mb-1">
                  Electronic Mail
                </h3>
                <p className="text-xs text-slate-400 mb-3 sm:mb-4">
                  Send technical specs, project briefs, or job opportunities.
                </p>

                <div className="p-3 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between font-mono text-xs text-cyan-300 mb-5">
                  <span className="truncate mr-2" title={profile.email}>{profile.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-white/5">
                <a
                  href={`mailto:${profile.email}?subject=Project%20Inquiry%20for%20Sami%20Ullah`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-neon-cyan transition-all min-h-[42px] cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3: Location & Verification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <GlassCard glowColor="indigo" className="p-5 sm:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                  </div>
                  <Badge variant="indigo" size="sm">
                    Punjab, Pakistan
                  </Badge>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-white mb-1">
                  Location & Postal Address
                </h3>
                <p className="text-xs text-slate-400 mb-3 sm:mb-4">
                  Available for local contracts, on-site audits, and remote engineering worldwide.
                </p>

                <div className="p-3 rounded-xl bg-dark-900/60 border border-white/5 text-xs text-slate-300 leading-relaxed mb-5 font-mono">
                  {profile.address}
                </div>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={profile.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Existing Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={onOpenResume}
                  className="text-xs font-mono text-indigo-300 hover:text-white transition-colors cursor-pointer py-1"
                >
                  Full CV →
                </button>
              </div>
            </GlassCard>
          </motion.div>

        </div>

        {/* Interactive Banner: Ready to collaborate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-gradient-to-r from-cyan-950/50 via-dark-800 to-indigo-950/50 border border-cyan-500/30 p-6 sm:p-10 overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-2 sm:mb-3">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Latency Communication</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-display font-bold text-white mb-2">
                Looking for a MERN & TypeScript Developer?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
                Whether you need a new scalable web app with Prisma ORM and Vite, an AI-accelerated fast build, or enterprise operational data audit workflows, I'm ready to contribute.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-900 font-bold text-xs sm:text-sm shadow-neon-emerald transition-all min-h-[44px] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-dark-900" />
                <span>WhatsApp: {profile.phone}</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-full xs:w-auto flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-dark-700 hover:bg-dark-600 border border-white/10 text-white font-medium text-xs sm:text-sm transition-colors min-h-[44px] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Send Quick Email</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
