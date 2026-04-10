"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group shrink-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1kiixpclqJ2ULURouokVGGFrF7dWA7mHp" 
            alt="Know Nation Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[200px] sm:max-w-[250px] object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white transition-all hover:border-blue-500/50"
          >
            Start Project
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-2 shadow-2xl md:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white py-3 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full text-center px-5 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-base font-medium text-white transition-colors"
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
