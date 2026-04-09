import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyAbout from './components/CompanyAbout';
import BentoGrid from './components/BentoGrid';
import ValueGrid from './components/ValueGrid';
import ServicesGrid from './components/ServicesGrid';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      
      {/* Global Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-24">
        <Hero />
        <CompanyAbout />
        <BentoGrid />
        <ValueGrid />
        <ServicesGrid />
        <ProjectGallery />
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
