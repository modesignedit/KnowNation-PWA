import { motion } from 'motion/react';
import { Terminal, Globe, ShieldCheck } from 'lucide-react';

export default function CompanyAbout() {
  const pillars = [
    {
      icon: Terminal,
      title: "AI-Assisted Development",
      description: "Architecting next-generation applications utilizing Generative AI and 'Vibe Coding' methodologies for rapid, high-fidelity deployment and intelligent workflows."
    },
    {
      icon: Globe,
      title: "Custom Digital Solutions",
      description: "Specialized engineering of Progressive Web Apps (PWAs), Enterprise SaaS platforms, and high-engagement Telegram Mini Apps (TMAs)."
    },
    {
      icon: ShieldCheck,
      title: "Localized Infrastructure",
      description: "Delivering 'Naira-Proof' engineering. Optimized for low-data environments with robust Monnify and Squad integrations for seamless, high-trust Nigerian market operations."
    }
  ];

  return (
    <section className="py-24 border-t border-white/10 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Corporate Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            KNOW NATION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">LIMITED</span>
          </h2>
          <p className="text-xl text-blue-400 mb-8 font-medium">Powering Your Digital Future.</p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Bridging the gap between established corporate reliability and cutting-edge software engineering. 
            We build resilient, market-adapted technology infrastructure designed to scale.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 grid gap-4"
        >
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex gap-6 hover:bg-white/10 transition-colors group">
              <div className="p-4 bg-[#050505] rounded-xl border border-white/5 h-fit group-hover:border-blue-500/30 transition-colors">
                <pillar.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
