import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

// 1. Custom SVG for YouTube
const YoutubeIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.1c-.2 1.3-.3 2.8-.3 4.9 0 2.1.1 3.6.3 4.9.4 2.8 2.3 3.6 6.3 3.6h6.4c4 0 5.9-.8 6.3-3.6.2-1.3.3-2.8.3-4.9 0-2.1-.1-3.6-.3-4.9-.4-2.8-2.3-3.6-6.3-3.6H8.8c-4 0-5.9.8-6.3 3.6z"/>
    <polygon points="9.5 15.5 16.5 12 9.5 8.5 9.5 15.5"/>
  </svg>
);

// 2. Custom SVG for Instagram
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function MediaHub() {
  return (
    <section id="media" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-3">Watch & Learn</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Real Results. Real Patients.</h3>
            <p className="text-slate-600 text-lg">See our procedures in action and join our community of thousands online.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a href="https://www.youtube.com/@DrLaveena" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold hover:bg-red-100 transition-colors">
              <YoutubeIcon size={20} /> YouTube
            </a>
            <a href="https://www.instagram.com/drlaveenachoudhary" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-fuchsia-50 text-fuchsia-600 px-4 py-2 rounded-full font-bold hover:bg-fuchsia-100 transition-colors">
              <InstagramIcon size={20} /> Instagram
            </a>
          </motion.div>
        </div>

        {/* Video & Post Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* YouTube Video Mock 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video bg-slate-200 relative">
              <img src="https://images.unsplash.com/photo-1598331668921-1376bf524458?q=80&w=600&auto=format&fit=crop" alt="Treatment Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-colors">
                <PlayCircle size={64} className="text-white opacity-90 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="p-6 bg-white border border-t-0 border-slate-200 rounded-b-3xl">
              <h4 className="font-bold text-slate-900 line-clamp-2">Understanding PRP Treatments for Skin Renewal</h4>
              <p className="text-sm text-slate-500 mt-2">Dr. Laveena Choudhary</p>
            </div>
          </motion.div>

          {/* YouTube Video Mock 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video bg-slate-200 relative">
              <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop" alt="Dental Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-colors">
                <PlayCircle size={64} className="text-white opacity-90 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="p-6 bg-white border border-t-0 border-slate-200 rounded-b-3xl">
              <h4 className="font-bold text-slate-900 line-clamp-2">Painless Root Canal: What to Expect</h4>
              <p className="text-sm text-slate-500 mt-2">Dr. Laveena Choudhary</p>
            </div>
          </motion.div>

          {/* Instagram Post Mock */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-1 sm:col-span-2"
          >
            <div className="h-full bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fuchsia-100 to-orange-50 rounded-bl-full -z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop" alt="Profile" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">drlaveenachoudhary</p>
                      <p className="text-xs text-slate-500">Batla House, Delhi</p>
                    </div>
                  </div>
                  <InstagramIcon size={24} className="text-slate-400" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop" alt="Clinic Work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-sm text-slate-700 line-clamp-2"><span className="font-bold mr-1">drlaveenachoudhary</span>Bio-stimulation for lasting results. Skin renewal from within. ✨ Drop a DM for consultations!</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}