// ===================================
// TYPE DEFINITIONS - RISHABH JAIN PORTFOLIO
// ===================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
  category: 'fullstack' | 'ml' | 'ai';
  metrics?: Metric[];
  featured?: boolean;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  projects: string[];
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 1-100
  icon?: string;
  yearsOfExperience?: number;
  projectsUsed?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  cgpa?: string;
  location: string;
  coursework: string[];
  achievements?: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  date: string;
  abstract: string;
  techStack: string[];
  publicationLink?: string;
  githubLink?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialLink?: string;
  credentialId?: string;
}

export type Theme = 'light' | 'dark';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter' | 'instagram';
  url: string;
  label: string;
}

export interface NavigationItem {
  name: string;
  path: string;
  label: string;
}

export interface FilterOptions {
  category?: string;
  search?: string;
  technology?: string;
}

export interface AnimationProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface TypewriterProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  animated?: boolean;
  gradient?: boolean;
}

export interface ProjectCardProps {
  project: Project;
  animated?: boolean;
  lazy?: boolean;
}

export interface SkillCardProps {
  skill: Skill;
  animated?: boolean;
  showProgress?: boolean;
  showProjects?: boolean;
}

export interface TimelineItemProps {
  experience: Experience;
  index: number;
  animated?: boolean;
  alternate?: boolean;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  isLoading?: boolean;
  success?: boolean;
  error?: string;
}

export interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export interface FooterProps {
  socialLinks?: SocialLink[];
  currentYear?: number;
}

export interface StatsProps {
  items: {
    label: string;
    value: string;
    suffix?: string;
  }[];
  animated?: boolean;
}

export interface HeroSectionProps {
  name: string;
  roles: string[];
  description: string;
  ctaButtons: {
    primary: {
      text: string;
      onClick: () => void;
    };
    secondary?: {
      text: string;
      onClick: () => void;
    };
  };
}

export interface QuickStatsProps {
  projects: number;
  experience: string;
  technologies: number;
  animated?: boolean;
}

export interface FeaturedSkillsProps {
  skills: Skill[];
  onViewAll?: () => void;
  animated?: boolean;
}

export interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  socialLinks?: SocialLink[];
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// API Response Types (for future use)
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Analytics Types (for future use)
export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: number;
}

export interface PageView {
  path: string;
  title: string;
  timestamp: number;
  referrer?: string;
}

// SEO Types
export interface MetaTags {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'portfolio';
}

export interface OpenGraphTags extends MetaTags {
  siteName: string;
  locale?: string;
}

export interface TwitterCardTags {
  card: 'summary' | 'summary_large_image';
  site?: string;
  creator?: string;
}

// Loading States
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface LoadingStateProps {
  state: LoadingState;
  children?: React.ReactNode;
  fallback?: React.ReactNode;
  error?: React.ReactNode;
}

// Theme Context Types
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Responsive Breakpoint Types
export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

export interface ResponsiveValue<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
}

// Animation Variants
export type AnimationVariant = 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInBottom' | 'scaleUp';

export interface AnimationConfig {
  variant: AnimationVariant;
  duration?: number;
  delay?: number;
  easing?: string;
}

// All types are already exported above with their declarations
