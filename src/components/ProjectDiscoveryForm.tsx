"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ChevronDown, Wallet, Layers, Loader2, CheckCircle2, MapPin, Terminal, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const placeholders = [
  "What is the primary goal? (e.g., Increase sales, automate bookings, launch MVP)",
  "Who is the target audience? (e.g., Nigerian youth, corporate hotels, crypto traders)",
  "What is the \"must-have\" feature? (e.g., Monnify integration, Telegram bot, Offline support)"
];

export default function ProjectDiscoveryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState(0); // 0: none, 1: calc, 2: verify, 3: success
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  
  // Validation State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % placeholders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = "Please enter a valid name or company (min 2 characters).";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!selectedCategory) {
      newErrors.category = "Please select a project type.";
    }
    
    if (!budget) {
      newErrors.budget = "Please select a budget range.";
    }
    
    if (!details.trim() || details.trim().length < 10) {
      newErrors.details = "Please provide more details about your vision (min 10 characters).";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStep(1);
    
    // Step 1: Calculating architecture
    setTimeout(() => {
      setSubmitStep(2); // Step 2: Verifying Naira-Proof Payment Logic
    }, 2000);

    setTimeout(() => {
      setSubmitStep(3); // Step 3: Success
    }, 4000);
      
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStep(0);
      // Reset form on success
      setName("");
      setEmail("");
      setSelectedCategory("");
      setBudget("");
      setDetails("");
    }, 7000);
  };

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

  return (
    <div className="relative w-full">
      <motion.form 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit} 
        className="space-y-5 bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Project Discovery</h3>
          <p className="text-gray-400 text-sm">
            Articulate your vision. We'll engineer the architecture.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text" 
              value={name}
              onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({...errors, name: ''}); }}
              placeholder="Name / Company" 
              className={`w-full bg-black/40 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/5 transition-all`} 
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>
            )}
          </div>
          <div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({...errors, email: ''}); }}
              placeholder="Company Email" 
              className={`w-full bg-black/40 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/5 transition-all`} 
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>
            )}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Layers className={`w-5 h-5 ${errors.category ? 'text-red-400' : 'text-gray-400'}`} />
          </div>
          <select 
            value={selectedCategory}
            onChange={(e) => { setSelectedCategory(e.target.value); if (errors.category) setErrors({...errors, category: ''}); }}
            className={`w-full bg-black/40 border ${errors.category ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl pl-12 pr-10 py-3 text-sm md:text-base text-white focus:outline-none focus:bg-white/5 transition-all appearance-none cursor-pointer`}
          >
            <option value="" disabled className="text-gray-500">Select Project Type</option>
            <option value="High-Conversion Landing Page" className="bg-[#050505] text-white">High-Conversion Landing Page (Performance Optimized)</option>
            <option value="SaaS & Business Automation" className="bg-[#050505] text-white">SaaS & Business Automation (Internal Portals/CRMs)</option>
            <option value="Fintech & P2P Marketplaces" className="bg-[#050505] text-white">Fintech & P2P Marketplaces (Naira-Proof Payments)</option>
            <option value="AI-Native Applications" className="bg-[#050505] text-white">AI-Native Applications (RAG & Agentic Workflows)</option>
            <option value="Telegram Mini App" className="bg-[#050505] text-white">Telegram Mini App (TMA & Web3)</option>
            <option value="E-commerce & High-Perf PWAs" className="bg-[#050505] text-white">E-commerce & High-Perf PWAs</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          {errors.category && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.category}</p>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Wallet className={`w-5 h-5 ${errors.budget ? 'text-red-400' : 'text-gray-400'}`} />
          </div>
          <select 
            value={budget}
            onChange={(e) => { setBudget(e.target.value); if (errors.budget) setErrors({...errors, budget: ''}); }}
            className={`w-full bg-black/40 border ${errors.budget ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl pl-12 pr-10 py-3 text-sm md:text-base text-white focus:outline-none focus:bg-white/5 transition-all appearance-none cursor-pointer`}
          >
            <option value="" disabled className="text-gray-500">Select Budget Range (NGN)</option>
            <option value="1.5m-3.5m" className="bg-[#050505] text-white">₦1.5M – ₦3.5M (Landing Page / Mini-Site)</option>
            <option value="3.5m-7m" className="bg-[#050505] text-white">₦3.5M – ₦7M (Lean MVP)</option>
            <option value="7m-15m" className="bg-[#050505] text-white">₦7M – ₦15M (Full SaaS Platform)</option>
            <option value="15m-30m" className="bg-[#050505] text-white">₦15M – ₦30M (Enterprise / AI / Fintech)</option>
            <option value="30m+" className="bg-[#050505] text-white">₦30M+ (Custom Infrastructure)</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          {errors.budget && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.budget}</p>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-3">
          <div className="flex items-start gap-3 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
            <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-blue-200/80 leading-relaxed">
              <span className="font-semibold text-blue-300">Prompt Guide:</span> Tell us about your audience, revenue model, and specific needs (e.g., Monnify integration, AI features).
            </p>
          </div>
          <div>
            <textarea 
              value={details}
              onChange={(e) => { setDetails(e.target.value); if (errors.details) setErrors({...errors, details: ''}); }}
              placeholder={placeholders[placeholderIdx]} 
              rows={5} 
              className={`w-full bg-black/40 border ${errors.details ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/5 transition-all resize-none`} 
            />
            {errors.details && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.details}</p>
            )}
          </div>
        </motion.div>

        <motion.button 
          variants={itemVariants}
          disabled={isSubmitting} 
          className="w-full group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-medium rounded-xl px-4 py-4 transition-colors"
        >
          {isSubmitting ? 'Processing Vision...' : 'Submit Discovery Brief'}
          {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        </motion.button>

        <motion.div variants={itemVariants} className="pt-4 border-t border-white/10 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-gray-400">
            <Terminal className="w-3 h-3 text-blue-500" />
            <span className="text-[10px] uppercase tracking-widest font-medium text-white">
              KNOW NATION LIMITED
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 border border-white/10">
              RC - 8031547
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-[10px] uppercase tracking-wider">
            <MapPin className="w-3 h-3" />
            <span>Rd 27, Lekki Scheme 2, Ajah, Lagos. NG.</span>
          </div>
        </motion.div>
      </motion.form>

      {/* Vibe Coding Easter Egg Toast */}
      <AnimatePresence>
        {submitStep > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-max max-w-[90vw] bg-[#050505]/95 backdrop-blur-xl border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] rounded-2xl p-4 flex items-center gap-4 overflow-hidden"
          >
            {/* Progress Bar Background */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
              <motion.div 
                className="h-full bg-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: submitStep === 1 ? "33%" : submitStep === 2 ? "66%" : "100%" }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className={`p-2 rounded-full border ${submitStep === 3 ? 'bg-green-500/20 border-green-500/30 text-green-400' : 'bg-blue-500/20 border-blue-500/30 text-blue-400'}`}>
              {submitStep === 3 ? <CheckCircle2 className="w-5 h-5" /> : <Loader2 className="w-5 h-5 animate-spin" />}
            </div>
            <div className="pr-4">
              <p className="text-sm text-white font-medium mb-0.5">
                {submitStep === 1 && `Calculating architecture for ${selectedCategory || 'project'}...`}
                {submitStep === 2 && "Verifying Naira-Proof Payment Logic..."}
                {submitStep === 3 && "Success! Our team will reach out."}
              </p>
              <p className="text-xs text-gray-400">
                {submitStep === 3 ? "Analysis complete." : "Vibe Analysis in progress..."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
