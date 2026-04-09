import { motion } from 'motion/react';
import { Cloud, BrainCircuit, CreditCard, Send, Zap, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Enterprise SaaS",
    valueProp: "Scalable, multi-tenant platforms engineered to accelerate MRR growth and minimize churn.",
    deliverables: [
      "Role-Based Access Control (RBAC)",
      "Automated Billing Pipelines",
      "High-Availability Architecture"
    ],
    techHighlight: "Powered by Next.js & Supabase",
    icon: Cloud,
    colSpan: "md:col-span-3"
  },
  {
    title: "AI-Assisted Development",
    valueProp: "Leveraging 'Vibe Coding' and Generative AI to drastically reduce time-to-market.",
    deliverables: [
      "RAG-Enabled Knowledge Bases",
      "Autonomous Agentic Workflows",
      "Rapid Prototype Generation"
    ],
    techHighlight: "Driven by Gemini 1.5 Pro",
    icon: BrainCircuit,
    colSpan: "md:col-span-3"
  },
  {
    title: "Localized Fintech",
    valueProp: "High-trust, 'Naira-Proof' financial systems designed for the Nigerian market.",
    deliverables: [
      "Idempotent Transaction Ledgers",
      "Automated Reconciliation",
      "Fraud-Resistant Webhooks"
    ],
    techHighlight: "Secured via Monnify & Squad",
    icon: CreditCard,
    colSpan: "md:col-span-2"
  },
  {
    title: "Telegram Mini Apps",
    valueProp: "Frictionless applications deployed directly to 900M+ active Telegram users.",
    deliverables: [
      "TON Wallet Integration",
      "Native Telegram UI/UX",
      "Viral Referral Mechanics"
    ],
    techHighlight: "Built with Telegram Web SDK",
    icon: Send,
    colSpan: "md:col-span-2"
  },
  {
    title: "Offline-First PWAs",
    valueProp: "Low-data, app-like experiences engineered for retention in volatile network environments.",
    deliverables: [
      "Aggressive Edge Caching",
      "Background Sync Mutations",
      "Sub-second FCP Optimization"
    ],
    techHighlight: "Optimized via Service Workers",
    icon: Zap,
    colSpan: "md:col-span-2"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Engineering Services</h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          High-ROI technical solutions designed for scale, reliability, and market penetration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors group ${service.colSpan}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {service.valueProp}
            </p>

            <ul className="space-y-3 mb-8 mt-auto">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-white/10">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                {service.techHighlight}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
