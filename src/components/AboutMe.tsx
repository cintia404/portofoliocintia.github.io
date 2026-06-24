import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Instagram, Twitter, MessageSquare, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { AestheticTheme } from '../types';

interface AboutMeProps {
  theme: AestheticTheme;
}

export const AboutMe: React.FC<AboutMeProps> = ({ theme }) => {
  const [clickedSocial, setClickedSocial] = useState<string | null>(null);

  const handleSocialClick = (name: string) => {
    setClickedSocial(name);
    setTimeout(() => setClickedSocial(null), 3000);
  };

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-4 h-4 text-pink-700" />, handle: '@cintiani.nuraeni' },
    { name: 'Instagram', icon: <Instagram className="w-4 h-4 text-pink-700" />, handle: '@cicintianraeni' },
    { name: 'Twitter/X', icon: <Twitter className="w-4 h-4 text-pink-700" />, handle: '@cintianiraeni' },
  ];

  return (
    <section id="about" className="relative py-12 px-4 max-w-5xl mx-auto z-10">
      {/* Decorative Outer Scalloped Lace Border Container */}
      <div className="relative p-6 md:p-8 rounded-3xl overflow-visible">
        {/* SVG Scalloped Lace Frame Background Layer */}
        <div 
          id="lace-scalloped-frame"
          className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl"
          style={{
            border: '12px solid transparent',
            borderImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Cpath d=\'M30 12 a 6 6 0 0 1 6 6 a 6 6 0 0 1 6-6 a 6 6 0 0 1 6 6 a 6 6 0 0 1 6-6 a 6 6 0 0 1 0 12 a 6 6 0 0 1-6 6 a 6 6 0 0 1-6 6 a 6 6 0 0 1-6-6 a 6 6 0 0 1-6 6 a 6 6 0 0 1-6-6 a 6 6 0 0 1-6 6 a 6 6 0 0 1-6-6 a 6 6 0 0 1 0-12 a 6 6 0 0 1 6-6 a 6 6 0 0 1 6 6 a 6 6 0 0 1 6-6 z\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'3.5\'/%3E%3C/svg%3E") 30 repeat',
            filter: 'drop-shadow(0 4px 12px rgba(244,143,177,0.15))',
            opacity: 0.85,
          }}
        />

        {/* Alternative Double-Lace Accent Lines for that perfect "scrapbook" feeling */}
        <div 
          id="nested-lace-line"
          className="absolute inset-3 border-2 border-dashed border-white/60 rounded-2xl pointer-events-none z-0" 
        />

        {/* Glassmorphic About Me Main Card */}
        <motion.div
          id="about-glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-2xl p-6 md:p-10 overflow-hidden z-10 transition-all duration-500"
          style={{
            background: theme === 'coquette'
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 240, 243, 0.35) 50%, rgba(243, 230, 255, 0.3) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(248, 250, 252, 0.45) 50%, rgba(254, 244, 247, 0.5) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            boxShadow: theme === 'coquette'
              ? '0 16px 48px rgba(255, 182, 193, 0.25), inset 0 4px 10px rgba(255, 255, 255, 0.5)'
              : '0 20px 50px rgba(180, 180, 195, 0.2), inset 0 4px 12px rgba(255, 255, 255, 0.7)',
          }}
        >
          {/* Top Row: Title & Social Pearl Icons */}
          <div id="about-top-row" className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
            <div id="about-title-block">
              <span className="font-mono text-xs text-pink-500 tracking-widest uppercase flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Who I Am
              </span>
              <h2
                id="about-card-title"
                className="font-serif text-3xl md:text-4xl font-bold text-pink-950/90 tracking-tight"
              >
                About Me
              </h2>
            </div>

            {/* Social pearl buttons (matching original layout, floating circles) */}
            <div id="about-socials-row" className="flex items-center gap-3.5 self-start sm:self-center">
              {socialLinks.map((social) => (
                <div key={social.name} className="relative">
                  <motion.button
                    id={`social-${social.name.toLowerCase()}`}
                    onClick={() => handleSocialClick(social.name)}
                    className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all border border-white/60 shadow-md"
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #fff4f6 30%, #fbd0d9 75%, #e1bbfd 100%)',
                      boxShadow: 'inset -1px -1px 4px rgba(180, 130, 180, 0.3), 0 4px 10px rgba(255, 182, 193, 0.25)',
                    }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    title={`Connect on ${social.name}`}
                  >
                    {social.icon}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Social media alert popup notifications */}
          <AnimatePresence>
            {clickedSocial && (
              <motion.div
                id="social-alert-popup"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="mb-4 p-3 bg-pink-50/90 border border-pink-200/50 rounded-xl text-xs text-pink-950 flex items-center justify-between shadow-sm font-mono"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-pink-500 animate-bounce" />
                  <span>
                    Linked account for <strong>{clickedSocial}</strong>:{' '}
                    {socialLinks.find((s) => s.name === clickedSocial)?.handle}
                  </span>
                </div>
                <span className="text-[10px] text-pink-400 bg-white/70 px-2 py-0.5 rounded-full border border-pink-100">
                  Copied to clipboard
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content Biography */}
          <div id="about-bio-text" className="space-y-4 text-pink-950/80 font-sans text-sm md:text-base leading-relaxed tracking-wide">
            <p id="about-bio-para-1" className="indent-4">
              I am a passionate creative developer and designer with a deep-rooted experience in{' '}
              <strong className="text-pink-800 font-semibold">Bandung</strong>. Currently, I am a dedicated student
              in <strong className="text-pink-800 font-semibold">Informatics Management at Telkom University</strong>,
              merging the structures of tech with the softness of classic design. I thrive at the intersections where
              logical programming meets delightful, modern visual styles.
            </p>
            <p id="about-bio-para-2">
              My creative focal point and expertise spans{' '}
              <strong className="text-pink-800 font-semibold">Frontend Development</strong>,{' '}
              <strong className="text-pink-800 font-semibold">UI/UX Interaction Design</strong>, and{' '}
              <strong className="text-pink-800 font-semibold">MCing (Public Speaking)</strong> in meaningful scientific
              and tech moments. I dedicate my efforts to coding responsive layouts, configuring accessible UI component
              libraries, conducting user-centered studies, and facilitating energetic campus and public tech events.
            </p>
          </div>

          {/* Core Info Badges (Bandung & Telkom Uni) */}
          <div id="about-badges" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-pink-200/30">
            <div className="flex items-start gap-3 bg-pink-100/25 p-3.5 rounded-xl border border-pink-200/20 backdrop-blur-md">
              <MapPin className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-serif text-sm font-bold text-pink-950">Location & Base</h4>
                <p className="text-xs text-pink-900/70 mt-0.5 font-mono">Bandung, West Java, Indonesia</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-pink-100/25 p-3.5 rounded-xl border border-pink-200/20 backdrop-blur-md">
              <GraduationCap className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-serif text-sm font-bold text-pink-950">Education</h4>
                <p className="text-xs text-pink-900/70 mt-0.5 font-mono">Informatics Management, Telkom University</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
