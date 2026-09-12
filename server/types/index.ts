export interface ProfileData {
  name: string;
  degree: string;
  title: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: string;
  locationShort: string;
  portfolioUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  whatsappUrl: string;
  bio: string;
  specialization: string[];
  aiFocus: string;
  managementExpertise: {
    domain: string;
    description: string;
  }[];
}

export interface StatItem {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  level: number;
  badge: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectCredentials {
  username?: string;
  password?: string;
  adminId?: string;
  note?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Enterprise' | 'Web Apps' | 'Interactive';
  description: string;
  liveUrl: string;
  githubUrl?: string;
  technologies: string[];
  features: string[];
  highlights: string;
  badgeColor: string;
  credentials?: ProjectCredentials;
}

export interface DutyItem {
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  tenure: string;
  type: string;
  companyOverview: string;
  duties: DutyItem[];
  technologies: string[];
  learnings: string[];
  badge: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  boardOrUni: string;
  description: string;
  status: 'Completed' | 'In Progress';
}

export interface CertificationItem {
  code: string;
  title: string;
  description: string;
  scope: string;
}
