export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'twitter' | 'mail' | 'globe' | 'discord' | 'file-text';
  username?: string;
  isPrimary?: boolean;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1 to 100
  category: 'frontend' | 'backend' | 'cloud' | 'database' | 'tools' | 'architecture';
  yearsOfExp: number;
  highlight?: boolean;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullCaseStudy?: {
    overview: string;
    challenges: string[];
    solutions: string[];
    architecture: string;
    metrics: string[];
  };
  category: 'Full Stack' | 'AI & Cloud' | 'Frontend' | 'Distributed Systems' | 'Mobile & Web';
  featured: boolean;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  status: 'Completed' | 'In Production' | 'Active Maintenance' | 'Open Source';
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Lead' | 'Remote';
  current?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
  honors?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  relationship: string;
  linkedinUrl?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bioSummary: string;
  fullBio: string[];
  location: string;
  email: string;
  availableForHire: boolean;
  availabilityNote: string;
  yearsOfExperience: number;
  avatarUrl: string;
  resumeUrl?: string;
  metrics: MetricItem[];
  principles: { title: string; desc: string; icon: string }[];
  socialLinks: SocialLink[];
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  testimonials: Testimonial[];
}
