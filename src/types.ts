export type AestheticTheme = 'coquette' | 'premium';

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  challenge: string; // Babak 1: Tantangan
  solution: string;  // Babak 2: Solusi
  impact: string;    // Babak 3: Dampak
  images: string[];  // Menampung banyak gambar untuk slider
  tags: string[];
  role: string;
  date: string;
  client: string;
  links?: {          // Tautan interaktif tombol aksi
    live?: string;
    figma?: string;
    github?: string;
  };
}