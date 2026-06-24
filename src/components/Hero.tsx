import React from 'react';
import { motion } from 'motion/react';
import { RibbonBow } from './RibbonBow';
import { Sparkles } from 'lucide-react';
import { AestheticTheme } from '../types';

interface HeroProps {
  theme: AestheticTheme;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section
      id="hero-section"
      className="relative flex flex-col items-center justify-center pt-8 pb-12 px-4 text-center max-w-4xl mx-auto z-10 overflow-visible"
    >
      {/* Decorative centerpiece big pink bow (matching original design layout) */}
      <motion.div
        id="hero-center-bow"
        initial={{ scale: 0.2, rotate: -45, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.3 }}
        className="mb-6 relative z-20 cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <RibbonBow size={theme === 'coquette' ? 140 : 160} glow={theme === 'premium'} />
        {/* Glowing pearl accent at the center bow's feet */}
        <motion.div
          id="center-bow-pearl-glow"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-radial-to-br from-white via-pink-100 to-pink-300 shadow-[0_0_8px_rgba(255,182,193,0.8)] border border-pink-100"
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Floating Sparkly Star Accents left & right */}
      <div id="hero-floating-sparkles" className="absolute top-1/4 left-10 md:left-20 pointer-events-none hidden sm:block">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-5 h-5 text-pink-300 fill-pink-100 opacity-60" />
        </motion.div>
      </div>
      <div id="hero-floating-sparkles-right" className="absolute top-1/3 right-10 md:right-20 pointer-events-none hidden sm:block">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Sparkles className="w-6 h-6 text-pink-300 fill-pink-100 opacity-60 filter drop-shadow-[0_0_4px_rgba(255,182,193,0.5)]" />
        </motion.div>
      </div>

      {/* Hero Name - "Cintiani Nuraeni" */}
      <motion.div
        id="hero-name-container"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        className="relative"
      >
        <h1
          id="hero-title-name"
          className={`font-serif tracking-tight font-extrabold mb-1 select-all leading-[1.1] transition-all duration-500 ${
            theme === 'coquette'
              ? 'text-4xl md:text-7xl text-pink-950/90'
              : 'text-5xl md:text-8xl bg-gradient-to-r from-stone-900 via-pink-950 to-stone-900 bg-clip-text text-transparent'
          }`}
          style={{
            textShadow: theme === 'coquette' 
              ? '0 2px 10px rgba(255, 182, 193, 0.4), 0 4px 20px rgba(255, 255, 255, 0.8)' 
              : '0 4px 16px rgba(243, 143, 177, 0.2), 0 8px 30px rgba(255, 255, 255, 0.9)',
          }}
        >
          Cintiani Nuraeni
        </h1>
      </motion.div>

      {/* Subtitle - "Aku seorang <UI/UX Designer.>" */}
      <motion.div
        id="hero-subtitle-container"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        className="mt-2"
      >
        <p
          id="hero-subtitle-text"
          className={`font-serif text-lg md:text-3xl italic font-medium tracking-wide transition-all duration-500 ${
            theme === 'coquette' ? 'text-pink-900/80' : 'text-stone-700/90'
          }`}
        >
          Aku seorang{' '}
          <span className="text-pink-600 font-semibold not-italic">
            &lt;UI/UX Designer.&gt;
          </span>
        </p>
      </motion.div>

      {/* Interactive Micro-Greeting */}
      <motion.div
        id="hero-micro-greeting"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-6 font-mono text-[11px] text-pink-400/80 bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-pink-200/40 shadow-sm flex items-center gap-2 max-w-xs mx-auto"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Currently creating in Bandung, ID</span>
      </motion.div>

      {/* Subtle indicator to scroll down */}
      <motion.div
        id="hero-scroll-indicator"
        className="mt-12 cursor-pointer pointer-events-auto"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="font-serif text-xs italic text-pink-500/70 tracking-widest uppercase">Explore Bio</span>
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-pink-300 via-pink-200 to-transparent shadow-sm" />
        </div>
      </motion.div>
    </section>
  );
};
