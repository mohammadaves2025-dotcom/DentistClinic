import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Aisha R.',
    location: 'Jamia Nagar',
    text: "Dr. Laveena is incredible. The PRP treatment for my skin showed results in just two sessions. The clinic in Batla House is spotless and the staff is so welcoming.",
    service: 'Cosmetology',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sameer K.',
    location: 'Okhla',
    text: "I was terrified of getting a root canal, but she made it completely painless. Best dentist in the area, hands down. Highly recommend her for general dentistry.",
    service: 'Dentistry',
    rating: 5,
  },
  {
    id: 3,
    name: 'Fatima S.',
    location: 'New Friends Colony',
    text: "Got bio-stimulation done here. The results are amazing, my skin feels renewed. Dr. Laveena takes the time to explain everything before the procedure starts.",
    service: 'Cosmetology',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ahmed K.',
    location: 'Batla House',
    text: "Had my teeth whitening done. The results were beyond my expectations. The clinic is clean, modern, and the staff is professional. Will recommend to everyone.",
    service: 'Dentistry',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = reviews.length - 1;
      if (nextIndex >= reviews.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: { x: direction > 0 ? 300 : -300, opacity: 0 },
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: { zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0 },
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0A1628] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D9488]/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Patient Stories</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Loved by Our <span className="text-[#0D9488]">Community</span>
          </h3>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-[#C9A84C] text-[#C9A84C]" />
            ))}
            <span className="text-white/80 font-medium ml-2 text-sm">4.6/5 on Justdial</span>
          </div>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative h-[400px] md:h-[320px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="absolute w-full"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
                  <Quote size={48} className="text-[#0D9488]/30 mx-auto mb-6" />

                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-[#C9A84C] text-[#C9A84C]" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto">
                    "{reviews[currentIndex].text}"
                  </p>

                  <div>
                    <h4 className="font-bold text-white text-lg">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-[#0D9488]">{reviews[currentIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#0D9488] hover:bg-[#0D9488]/10 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-[#0D9488]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#0D9488] hover:bg-[#0D9488]/10 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
