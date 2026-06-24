export type ProjectCategory = 'All' | 'IT & Tech' | 'Public Speaking' | 'Creative';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  role: string;
  date: string;
  client?: string;
  link?: string;
  github?: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  url: string;
  duration: string;
}

export type AestheticTheme = 'coquette' | 'premium';
