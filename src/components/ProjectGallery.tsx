"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Decentralized Exchange",
    niche: "Web3",
    description: "A high-performance DEX built with Rust and React.",
    longDescription: "A fully decentralized exchange platform featuring automated market making (AMM), liquidity pools, and real-time order book matching. Engineered for low latency and high throughput on the Solana blockchain.",
    techStack: ["React", "Rust", "Solana", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "#",
    gradient: "from-blue-500/20 to-purple-500/20",
    imageSeed: "crypto"
  },
  {
    title: "Algorithmic Trading Dashboard",
    niche: "Fintech",
    description: "Real-time analytics and trade execution platform.",
    longDescription: "An institutional-grade trading dashboard providing real-time market data visualization, algorithmic strategy backtesting, and automated trade execution via FIX protocol.",
    techStack: ["Next.js", "Python", "WebSockets", "D3.js"],
    demoLink: "#",
    repoLink: "#",
    gradient: "from-emerald-500/20 to-blue-500/20",
    imageSeed: "trading"
  },
  {
    title: "AI Content Generator",
    niche: "AI / ML",
    description: "LLM-powered tool for marketing copy generation.",
    longDescription: "A SaaS platform leveraging large language models to generate high-converting marketing copy, blog posts, and social media content. Features custom fine-tuning and brand voice matching.",
    techStack: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
    demoLink: "#",
    repoLink: "#",
    gradient: "from-orange-500/20 to-red-500/20",
    imageSeed: "ai"
  },
  {
    title: "Healthcare Portal",
    niche: "MedTech",
    description: "Secure patient data management system.",
    longDescription: "A HIPAA-compliant patient portal allowing secure access to medical records, appointment scheduling, and telehealth video consultations. Built with end-to-end encryption.",
    techStack: ["React", "TypeScript", "AWS", "WebRTC"],
    demoLink: "#",
    repoLink: "#",
    gradient: "from-cyan-500/20 to-blue-500/20",
    imageSeed: "medical"
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
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-white/5">
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
              <div className="p-6 sm:p-10 overflow-y-auto">
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
                  <a 
                    href={selectedProject.demoLink}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </a>
                  <a 
                    href={selectedProject.repoLink}
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
