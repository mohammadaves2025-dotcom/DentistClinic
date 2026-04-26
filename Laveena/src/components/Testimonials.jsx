import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Aisha R.",
    location: "Jamia Nagar",
    text: "Dr. Laveena is incredible. The PRP treatment for my skin showed results in just two sessions. The clinic in Batla House is spotless and the staff is so welcoming.",
    service: "Cosmetology",
    rating: 5
  },
  {
    id: 2,
    name: "Sameer K.",
    location: "Okhla",
    text: "I was terrified of getting a root canal, but she made it completely painless. Best dentist in the area, hands down. Highly recommend her for general dentistry.",
    service: "Dentistry",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima S.",
    location: "New Friends Colony",
    text: "Got bio-stimulation done here. The results are amazing, my skin feels renewed. Dr. Laveena takes the time to explain everything before the procedure starts.",
    service: "Cosmetology",
    rating: 4
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = reviews.length - 1;
      if (nextIndex >= reviews.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-24 bg-teal-600 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-emerald-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-teal-200 font-bold tracking-wide uppercase text-sm mb-3">Patient Stories</h2>
          <h3 className="text-4xl font-extrabold text-white mb-4">Loved by Our Community</h3>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white font-medium ml-2">4.6/5 on Justdial</span>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-2xl"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-teal-900/20 text-center relative mx-4 md:mx-0">
                <Quote size={48} className="text-teal-100 absolute top-6 left-6 rotate-180 -z-0" />
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    {reviews[currentIndex].service}
                  </span>
                  
                  <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-8">
                    "{reviews[currentIndex].text}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-slate-900">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-slate-500">{reviews[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={() => paginate(-1)}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-white" : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}