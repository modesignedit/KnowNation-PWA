import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "KNOW NATION transformed our manual booking process into a seamless automated system. The custom payment integration was flawless and perfectly tailored to our needs.",
    name: "Management Team",
    company: "Vietnam Burger Unisex Salon",
    imageSeed: "portrait,salon"
  },
  {
    quote: "Their expertise in modern web architecture and AI workflows helped us launch our MVP 3x faster than expected. Truly world-class engineering right here in Lagos.",
    name: "Emmanuel O.",
    company: "Fintech Startup Founder",
    imageSeed: "portrait,tech"
  },
  {
    quote: "The corporate web presence they built for us significantly boosted our lead generation. Highly recommend their professional, scalable, and Naira-proof approach.",
    name: "Operations Director",
    company: "Sunteck Global Impact Ltd",
    imageSeed: "portrait,corporate"
  }
];

export default function Testimonials() {
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
    <section id="testimonials" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our partners have to say about our engineering impact.
        </p>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative flex flex-col hover:bg-white/10 transition-colors"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
            
            <div className="relative z-10 flex-grow">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">"{testimonial.quote}"</p>
            </div>

            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
              <img
                src={`https://picsum.photos/seed/${testimonial.imageSeed}/100/100`}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border border-white/10 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
