import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { RibbonBow } from './RibbonBow';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const roles = ["Professional MC.", "UI/UX Designer.", "Frontend Developer."];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        // Efek Mengetik Kata
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Berhenti sebentar setelah kata selesai diketik
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Efek Menghapus Kata
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          // Pindah ke profesi selanjutnya di dalam array list
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero-section" className="relative flex flex-col items-center justify-center pt-8 pb-12 px-4 text-center max-w-4xl mx-auto z-10">
      <motion.div
        initial={{ scale: 0.2, rotate: -45, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.3 }}
        className="mb-6 relative z-20 cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <RibbonBow size={140} />
      </motion.div>

      <div className="absolute top-1/4 left-10 pointer-events-none hidden sm:block">
        <Sparkles className="w-5 h-5 text-pink-300 fill-pink-100 opacity-60" />
      </div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
        <h1 className="font-serif tracking-tight font-extrabold mb-1 text-4xl md:text-7xl text-pink-950/90">
          Cintiani Nuraeni
        </h1>
      </motion.div>

      {/* Kontainer Animasi Mengetik */}
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-2 min-h-[40px]">
        <p className="font-serif text-lg md:text-3xl italic font-medium tracking-wide text-pink-900/80">
          Aku seorang{' '}
          <span id="typewriter-text" className="text-pink-600 font-semibold not-italic border-r-2 border-pink-400 pr-1 animate-pulse">
            {currentText}
          </span>
        </p>
      </motion.div>

      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-6 font-mono text-[11px] text-pink-400/80 bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-pink-200/40 shadow-sm flex items-center gap-2 max-w-xs mx-auto">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Currently creating in Bandung, ID</span>
      </motion.div>
    </section>
  );
};