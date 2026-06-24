import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowLeft, ArrowRight, Eye, Code, ExternalLink } from 'lucide-react';
import { Project, ProjectCategory, AestheticTheme } from '../types';
import { projectsData } from '../data';
import { ProjectModal } from './ProjectModal';

interface PlaygroundProps {
  theme: AestheticTheme;
}

export const Playground: React.FC<PlaygroundProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by selected category
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  const categories: ProjectCategory[] = ['All', 'IT & Tech', 'Public Speaking', 'Creative'];

  // Handle arrows navigation (cycles active category)
  const handlePrevCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
    setActiveCategory(categories[prevIndex]);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveCategory(categories[nextIndex]);
  };

  return (
    <section id="playground" className="relative py-12 px-4 max-w-6xl mx-auto z-10">
      {/* Playground Header: Title and Navigation Arrows */}
      <div id="playground-header" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
        <div>
          <span className="font-mono text-xs text-pink-500 tracking-widest uppercase flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Curated Creations
          </span>
          <h2
            id="playground-section-title"
            className="font-serif text-3xl md:text-4xl font-extrabold text-pink-950/90 tracking-tight"
          >
            My Playground
          </h2>
        </div>

        {/* Categories selector & Carousel arrows (matching the original design layout) */}
        <div id="playground-filters" className="flex flex-wrap items-center gap-4">
          <div className="flex bg-white/30 backdrop-blur-md p-1 rounded-full border border-pink-200/40 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'text-pink-950 z-10'
                    : 'text-pink-900/60 hover:text-pink-900/90'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-100 rounded-full -z-10 shadow-sm border border-pink-300/40"
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {cat}
                  {activeCategory === cat && (
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block animate-ping" />
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Nav arrows right side (matches < > arrows in original screenshot) */}
          <div id="filter-nav-arrows" className="flex items-center gap-2">
            <button
              id="filter-arrow-prev"
              onClick={handlePrevCategory}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-pink-200 shadow-sm bg-white/50 backdrop-blur-md cursor-pointer text-pink-900/80 hover:bg-pink-100 transition-colors"
              aria-label="Previous category"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              id="filter-arrow-next"
              onClick={handleNextCategory}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-pink-200 shadow-sm bg-white/50 backdrop-blur-md cursor-pointer text-pink-900/80 hover:bg-pink-100 transition-colors"
              aria-label="Next category"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Projects (Masonry / Bento Grid style representation) */}
      <motion.div
        layout
        id="playground-grid-container"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            // Give different cards slightly different heights/styles for an elegant coquette masonry feeling
            const isLongCard = index % 3 === 1;

            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-2xl p-5 overflow-hidden flex flex-col justify-between cursor-pointer border border-white/60 transition-all duration-500 ${
                  isLongCard ? 'min-h-[290px]' : 'min-h-[260px]'
                }`}
                style={{
                  background: theme === 'coquette'
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 240, 243, 0.35) 60%, rgba(240, 225, 255, 0.3) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(248, 250, 252, 0.45) 60%, rgba(254, 244, 247, 0.5) 100%)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  boxShadow: theme === 'coquette'
                    ? '0 12px 36px rgba(255, 182, 193, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
                    : '0 16px 40px rgba(180, 180, 195, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
                }}
                whileHover={{
                  y: -6,
                  boxShadow: theme === 'coquette'
                    ? '0 20px 48px rgba(255, 182, 193, 0.3), inset 0 2px 6px rgba(255, 255, 255, 0.6)'
                    : '0 24px 50px rgba(170, 170, 190, 0.25), inset 0 2px 6px rgba(255, 255, 255, 0.8)',
                }}
              >
                {/* Lace dashed trim frame inside card */}
                <div
                  className="absolute inset-2 border border-dashed border-pink-300/25 rounded-xl pointer-events-none group-hover:border-pink-300/50 transition-colors"
                  style={{ margin: '4px' }}
                />

                {/* Sparkling icon stars on card corners */}
                <div className="absolute top-4 right-4 text-pink-300 opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>

                {/* Project Media Overlay on Hover */}
                <div className="absolute inset-0 bg-pink-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

                {/* Card Content - Top */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] tracking-widest uppercase bg-pink-100/60 text-pink-700 px-2.5 py-0.5 rounded-full border border-pink-200/30">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-pink-400 font-mono">{project.date}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-pink-950 group-hover:text-pink-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-serif italic text-xs text-pink-700/80">
                    {project.subtitle}
                  </p>
                </div>

                {/* Card Content - Bottom */}
                <div className="relative z-10 pt-4 mt-auto">
                  <p className="text-pink-950/70 text-xs line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-pink-200/10 text-[10px] font-mono text-pink-500">
                    <span className="text-pink-900/50">Role: {project.role.split(' & ')[0]}</span>
                    <span className="flex items-center gap-1 font-bold tracking-widest uppercase group-hover:text-pink-700 transition-colors">
                      <span>View Project</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Project details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
