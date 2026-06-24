import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { AestheticTheme } from '../types';

interface FooterProps {
  theme: AestheticTheme;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="relative py-12 px-4 max-w-6xl mx-auto z-10 text-center">
      {/* Floating scroll to top button styled as a pearlescent sphere */}
      <div className="flex justify-center mb-6">
        <motion.button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full flex items-center justify-center border border-pink-200 shadow-md cursor-pointer bg-white"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #fff1f3 30%, #fbd5dd 75%, #d1c4e9 100%)',
            boxShadow: 'inset -1px -1px 4px rgba(180, 130, 180, 0.3), 0 6px 16px rgba(255, 182, 193, 0.25)',
          }}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-pink-700" />
        </motion.button>
      </div>

      <div className="space-y-3">
        {/* Credit line */}
        <p
          id="footer-credits-text"
          className="font-serif italic text-xs md:text-sm text-pink-900/60 flex items-center justify-center gap-1.5 flex-wrap"
        >
          <span>Handcrafted with</span>
          <span className="inline-block text-pink-500 hover:scale-125 transition-transform">🎀</span>
          <span>&</span>
          <span className="inline-block text-pink-400 hover:scale-125 transition-transform">🦪</span>
          <span>for</span>
          <strong className="text-pink-950 font-bold not-italic font-sans">Cintiani Nuraeni</strong>
        </p>

        {/* School reference & copyright */}
        <p id="footer-school-text" className="font-mono text-[10px] text-pink-800/40 tracking-wider">
          © 2026 • INFORMATICS MANAGEMENT • TELKOM UNIVERSITY, BANDUNG
        </p>

        {/* Decorative corner stars */}
        <div className="flex items-center justify-center gap-1.5 text-pink-300 opacity-40">
          <Sparkles className="w-3 h-3 animate-pulse" />
          <Heart className="w-2.5 h-2.5 fill-pink-300" />
          <Sparkles className="w-3 h-3 animate-pulse" />
        </div>
      </div>
    </footer>
  );
};
