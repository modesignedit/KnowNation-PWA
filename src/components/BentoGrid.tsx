import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, Github, ArrowUpRight, CircleDot, Sparkles, Terminal, Wand2, Cpu } from 'lucide-react';

const frontendTools = [
  { name: "React", icon: Layout },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database }
];

const aiTools = [
  { name: "Gemini 1.5 Pro", icon: Sparkles },
  { name: "Cursor", icon: Terminal },
  { name: "Vercel v0", icon: Wand2 },
  { name: "Lovable.dev", icon: Cpu }
];

export default function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const cardClass = "bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors";

  return (
    <section className="py-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Section 1: Tech Stack */}
        <motion.div variants={itemVariants} className={`${cardClass} md:col-span-2`}>
          <h3 className="text-gray-400 font-medium mb-6">Core Engineering Stack</h3>
          <div className="flex flex-wrap gap-3 mt-auto">
            {frontendTools.map((tool, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2.5 bg-black/40 rounded-xl border border-white/5 text-sm text-gray-300">
                <tool.icon className="w-4 h-4 text-blue-400" />
                {tool.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: Experience */}
        <motion.div variants={itemVariants} className={`${cardClass} justify-center items-center text-center py-12 md:py-8`}>
          <h2 className="text-6xl font-bold text-white mb-2 tracking-tighter">5+</h2>
          <p className="text-gray-400 font-medium">Years Experience</p>
        </motion.div>

        {/* Section 3: AI Workflow */}
        <motion.div variants={itemVariants} className={`${cardClass} md:col-span-2`}>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-gray-400 font-medium">AI-Native Workflow</h3>
            <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
              Agentic Enabled
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mt-auto">
            {aiTools.map((tool, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2.5 bg-black/40 rounded-xl border border-white/5 text-sm text-gray-300">
                <tool.icon className="w-4 h-4 text-purple-400" />
                {tool.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 4: GitHub & Availability */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <a 
            href="https://github.com/modesignedit" 
            target="_blank" 
            rel="noreferrer"
            className={`${cardClass} flex-1 group`}
          >
            <div className="flex justify-between items-start mb-8">
              <Github className="w-7 h-7 text-white" />
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <div className="mt-auto">
              <h3 className="text-base font-medium text-white">GitHub</h3>
              <p className="text-sm text-gray-500 truncate">@modesignedit</p>
            </div>
          </a>
          
          <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-5 flex justify-center items-center gap-3">
            <CircleDot className="w-4 h-4 text-green-500 animate-pulse" />
            <span className="text-green-400 font-medium text-sm">Available for work</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
