import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Decentralized Exchange",
    niche: "Web3",
    description: "A high-performance DEX built with Rust and React.",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Algorithmic Trading Dashboard",
    niche: "Fintech",
    description: "Real-time analytics and trade execution platform.",
    gradient: "from-emerald-500/20 to-blue-500/20"
  },
  {
    title: "AI Content Generator",
    niche: "AI / ML",
    description: "LLM-powered tool for marketing copy generation.",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Healthcare Portal",
    niche: "MedTech",
    description: "Secure patient data management system.",
    gradient: "from-cyan-500/20 to-blue-500/20"
  }
];

export default function ProjectGallery() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-white">Selected Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors flex flex-col h-80"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
            
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
    </section>
  );
}
