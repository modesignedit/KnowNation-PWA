import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-500 to-white animate-shimmer">
            Crafting Digital
          </span>
          <br />
          Experiences.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          High-performance web engineering meets AI integration. Building scalable, 
          intuitive, and visually striking applications for the modern web.
        </p>
      </motion.div>
    </section>
  );
}
