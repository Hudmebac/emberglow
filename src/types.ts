export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  teaser: string[];
  buyLinks: {
    platform: string;
    url: string;
  }[];
  isGuidebook?: boolean;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  category: 'main' | 'cosmic' | 'supporting';
}

export interface LoreEntry {
  id: string;
  title: string;
  description: string;
  category: 'origins' | 'guardians' | 'realms' | 'themes';
}

export interface Gallery {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
}

export interface Chapter {
  id: number;
  title: string;
  content: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  thumbnail: string;
  audioUrl?: string;
  description: string;
  lyrics?: string;
  category?: 'official' | 'new';
}
