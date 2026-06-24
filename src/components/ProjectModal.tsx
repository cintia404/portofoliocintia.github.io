import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Briefcase, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent scrolling behind open modal
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div id="project-modal-portal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Shadow Overlay */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-pink-950/20 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-content-card"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 md:p-8 z-10 text-pink-950 border border-white/60 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 245, 247, 0.9) 100%)',
              boxShadow: '0 24px 64px -12px rgba(220, 140, 160, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
            }}
          >
            {/* Scalloped Lace Inner Trim */}
            <div
              className="absolute inset-1 border border-dashed border-pink-300/40 rounded-2xl pointer-events-none"
              style={{ margin: '6px' }}
            />

            {/* Close button with Glossy Pearl Style */}
            <motion.button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border border-pink-200 shadow-md cursor-pointer bg-white"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #fff0f2 35%, #ffd1dc 100%)',
              }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-4 h-4 text-pink-800" />
            </motion.button>

            {/* Content Body */}
            <div id="modal-body-container" className="mt-2 space-y-6">
              {/* Category & Date Header */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-mono text-[10px] tracking-wider uppercase bg-pink-100 text-pink-700 px-3 py-1 rounded-full border border-pink-200/50 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 animate-spin" />
                  {project.category}
                </span>
                <span className="font-mono text-[10px] text-pink-500 flex items-center gap-1 bg-white/50 px-2 py-1 rounded-full border border-pink-100">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 id="modal-project-title" className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-pink-950">
                  {project.title}
                </h3>
                <p id="modal-project-subtitle" className="font-serif italic text-base md:text-lg text-pink-700/80 mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Image Container with Lace Trim Frame */}
              <div id="modal-image-frame" className="relative group overflow-hidden rounded-2xl border border-pink-100 shadow-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-72 object-cover object-center transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay ribbon vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Role & Client Meta Grid */}
              <div id="modal-meta-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-pink-100/30 border border-pink-200/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-pink-500 shrink-0" />
                  <span className="text-pink-900/70 font-mono text-xs">Role:</span>
                  <strong className="text-pink-950 font-medium">{project.role}</strong>
                </div>
                {project.client && (
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-pink-500 shrink-0" />
                    <span className="text-pink-900/70 font-mono text-xs">Client:</span>
                    <strong className="text-pink-950 font-medium">{project.client}</strong>
                  </div>
                )}
              </div>

              {/* Long Description Text */}
              <div id="modal-description-section" className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-pink-950 border-b border-pink-100 pb-1.5 flex items-center gap-2">
                  <span>Project Story & Outcomes</span>
                </h4>
                <p className="text-pink-900/80 font-sans text-sm leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>

              {/* Tags Cloud */}
              <div id="modal-tags-section" className="space-y-2">
                <span className="font-serif text-xs italic text-pink-600">Technologies & Methodologies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-pink-900/80 bg-white border border-pink-200/30 rounded-lg px-2.5 py-1 shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div id="modal-actions-footer" className="flex flex-wrap items-center gap-4 pt-4 border-t border-pink-100">
                {project.link && (
                  <motion.a
                    id="modal-btn-demo"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-pink-400 to-pink-300 text-white shadow-md border border-pink-300/40 cursor-pointer"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span>Launch Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    id="modal-btn-github"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-stone-900 text-stone-100 shadow-md border border-stone-800 cursor-pointer"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </motion.a>
                )}
                <button
                  id="modal-btn-close-bottom"
                  onClick={onClose}
                  className="font-mono text-[10px] uppercase font-bold text-pink-500 hover:text-pink-700 transition-colors cursor-pointer ml-auto"
                >
                  Close Window
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
