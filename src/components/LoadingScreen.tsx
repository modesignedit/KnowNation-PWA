"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';

const logs = [
  "[BOOT]: Initializing KNOW NATION Core...",
  "[SYNC]: Connecting to Supabase Edge...",
  "[AUTH]: Verifying RC-8031547...",
  "[OPTIMIZE]: Injecting Naira-Proof Logic...",
  "[STATUS]: 99.9% Uptime Guaranteed."
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Cycle through logs
    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < logs.length - 1) return prev + 1;
        return prev;
      });
    }, 400); // 5 logs * 400ms = 2000ms

    // Complete animation after 2.5s
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(logInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* Phase 2: The Grid */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }}
      />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />

      {/* Phase 1: The Core (Hexagon) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-center w-32 h-32 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-emerald-500/20"
        />
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
          <motion.polygon 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            points="50 5 90 27 90 73 50 95 10 73 10 27" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
          />
        </svg>
      </motion.div>

      {/* Phase 3: The Logs (Terminal Style) */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 max-w-sm">
        <div className="flex items-center gap-2 mb-3 text-blue-500">
          <Terminal className="w-4 h-4" />
          <span className="text-xs font-bold tracking-widest uppercase">System Orchestration</span>
        </div>
        <div className="space-y-1.5 font-mono text-xs md:text-sm">
          <AnimatePresence mode="popLayout">
            {logs.slice(0, logIndex + 1).map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: i === logIndex ? 1 : 0.4, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${i === logIndex ? 'text-cyan-400' : 'text-blue-500/50'}`}
              >
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
