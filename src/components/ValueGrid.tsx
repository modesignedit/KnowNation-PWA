import { motion } from 'motion/react';
import { ServerCog, TrendingUp, ShieldCheck, WifiOff, Banknote, Bot, Sparkles } from 'lucide-react';

const valueProps = [
  {
    icon: WifiOff,
    solution: "Edge-Cached Progressive Web Architecture (PWA)",
    impact: "Captures users in low-bandwidth areas, reducing bounce rates and saving customer mobile data.",
    reliability: "Latency Mitigation & Offline-First Data Integrity. Ensures seamless operation during local network drops."
  },
  {
    icon: Banknote,
    solution: "Automated Bank Transfer Verification (Monnify)",
    impact: "Eliminates manual reconciliation, prevents fake transfer fraud, and accelerates SME cash flow.",
    reliability: "Idempotent Webhook Security. Guarantees zero double-crediting and transaction finality despite API timeouts."
  },
  {
    icon: Bot,
    solution: "AI-Automated User & Guest Management",
    impact: "Slashes operational overhead by automating onboarding, support routing, and data categorization.",
    reliability: "Deterministic AI Workflows. High-precision data pipelines ensuring consistent, error-free automated decisions."
  },
  {
    icon: Sparkles,
    solution: "High-Performance Glassmorphic UI",
    impact: "Elevates brand perception to enterprise-grade, increasing user trust and conversion rates.",
    reliability: "GPU-Accelerated Rendering. Fluid 60fps animations with zero layout shift, ensuring a premium feel without battery drain."
  }
];

export default function ValueGrid() {
  return (
    <section className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Strategic Technical Partner</h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          Delivering "Naira-proof" architectures. Translating complex engineering into direct financial 
          benefits and operational reliability for Nigerian SMEs and Startups.
        </p>
      </div>

      <div className="hidden md:grid grid-cols-3 gap-6 mb-6 px-6">
        <div className="flex items-center gap-2 text-gray-400 font-semibold uppercase tracking-wider text-sm">
          <ServerCog className="w-4 h-4" />
          <span>Engineering Solution</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 font-semibold uppercase tracking-wider text-sm">
          <TrendingUp className="w-4 h-4" />
          <span>Business Impact</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 font-semibold uppercase tracking-wider text-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>Market Reliability Signal</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {valueProps.map((prop, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors group"
          >
            {/* Column 1: Engineering Solution */}
            <div className="flex flex-col gap-3">
              <div className="md:hidden flex items-center gap-2 text-gray-400 font-semibold uppercase tracking-wider text-xs mb-2">
                <ServerCog className="w-4 h-4" />
                <span>Engineering Solution</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <prop.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">{prop.solution}</h3>
              </div>
            </div>

            {/* Column 2: Business Impact */}
            <div className="flex flex-col justify-center">
              <div className="md:hidden flex items-center gap-2 text-gray-400 font-semibold uppercase tracking-wider text-xs mb-2 mt-4">
                <TrendingUp className="w-4 h-4" />
                <span>Business Impact</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {prop.impact}
              </p>
            </div>

            {/* Column 3: Market Reliability Signal */}
            <div className="flex flex-col justify-center">
              <div className="md:hidden flex items-center gap-2 text-gray-400 font-semibold uppercase tracking-wider text-xs mb-2 mt-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Market Reliability Signal</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                {prop.reliability}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
