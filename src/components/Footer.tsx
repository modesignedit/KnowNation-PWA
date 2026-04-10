"use client";

import { MapPin, Phone, Terminal, MessageCircle } from 'lucide-react';
import ProjectDiscoveryForm from './ProjectDiscoveryForm';

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 md:mt-20 border-t border-white/10 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Project Inquiry Form */}
          <div className="relative z-10 w-full">
            <ProjectDiscoveryForm />
          </div>

          {/* Corporate Contact & Legal */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-6">Direct Contact</h3>
              
              <a href="https://wa.me/2349031206299" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:bg-green-500/20 transition-colors shrink-0">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm md:text-base">WhatsApp Chat</p>
                  <p className="text-xs md:text-sm text-gray-400">+234 903 120 6299</p>
                </div>
              </a>

              <a href="tel:+2349031206299" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm md:text-base">Direct Call</p>
                  <p className="text-xs md:text-sm text-gray-400">+234 903 120 6299</p>
                </div>
              </a>
            </div>

            <div className="mt-10 md:mt-12 pt-8 border-t border-white/10 space-y-4">
              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-gray-400">
                <Terminal className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="font-bold text-white tracking-wider text-sm md:text-base">KNOW NATION LIMITED</span>
                <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/10 whitespace-nowrap">RC - 8031547</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-xs md:text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <p className="leading-relaxed">Rd 27, Lekki Scheme 2, Ajah, Lagos. NG.</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-xs md:text-sm">
                <Terminal className="w-4 h-4 shrink-0" />
                <a href="https://github.com/modesignedit" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors truncate">
                  @modesignedit
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
