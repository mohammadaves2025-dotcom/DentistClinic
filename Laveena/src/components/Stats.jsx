import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Calendar, Sparkles, Star } from 'lucide-react';

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  React.useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const duration = 2500;
    const startCount = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startCount + (target - startCount) * eased));
      if (progress < 1) window.requestAnimationFrame(step);
      else setCount(target);
    };
    window.requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, target: 1000, suffix: '+', label: 'Happy Patients', iconColor: 'text-[#C9A84C]' },
    { icon: Calendar, target: 10, suffix: '+', label: 'Years Experience', iconColor: 'text-[#0D9488]' },
    { icon: Sparkles, target: 50, suffix: '+', label: 'Services Offered', iconColor: 'text-[#C9A84C]' },
    { icon: Star, target: 5, suffix: '', label: 'Star Rating', iconColor: 'text-[#0D9488]' },
  ];

  return (
    <section ref={ref} className="bg-[#0A1628] py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Our Track Record</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Numbers That Speak</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#0D9488]/30 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 mb-4 ${stat.iconColor}`}
              >
                <stat.icon size={28} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{isVisible && <CountUp target={stat.target} suffix={stat.suffix} />}</div>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
