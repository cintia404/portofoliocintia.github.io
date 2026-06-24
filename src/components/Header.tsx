import React from 'react';
import { motion } from 'motion/react';

export const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      id="main-app-header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-4 z-40 w-full max-w-6xl mx-auto px-4 md:px-6"
    >
      <div className="flex items-center justify-between py-3 px-6 rounded-full bg-white/45 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(255,182,193,0.2)]">
        {/* Branding Logo */}
        <div
          id="brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 cursor-pointer group"
        >
          <span className="font-serif text-2xl md:text-3xl font-bold text-pink-900/90 tracking-tight transition-all duration-300 group-hover:text-pink-600">
            cintiani
          </span>
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-pink-300 via-pink-200 to-white border border-pink-100"></span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav id="floating-navbar" className="flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => scrollToSection('about')}
            className="text-pink-900/80 hover:text-pink-600 transition-colors duration-300 cursor-pointer"
          >
            About
          </button>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-300/40" />
          <button
            onClick={() => scrollToSection('playground')}
            className="text-pink-900/80 hover:text-pink-600 transition-colors duration-300 cursor-pointer"
          >
            Playground
          </button>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-300/40" />
          <button
            onClick={() => scrollToSection('contact')}
            className="text-pink-900/80 hover:text-pink-600 transition-colors duration-300 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </div>
    </motion.header>
  );
};