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

  const glassClass = "bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col";

  return (
    <section className="py-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
      >
        {/* Section 1: Tech Stack */}
        <motion.div variants={itemVariants} className={`${glassClass} md:col-span-2 justify-between`}>
          <h3 className="text-gray-400 font-medium mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-4 mt-auto">
            {frontendTools.map((tool, idx) => (
              <div key={idx} className="p-3 bg-white/5 rounded-2xl border border-white/5" title={tool.name}>
                <tool.icon className="w-6 h-6 text-blue-400" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: AI Workflow */}
        <motion.div variants={itemVariants} className="md:col-span-2 relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className={`${glassClass} h-full border-none !bg-[#050505]/90`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-400 font-medium">AI Workflow</h3>
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                Agentic Workflows Enabled
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-auto">
              {aiTools.map((tool, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-3 bg-white/5 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform z-10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-help"
                  title={tool.name}
                >
                  <tool.icon className="w-6 h-6 text-purple-400 animate-pulse group-hover:animate-none" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 3: Experience */}
        <motion.div variants={itemVariants} className={`${glassClass} justify-center items-center text-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
          <h2 className="text-6xl font-bold text-white mb-2">5+</h2>
          <p className="text-gray-400 font-medium">Years Experience</p>
        </motion.div>

        {/* Section 4: GitHub */}
        <motion.div variants={itemVariants} className={`${glassClass} group cursor-pointer hover:bg-white/10 transition-colors`}>
          <div className="flex justify-between items-start mb-auto">
            <Github className="w-8 h-8 text-white" />
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">GitHub</h3>
            <p className="text-sm text-gray-400">@username</p>
          </div>
        </motion.div>

        {/* Section 5: Availability */}
        <motion.div variants={itemVariants} className={`${glassClass} md:col-span-2 justify-center items-center`}>
          <div className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
            <CircleDot className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-blue-400 font-medium text-sm">Available for work</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
