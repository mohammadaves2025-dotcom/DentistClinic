import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const heroImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop";

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">
          <Star size={16} className="fill-amber-400 text-amber-400" />
          <span className="text-slate-900">4.6/5</span> Rating on Justdial in Jamia Nagar
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
          Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Dentistry</span> & Cosmetology.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
          Transforming smiles and renewing skin from within. Experience premium, pain-free care with Dr. Laveena Choudhary at Batla House.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="https://wa.me/918445247520" 
            target="_blank" 
            rel="noreferrer"
            className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20"
          >
            <Calendar size={20} /> Book Appointment
          </a>
          <a 
            href="#directions" 
            className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            <MapPin size={20} /> View Clinic
          </a>
        </div>
      </motion.div>

      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
         className="relative lg:h-[600px] flex items-center justify-center"
      >
        <div className="aspect-[4/5] w-full max-w-md rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-teal-900/10 border-8 border-white z-10">
           <img 
              src={heroImage} 
              alt="Dr. Laveena Cosmetology Treatment" 
              className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-10 -left-6 lg:-left-12 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-slate-100"
        >
           <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
              <ShieldCheck size={28} />
           </div>
           <div>
             <p className="text-slate-900 font-extrabold">Certified Expert</p>
             <p className="text-sm font-medium text-slate-500">PRP & Bio-stimulation</p>
           </div>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-100 to-emerald-50 rounded-full blur-3xl -z-10 opacity-70"></div>
      </motion.div>
    </main>
  );
}