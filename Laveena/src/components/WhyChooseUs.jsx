import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Banknote, Users, Clock3, Star } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Advanced Technology',
    desc: 'Latest dental and cosmetology equipment for precise, effective treatments.',
    color: 'bg-[#0D9488]/10 text-[#0D9488]',
  },
  {
    icon: Shield,
    title: 'Painless Procedures',
    desc: 'Advanced anesthesia and techniques ensure a completely comfortable experience.',
    color: 'bg-[#C9A84C]/10 text-[#C9A84C]',
  },
  {
    icon: Banknote,
    title: 'Affordable Pricing',
    desc: 'Premium quality care at prices that work for every family budget.',
    color: 'bg-[#0D9488]/10 text-[#0D9488]',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Led by Dr. Laveena with over 10 years of clinical expertise and thousands of successful cases.',
    color: 'bg-[#C9A84C]/10 text-[#C9A84C]',
  },
  {
    icon: Clock3,
    title: 'Flexible Timings',
    desc: 'Convenient morning and evening slots to fit your busy schedule perfectly.',
    color: 'bg-[#0D9488]/10 text-[#0D9488]',
  },
  {
    icon: Star,
    title: '5 Star Rated',
    desc: 'Consistently rated 5 stars by patients on Google and Justdial for exceptional service.',
    color: 'bg-[#C9A84C]/10 text-[#C9A84C]',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0D9488]/5 rounded-full blur-[120px] -z-10 -translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Why Us?</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-6">
            Why Choose{' '}
            <span className="text-[#0D9488]">Dr. Laveena</span>
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            Experience the difference of personalized, premium care delivered by a team that truly cares about your health and smile.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-[#0D9488]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={26} />
              </div>

              <h4 className="text-lg font-bold text-[#0A1628] mb-3 group-hover:text-[#0D9488] transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
