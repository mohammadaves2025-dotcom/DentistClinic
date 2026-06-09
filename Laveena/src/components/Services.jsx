import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  SmilePlus,
  ChevronRight,
  Syringe,
  Heart,
  Zap,
  Sun,
  Diamond,
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'PRP & Bio-stimulation',
    desc: 'Harness your body\'s natural healing power with platelet-rich plasma therapy for skin renewal and hair growth.',
    color: 'from-[#0D9488] to-[#14b8a6]',
  },
  {
    icon: Syringe,
    title: 'Anti-aging Treatments',
    desc: 'Advanced facial rejuvenation techniques that turn back the clock, giving you youthful, radiant skin.',
    color: 'from-[#0D9488] to-[#14b8a6]',
  },
  {
    icon: Heart,
    title: 'Acne Scar Reduction',
    desc: 'Specialized dermatological treatments to minimize acne scars and restore smooth, even skin texture.',
    color: 'from-[#0D9488] to-[#14b8a6]',
  },
  {
    icon: Diamond,
    title: 'Smile Makeovers',
    desc: 'Complete smile transformations using veneers, crowns, and cosmetic bonding for a flawless smile.',
    color: 'from-[#C9A84C] to-[#d4af37]',
  },
  {
    icon: Sun,
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening treatments that brighten your smile several shades in a single session.',
    color: 'from-[#C9A84C] to-[#d4af37]',
  },
  {
    icon: Zap,
    title: 'Root Canal Treatment',
    desc: 'Painless, precision root canal therapy using the latest rotary endodontics technology.',
    color: 'from-[#C9A84C] to-[#d4af37]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D9488]/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-6">
            Comprehensive Care for{' '}
            <span className="text-[#0D9488]">Face & Smile</span>
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            State-of-the-art facilities offering bespoke cosmetic treatments and advanced dental procedures tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl border border-slate-100 hover:border-[#0D9488]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0D9488]/5 overflow-hidden"
            >
              {/* Gradient top border */}
              <div className={`h-1 w-full bg-gradient-to-r ${service.color} rounded-t-2xl`} />

              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A1628] to-[#1e3a5e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} className="text-white" />
                </div>

                <h4 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#0D9488] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  {service.desc}
                </p>

                <a
                  href="https://wa.me/918445247520"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-[#0D9488] font-semibold text-sm hover:text-[#0f766e] group/link"
                >
                  Learn More
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two main categories show */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-[#0A1628] rounded-3xl p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0D9488]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <Sparkles size={40} className="text-[#0D9488] mb-6" />
            <h4 className="text-2xl font-bold font-display mb-3">Cosmetology</h4>
            <p className="text-slate-300 leading-relaxed mb-6">
              Rejuvenate your skin with our advanced clinical treatments. We specialize in non-surgical facial aesthetics and skin renewal.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-slate-400">
              {['PRP & Bio-stimulation', 'Anti-aging Treatments', 'Acne Scar Reduction', 'Laser Hair Removal'].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 relative overflow-hidden group hover:border-[#C9A84C]/30 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9A84C]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <SmilePlus size={40} className="text-[#C9A84C] mb-6" />
            <h4 className="text-2xl font-bold font-display text-[#0A1628] mb-3">Advanced Dentistry</h4>
            <p className="text-slate-600 leading-relaxed mb-6">
              From routine checkups to complex smile makeovers. Pain-free, precise, and utilizing the latest dental technology.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-slate-500">
              {['Painless Root Canals', 'Invisible Aligners', 'Teeth Whitening', 'Dental Implants'].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
