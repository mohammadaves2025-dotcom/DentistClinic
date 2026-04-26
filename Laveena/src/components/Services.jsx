import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, SmilePlus, ChevronRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Comprehensive Care for <br/>Face & Smile.</h3>
          <p className="text-slate-600 text-lg">State-of-the-art facilities offering bespoke cosmetic treatments and advanced dental procedures.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-600 mb-8 group-hover:scale-110 transition-transform duration-300">
              <Sparkles size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">LBS Cosmetology</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Rejuvenate your skin with our advanced clinical treatments. We specialize in non-surgical facial aesthetics and skin renewal.
            </p>
            <ul className="space-y-3 mb-8">
              {['PRP & Bio-stimulation', 'Anti-aging Treatments', 'Acne Scar Reduction', 'Laser Hair Removal'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 group/link">
              Explore Cosmetology 
              <ChevronRight size={18} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 shadow-sm"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-300">
              <SmilePlus size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Advanced Dentistry</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              From routine checkups to complex smile makeovers. Pain-free, precise, and utilizing the latest dental technology.
            </p>
            <ul className="space-y-3 mb-8">
              {['Painless Root Canals', 'Invisible Aligners', 'Teeth Whitening', 'Dental Implants'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 group/link">
              Explore Dentistry 
              <ChevronRight size={18} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}