import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyAbout from './components/CompanyAbout';
import BentoGrid from './components/BentoGrid';
import ValueGrid from './components/ValueGrid';
import ServicesGrid from './components/ServicesGrid';
import Testimonials from './components/Testimonials';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div 
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans"
        >
          <Navbar />
          <ScrollToTop />
          
          {/* Global Background Gradients */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
          </div>

          <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-24">
            <Hero />
            <BentoGrid />
            <ValueGrid />
            <CompanyAbout />
            <ServicesGrid />
            <Testimonials />
            <ProjectGallery />
          </main>
          
          <div className="relative z-10">
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
