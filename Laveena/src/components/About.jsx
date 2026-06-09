import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Teal frame */}
            <div className="absolute -inset-4 border-2 border-[#0D9488]/20 rounded-3xl" />
            <div className="absolute -inset-8 border border-[#0D9488]/10 rounded-[2rem]" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                alt="Dr. Laveena"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#14b8a6] rounded-xl flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0A1628]">10+</p>
                  <p className="text-sm text-slate-500">Years of Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">
                About Dr. Laveena
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                Meet Your Trusted{' '}
                <span className="text-[#0D9488]">Dental Expert</span>
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              Dr. Laveena Choudhary is a highly skilled dental surgeon and cosmetologist dedicated to transforming smiles and renewing skin in Jamia Nagar, Delhi. With over 10 years of clinical excellence, she brings a blend of precision, empathy, and cutting-edge technology to every treatment.
            </p>

            <p className="text-slate-600 leading-relaxed">
              At LBS Dentofacial Centre, she leads a team committed to delivering pain-free dental procedures and world-class cosmetology treatments. Her expertise spans from painless root canals and smile makeovers to advanced PRP therapies and anti-aging solutions.
            </p>

            {/* Qualifications */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: GraduationCap, label: 'BDS, MDS', desc: 'Dental Surgeon' },
                { icon: Heart, label: 'Certified', desc: 'Cosmetologist' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                >
                  <div className="w-10 h-10 bg-[#0D9488]/10 rounded-lg flex items-center justify-center">
                    <item.icon size={20} className="text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1628] text-sm">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-[#0D9488]/10 rounded-full border border-[#0D9488]/20">
              <ShieldCheck size={20} className="text-[#0D9488]" />
              <span className="text-[#0A1628] text-sm font-semibold">
                Trusted by 1000+ Happy Patients
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
