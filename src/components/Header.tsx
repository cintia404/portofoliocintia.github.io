import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Crown } from 'lucide-react';
import { AestheticTheme } from '../types';

interface HeaderProps {
  theme: AestheticTheme;
  setTheme: (theme: AestheticTheme) => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
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
      <div
        className="flex items-center justify-between py-3 px-6 rounded-full transition-all duration-500"
        style={{
          background: theme === 'coquette'
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 243, 245, 0.35) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(243, 244, 246, 0.45) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: theme === 'coquette' 
            ? '1px solid rgba(255, 255, 255, 0.6)' 
            : '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: theme === 'coquette'
            ? '0 8px 32px 0 rgba(255, 182, 193, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
            : '0 12px 36px 0 rgba(190, 190, 200, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
        }}
      >
        {/* Branding Brand Logo with Serifs */}
        <div
          id="brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 cursor-pointer group"
        >
          <span className="font-serif text-2xl md:text-3xl font-bold text-pink-900/90 tracking-tight transition-all duration-300 group-hover:text-pink-600">
            cintiani
          </span>
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            {/* Pulsing pearl dot indicator */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-pink-300 via-pink-200 to-white shadow-sm border border-pink-100"></span>
          </span>
        </div>

        {/* Floating glassmorphic navigation links */}
        <nav id="floating-navbar" className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <button
            id="nav-link-about"
            onClick={() => scrollToSection('about')}
            className="text-pink-900/80 hover:text-pink-600 transition-colors duration-300 cursor-pointer flex items-center gap-1"
          >
            <span>About</span>
          </button>

          {/* Pearl separator */}
          <span className="w-1.5 h-1.5 rounded-full bg-pink-300/40 shadow-inner" />

          <button
            id="nav-link-playground"
            onClick={() => scrollToSection('playground')}
            className="text-pink-900/80 hover:text-pink-600 transition-colors duration-300 cursor-pointer flex items-center gap-1"
          >
            <span>Playground</span>
          </button>

          {/* Pearl separator */}
          <span className="w-1.5 h-1.5 rounded-full bg-pink-300/40 shadow-inner" />

          <button
            id="nav-link-contact"
            onClick={() => scrollToSection('contact')}
            className="text-pink-900/80 hover:text-pink-600 transition-colors duration-300 cursor-pointer flex items-center gap-1"
          >
            <span>Contact</span>
          </button>
        </nav>

        {/* Theme Selector & Actions */}
        <div id="header-theme-switcher" className="flex items-center gap-3">
          <div className="flex items-center bg-pink-100/30 p-1 rounded-full border border-pink-200/40 backdrop-blur-md">
            {/* Coquette theme option button */}
            <button
              id="switch-theme-coquette"
              onClick={() => setTheme('coquette')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                theme === 'coquette'
                  ? 'bg-gradient-to-r from-pink-300 to-pink-200 text-pink-950 shadow-sm border border-pink-200/50'
                  : 'text-pink-900/60 hover:text-pink-900'
              }`}
              title="Classic Coquette Design Varian"
            >
              <Palette className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Coquette</span>
            </button>
            {/* Premium theme option button */}
            <button
              id="switch-theme-premium"
              onClick={() => setTheme('premium')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                theme === 'premium'
                  ? 'bg-gradient-to-r from-stone-200 via-rose-100 to-stone-100 text-stone-900 shadow-sm border border-white/60'
                  : 'text-pink-900/60 hover:text-pink-900'
              }`}
              title="Premium Pearl Design Varian"
            >
              <Crown className="w-3.5 h-3.5 text-pink-400" />
              <span className="hidden md:inline">Premium</span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
