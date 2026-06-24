import { CustomCursor } from './components/CustomCursor';
import { useState } from 'react';
import { BackgroundElements } from './components/BackgroundElements';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Playground } from './components/Playground';
import { MusicPlayer } from './components/MusicPlayer';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AestheticTheme } from './types';

export default function App() {
  const [theme] = useState<AestheticTheme>('coquette');

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans select-none pb-12">
      {/* Efek custom cursor melacak gerakan mouse */}
      <CustomCursor />

      {/* 1. Immersive Interactive Background Layer (White Silk + Pearls + Bows) */}
      <BackgroundElements />

      {/* 2. Floating Glassmorphic Header Navigation (Sudah bersih tanpa tombol premium) */}
      <Header />

      {/* Main Body Layout wrapped in smooth fade-in container */}
      <main className="relative w-full max-w-7xl mx-auto px-4 md:px-6 space-y-12 md:space-y-20 pt-6">
        {/* 3. Hero Section (Greeting, Center Ribbon, Typing Effect Subtitle) */}
        <Hero />

        {/* 4. About Me Section (Double Scalloped Lace Frame & Social Pearls) */}
        <AboutMe />

        {/* 5. My Playground Section (Filterable Masonry Bento Grid + Case Studies) */}
        <Playground theme={theme} />

        {/* 6. Contact Form Section (Love Letter Sealing Form + Sandbox Inbox) */}
        <ContactForm theme={theme} />
      </main>

      {/* 7. Active Music Widget Player (Bisa digeser/draggable) */}
      <MusicPlayer />

      {/* 8. Translucent Footer & Scroll Up Pearl button */}
      <Footer theme={theme} />
    </div>
  );
}