
export type Section = 'home' | 'portfolio' | 'about' | 'resume' | 'contact';

export interface Project {
  title: string;
  tags: string[];
  description: string;
  image: string;
  link?: string;
}

export interface Experience {
  year: string;
  title: string;
  source: string;
  description: string;
  sourceLink?: string;
}

export interface Education {
  year: string;
  title: string;
  institution: string;
  description: string;
  link: string;
}

export interface Tool {
  name: string;
  icon: string;
}
