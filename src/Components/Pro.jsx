import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiFolder, 
  FiExternalLink, 
  FiGithub, 
  FiX, 
  FiCheckCircle, 
  FiLayers, 
  FiSearch 
} from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

// Import PROJECTS from your index.js file
import { PROJECTS } from '../constants/index'; 

const CATEGORIES = ["All", "Full Stack", "Mobile", "AI & Data", "DevOps & Systems"];

export default function Pro() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const getBentoSpanClass = (index) => {
    if (activeCategory !== "All") return "col-span-1";
    switch (index % 6) {
      case 0:
      case 3:
      case 5:
        return "md:col-span-2 lg:col-span-2";
      default:
        return "md:col-span-1 lg:col-span-1";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden flex flex-col justify-between">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/20 backdrop-blur-md">
            <FiFolder className="w-4 h-4 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Projects</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Explore a curated selection of full-stack applications, intelligent autonomous systems, mobile apps, and cloud deployment pipelines.
          </p>

          {/* Search Bar & Category Filters */}
          <div className="mt-8 flex flex-col items-center gap-6">
            
            {/* Search Input Box */}
            <div className="relative w-full max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search projects or technologies (e.g. React, Python)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 backdrop-blur-md transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white p-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/20 scale-105"
                      : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  {cat === "All" && <FiLayers className="w-3.5 h-3.5" />}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800/80 rounded-3xl backdrop-blur-md">
            <p className="text-slate-400 text-sm mb-2">No projects match your search query or filter.</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="text-xs font-mono text-cyan-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const spanClass = getBentoSpanClass(index);
                const isLarge = spanClass.includes("col-span-2");

                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    onClick={() => setSelectedProject(project)}
                    className={`group cursor-pointer relative rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl shadow-2xl hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden ${spanClass}`}
                  >
                    {/* Glowing Top Accent Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 opacity-20 group-hover:opacity-100 transition duration-500" />

                    <div className={`p-6 sm:p-7 flex flex-col ${isLarge ? 'md:flex-row md:items-stretch gap-6' : 'gap-4'} h-full justify-between`}>
                      
                      {/* Image Preview */}
                      <div className={`relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800/80 shrink-0 ${isLarge ? 'w-full md:w-1/2 min-h-[220px] md:min-h-full' : 'w-full h-48'}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700 ease-out absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                        {/* Featured Star Badge */}
                        {project.featured && (
                          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/30 text-[10px] font-mono font-semibold text-amber-300 backdrop-blur-md shadow-lg z-10">
                            <FaStar className="w-3 h-3 text-amber-400" />
                            <span>FEATURED</span>
                          </div>
                        )}

                        {/* Expand Trigger Icon */}
                        <div className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-cyan-300 opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-md shadow-lg z-10">
                          <FiExternalLink className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className={`flex-1 flex flex-col justify-between ${isLarge ? 'md:w-1/2' : 'w-full'}`}>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-mono text-purple-400 font-semibold tracking-wider uppercase">
                              {project.category}
                            </span>
                          </div>

                          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {project.title}
                          </h2>

                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                            {project.description}
                          </p>
                        </div>

                        {/* Footer Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60 mt-auto">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 group-hover:border-slate-700 transition duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

      </main>

      {/* Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 border border-slate-700 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer z-10"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto pr-1 custom-scrollbar">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row gap-6 items-start mb-6 mt-2">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full sm:w-48 h-40 object-cover rounded-2xl border border-slate-800 shrink-0"
                  />
                  <div className="flex-1">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                      {selectedProject.category} Specification
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {selectedProject.description}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => { e.stopPropagation(); showToast("Opening GitHub repository..."); }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-white transition"
                        >
                          <FiGithub className="w-4 h-4" />
                          <span>Code Repository</span>
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => { e.stopPropagation(); showToast("Opening live demo..."); }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                {selectedProject.highlights && (
                  <div className="mb-6 pt-4 border-t border-slate-800">
                    <span className="text-xs font-mono text-slate-400 block mb-3 font-semibold">
                      Key Engineering Highlights:
                    </span>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <FiCheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400 block mb-3 font-semibold">
                    Built With:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 border border-cyan-500/50 text-slate-100 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-lg text-xs sm:text-sm font-mono"
          >
            <HiSparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}