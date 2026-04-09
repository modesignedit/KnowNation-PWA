"use client";

import { MapPin, Phone, Terminal, ArrowRight, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Project Inquiry Form */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Start a Project</h3>
            <p className="text-gray-400 mb-8">Partner with KNOW NATION LIMITED for enterprise-grade engineering.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name / Company" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                />
              </div>
              <textarea 
                placeholder="Project Details & Objectives..." 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
              />
              <button className="w-full group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl px-4 py-3 transition-colors">
                Submit Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Corporate Contact & Legal */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Direct Contact</h3>
              
              <a href="https://wa.me/2349031206299" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp Chat</p>
                  <p className="text-sm text-gray-400">+234 903 120 6299</p>
                </div>
              </a>

              <a href="tel:+2349031206299" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-medium">Direct Call</p>
                  <p className="text-sm text-gray-400">+234 903 120 6299</p>
                </div>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Terminal className="w-4 h-4 text-blue-500" />
                <span className="font-bold text-white tracking-wider">KNOW NATION LIMITED</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/10">RC - 8031547</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <p>Rd 27, Lekki Scheme 2, Ajah, Lagos State, Nigeria.</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Terminal className="w-4 h-4 shrink-0" />
                <a href="https://github.com/modesignedit" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  github.com/modesignedit
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
