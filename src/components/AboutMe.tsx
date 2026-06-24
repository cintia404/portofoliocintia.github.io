import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, Linkedin, Github, MessageSquare, MapPin, GraduationCap, Sparkles } from 'lucide-react';

export const AboutMe: React.FC = () => {
  const [clickedSocial, setClickedSocial] = useState<string | null>(null);

  const handleSocialClick = (name: string, url: string) => {
    setClickedSocial(name);
    // Buka tautan sosial media di tab baru browser
    window.open(url, '_blank');
    setTimeout(() => setClickedSocial(null), 3000);
  };

  const socialLinks = [
    { name: 'Email', icon: <Mail className="w-4 h-4 text-pink-700" />, url: 'mailto:cintianuraeni86@email.com', handle: 'cintianuraeni86@email.com' },
    { name: 'Instagram', icon: <Instagram className="w-4 h-4 text-pink-700" />, url: 'https://www.instagram.com/cintianraeni?igsh=cTR5YjlseWNmYWNl', handle: '@cintianraeni' },
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4 text-pink-700" />, url: 'https://www.linkedin.com/in/cintiani-nuraeni-9893083b4', handle: 'Cintiani Nuraeni' },
    { name: 'GitHub', icon: <Github className="w-4 h-4 text-pink-700" />, url: 'https://github.com/cintia404', handle: 'cintia404' },
  ];

  return (
    <section id="about" className="relative py-12 px-4 max-w-5xl mx-auto z-10">
      <div className="relative p-6 md:p-8 rounded-3xl overflow-visible">
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

        <div id="nested-lace-line" className="absolute inset-3 border-2 border-dashed border-white/60 rounded-2xl pointer-events-none z-0" />

        <motion.div
          id="about-glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-2xl p-6 md:p-10 overflow-hidden z-10 bg-linear-to-br from-white/45 to-pink-50/35 backdrop-blur-xl border border-white/70 shadow-[0_16px_48px_rgba(255,182,193,0.25)]"
        >
          <div id="about-top-row" className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
            <div id="about-title-block">
              <span className="font-mono text-xs text-pink-500 tracking-widest uppercase flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Who I Am
              </span>
              <h2 id="about-card-title" className="font-serif text-3xl md:text-4xl font-bold text-pink-950/90 tracking-tight">
                About Me
              </h2>
            </div>

            {/* Bulatan Sosial Mutiara */}
            <div id="about-socials-row" className="flex items-center gap-3.5 self-start sm:self-center">
              {socialLinks.map((social) => (
                <div key={social.name} className="relative">
                  <motion.button
                    onClick={() => handleSocialClick(social.name, social.url)}
                    className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border border-white/60 shadow-md"
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #fff4f6 30%, #fbd0d9 75%, #e1bbfd 100%)',
                      boxShadow: 'inset -1px -1px 4px rgba(180, 130, 180, 0.3), 0 4px 10px rgba(255, 182, 193, 0.25)',
                    }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    title={`Hubungi via ${social.name}`}
                  >
                    {social.icon}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {clickedSocial && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="mb-4 p-3 bg-pink-50/90 border border-pink-200/50 rounded-xl text-xs text-pink-950 flex items-center justify-between shadow-sm font-mono"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-pink-500 animate-bounce" />
                  <span>Membuka profil tautan <strong>{clickedSocial}</strong>: {socialLinks.find((s) => s.name === clickedSocial)?.handle}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div id="about-bio-text" className="space-y-4 text-pink-950/80 font-sans text-sm md:text-base leading-relaxed tracking-wide">
            <p className="indent-4">
              Saya adalah seorang mahasiswa program diploma Manajemen Informatika yang berdedikasi tinggi di{' '}
              <strong className="text-pink-800 font-semibold">Bandung</strong>. Saat ini saya menempuh studi di{' '}
              <strong className="text-pink-800 font-semibold">Universitas Teknologi Digital (Digitech University)</strong>, 
              menghubungkan dunia eksekusi teknikal struktur IT dengan kelembutan desain visual interaktif modern.
            </p>
            <p>
              Fokus keahlian saya mencakup koordinasi bidang protokoler korporat, manajemen acara, penulisan produk jurnalistik media bersama{' '}
              <strong className="text-pink-800 font-semibold">Kalamoeda Indonesia</strong>, perancangan antarmuka UI/UX di Figma, hingga implementasi front-end web development menggunakan framework modern.
            </p>
          </div>

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
                <p className="text-xs text-pink-900/70 mt-0.5 font-mono">Informatics Management, Universitas Teknologi Digital</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};