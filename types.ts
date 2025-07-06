export interface Link {
  name: 'Website' | 'Google Scholar' | 'ORCID' | 'GitHub' | 'LinkedIn' | 'Facebook' | 'Twitter' | 'CV';
  url: string;
  icon: 'globe' | 'scholar' | 'orcid' | 'github' | 'linkedin' | 'facebook' | 'twitter' | 'cv';
}

export interface ContactInfo {
  name: string;
  title: string;
  address: string;
  phone: string;
  emails: string[];
  links: Link[];
}

export interface Education {
  degree: string;
  university: string;
  location: string;
  dates: string;
}

export interface Experience {
  title: string;
  organization: string;
  location: string;
  dates: string;
  description: string[];
}

export interface Award {
  title: string;
  organization: string;
  year: string | number;
}

export interface Publication {
  authors: string;
  year: number | string;
  title: string;
  journal: string;
  link?: string;
  status?: string;
  featured?: boolean;
  description?: string;
}

export interface Course {
  authors: string;
  year: number;
  title:string;
  organization: string;
  description: string;
  link: string;
}

export interface Report {
  authors: string;
  year: number;
  title: string;
  organization: string;
  link: string;
}

export interface ConferenceItem {
  text: string;
  link?: string;
}

export interface NewsItem {
  authors: string;
  year: number | string;
  title: string;
  publication: string;
  link: string;
}

export interface NewsCoverageItem {
  title: string;
  year: number;
  source: string;
  link: string;
  type?: 'Television' | 'EDITORIAL';
}

export interface Talk {
  title: string;
  date: string;
  event: string;
  link: string;
  role?: string;
}

export interface Teaching {
  title: string;
  university: string;
  term: string;
}

export interface ServiceItem {
  role: string;
  organization: string;
  dates: string;
}

export interface ReviewerInfo {
  journal: string;
  dates: string;
}

export type TimelineItem = (Education & { type: 'education' }) | (Experience & { type: 'experience' });

export interface Highlight {
  date: string;
  description: string;
}

export interface Book {
  title: string;
  author: string;
}