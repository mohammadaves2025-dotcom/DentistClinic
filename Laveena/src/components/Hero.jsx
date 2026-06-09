import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Star, ShieldCheck, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Soft decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#0D9488]/[0.03] rounded-full blur-[60px]" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#0D9488]/[0.03] rounded-full blur-[50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/5 border border-[#0D9488]/10 rounded-full"
            >
              <Star size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
              <span className="text-[#0A1628] text-xs font-bold uppercase tracking-widest">
                Jamia Nagar's #1 Rated Clinic
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] text-[#0A1628]"
            >
              Transforming{' '}
              <span className="text-[#0D9488]">Smiles</span>
              <br />
              & Renewing{' '}
              <span className="text-[#0D9488]">Skin</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
              className="text-lg text-slate-500 leading-relaxed max-w-xl"
            >
              Experience world-class dentistry and cosmetology with Dr. Laveena at LBS Dentofacial Centre, Jamia Nagar. Advanced treatments, pain-free procedures, and stunning results.
            </motion.p>

            {/* Two CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/918445247520"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#0D9488] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#0f766e] transition-all duration-300 shadow-lg shadow-[#0D9488]/15 hover:shadow-xl hover:shadow-[#0D9488]/20 hover:-translate-y-0.5"
              >
                <Calendar size={20} />
                Book Appointment
              </a>
              <a
                href="https://wa.me/918445247520"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0A1628] border border-slate-200 px-8 py-4 rounded-full font-bold text-base hover:border-[#0D9488]/30 hover:bg-[#0D9488]/[0.02] transition-all duration-300"
              >
                <MessageCircle size={20} className="text-[#0D9488]" />
                WhatsApp Now
              </a>
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-slate-100 rounded-[2.5rem]" />
              <div className="absolute -inset-8 border border-slate-50 rounded-[3rem]" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                  alt="Dr. Laveena Dental Clinic"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              </div>

              {/* Floating trust badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-8 top-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0D9488]/10 rounded-full flex items-center justify-center">
                    <ShieldCheck size={20} className="text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Certified Expert</p>
                    <p className="text-sm font-bold text-[#0A1628]">PRP Specialist</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 bottom-16 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-full flex items-center justify-center">
                    <Users size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Happy Patients</p>
                    <p className="text-sm font-bold text-[#0A1628]">1000+ Served</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badge Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 bg-[#F8FAFC] border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Star, label: '5★ Rated', desc: 'On Justdial & Google', color: 'text-[#C9A84C]' },
              { icon: ShieldCheck, label: '1000+ Patients', desc: 'Served & Satisfied', color: 'text-[#0D9488]' },
              { icon: Clock, label: '10+ Years', desc: 'Of Clinical Excellence', color: 'text-[#0D9488]' },
              { icon: Users, label: '#1 Clinic', desc: 'In Jamia Nagar, Delhi', color: 'text-[#C9A84C]' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon size={20} className={item.color} />
                <div>
                  <p className="text-[#0A1628] font-bold text-sm">{item.label}</p>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
