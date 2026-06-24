import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Building, ChevronLeft, ChevronRight, ExternalLink, Globe, Award, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatis geser gambar setiap 4 detik
  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project.images, project.id]);

  // Reset slide index ke 0 saat ganti modal project lain
  useEffect(() => {
    setCurrentSlide(0);
  }, [project.id]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-pink-900/10 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="relative w-full max-w-4xl bg-white/95 backdrop-blur-xl border border-pink-200/50 rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(255,182,193,0.35)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tombol Close */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/80 border border-pink-200/40 text-pink-900/60 hover:text-pink-900 shadow-xs cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* BAGIAN SLIDER GAMBAR */}
          <div className="relative w-full h-[240px] md:h-[380px] bg-pink-50/30 overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={project.images[currentSlide]}
                alt={`${project.title} slide ${currentSlide + 1}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover select-none"
              />
            </AnimatePresence>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-pink-100 text-pink-800 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:bg-white cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-pink-100 text-pink-800 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:bg-white cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Pearl Dots Indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx ? 'w-5 bg-pink-500' : 'w-2 bg-white/70 border border-pink-300'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* DETAIL KONTEN */}
          <div className="p-6 md:p-8 max-h-[50vh] overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* STUDI KASUS NARATIF */}
            <div className="md:col-span-2 space-y-5 pr-0 md:pr-2">
              <div>
                <span className="font-mono text-[10px] text-pink-500 tracking-wider uppercase font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 animate-pulse" /> {project.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-extrabold text-pink-950 mt-1">
                  {project.title}
                </h3>
                <p className="font-mono text-[11px] text-pink-800/60 italic mt-0.5">{project.subtitle}</p>
              </div>

              {/* Babak 1 */}
              <div className="bg-rose-50/40 p-4 rounded-xl border border-rose-100/60">
                <h4 className="font-serif text-xs md:text-sm font-bold text-rose-950 flex items-center gap-1.5 mb-1">
                  <AlertCircle className="w-4 h-4 text-rose-500" />
                  Tantangan Utama (The Challenge)
                </h4>
                <p className="font-sans text-xs md:text-sm text-pink-950/80 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Babak 2 */}
              <div className="bg-pink-50/30 p-4 rounded-xl border border-pink-100/60">
                <h4 className="font-serif text-xs md:text-sm font-bold text-pink-950 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  Solusi Kreatif & Teknis (The Solution)
                </h4>
                <p className="font-sans text-xs md:text-sm text-pink-950/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Babak 3 */}
              <div className="bg-emerald-50/30 p-4 rounded-xl border border-emerald-100/50">
                <h4 className="font-serif text-xs md:text-sm font-bold text-emerald-950 flex items-center gap-1.5 mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Dampak & Hasil Akhir (The Impact)
                </h4>
                <p className="font-sans text-xs md:text-sm text-pink-950/80 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* SIDEBAR METADATA & BUTTON LINK */}
            <div className="space-y-4 bg-pink-50/10 p-4 rounded-2xl border border-pink-100/40 h-fit">
              <h4 className="font-serif text-[11px] font-bold text-pink-950 uppercase tracking-widest border-b border-pink-200/30 pb-2">
                Project Information
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2 text-pink-950/80">
                  <Award className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[9px] text-pink-800/50 uppercase font-mono">My Role</p>
                    <p className="font-semibold text-pink-900">{project.role}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-pink-950/80">
                  <Calendar className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[9px] text-pink-800/50 uppercase font-mono">Timeline</p>
                    <p className="font-semibold text-pink-900">{project.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-pink-950/80">
                  <Building className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[9px] text-pink-800/50 uppercase font-mono">Institution</p>
                    <p className="font-semibold text-pink-900">{project.client}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-pink-200/30">
                <p className="text-[9px] text-pink-800/50 uppercase font-mono mb-1.5">Tools & Skills</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[9px] font-semibold text-pink-800 bg-white border border-pink-100 px-1.5 py-0.5 rounded-md shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS (Mutiara CTA) */}
              {project.links && (
                <div className="pt-2 border-t border-pink-200/30 flex flex-col gap-1.5">
                  {project.links.figma && (
                    <a
                      href={project.links.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-1 text-center text-xs font-semibold py-1.5 rounded-xl border border-pink-200 text-pink-900 bg-white hover:-translate-y-0.5 transition-transform cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-pink-500" />
                      Open Figma Prototype
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-1 text-center text-xs font-semibold py-1.5 rounded-xl text-white hover:-translate-y-0.5 transition-transform cursor-pointer shadow-sm"
                      style={{ background: 'linear-gradient(135deg, #ff8da1 0%, #f48fb1 100%)' }}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      View Live Project
                    </a>
                  )}
                </div>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};