"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Sunteck Global Impact Ltd",
    niche: "Renewable Energy",
    description: "Corporate web presence for a solar energy solutions provider.",
    longDescription: "A high-performance corporate website designed for Sunteck Global Impact Ltd, showcasing their renewable energy solutions, solar products, and corporate initiatives. Built for optimal SEO and lead generation.",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    demoLink: "https://www.suntecksolars.com/",
    repoLink: "#",
    gradient: "from-yellow-500/20 to-orange-500/20",
    imageSeed: "solar,energy"
  },
  {
    title: "Vietnam Burger Unisex Salon",
    niche: "Local Business",
    description: "Modern digital storefront and booking platform for a premium salon.",
    longDescription: "A sleek, visually engaging digital storefront for Vietnam Burger Unisex Salon. Features a highly responsive design, service galleries, and integrated workflows to drive customer conversions.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://vietnam-burger-salon.vercel.app",
    repoLink: "#",
    gradient: "from-pink-500/20 to-rose-500/20",
    imageSeed: "salon,hair"
  },
  {
    title: "My-Task-Buddy",
    niche: "Productivity SaaS",
    description: "An intuitive task management and productivity application.",
    longDescription: "A streamlined task management application designed to boost daily productivity. Features real-time state management, intuitive drag-and-drop interfaces, and persistent local storage for a seamless user experience.",
    techStack: ["React", "TypeScript", "Lovable", "Tailwind CSS"],
    demoLink: "https://todo-comfort-zone.lovable.app",
    repoLink: "https://github.com/modesignedit/My-task-buddy",
    gradient: "from-blue-500/20 to-indigo-500/20",
    imageSeed: "productivity,workspace"
  },
  {
    title: "Quillscroll",
    niche: "Content Platform",
    description: "A dynamic content scrolling and reading platform.",
    longDescription: "A modern web application focused on delivering a frictionless reading experience. Implements infinite scrolling, rich text rendering, and a minimalist UI to keep users engaged with content.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    demoLink: "https://quillscroll.vercel.app",
    repoLink: "https://github.com/modesignedit/quillscroll",
    gradient: "from-purple-500/20 to-blue-500/20",
    imageSeed: "writing,blog"
  }
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-white">Selected Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors flex flex-col h-80"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`} />
            
            {/* SVG Pattern Overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)' , backgroundSize: '24px 24px' }} />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-auto">
                <span className="px-3 py-1 text-xs font-medium bg-white/10 border border-white/10 rounded-full text-gray-300">
                  {project.niche}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white transform group-hover:-rotate-45 transition-transform" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            >
              {/* Image/Video Header */}
              <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden bg-white/5">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-30 mix-blend-overlay z-10`} />
                <img 
                  src={`https://picsum.photos/seed/${selectedProject.imageSeed}/1200/600?blur=2`}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 md:p-10 overflow-y-auto">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full">
                    {selectedProject.niche}
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                  {selectedProject.demoLink !== "#" && (
                    <a 
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.repoLink !== "#" && (
                    <a 
                      href={selectedProject.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
