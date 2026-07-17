import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Globe, Zap } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Award-Winning Design',
    desc: '18 international awards recognizing our commitment to excellence and innovation.',
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    desc: 'We listen deeply to each client, co-creating spaces that reflect their unique vision.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    desc: 'Operating across 32 countries with a sensitivity to local culture and materials.',
  },
  {
    icon: Zap,
    title: 'Sustainable Future',
    desc: 'Every project meets LEED standards — beauty and responsibility are never mutually exclusive.',
  },
];

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-28 lg:py-36 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Image stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/blueprints.jpg"
                alt="Architectural blueprints and design process"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -bottom-8 -right-8 bg-dark-200 border border-dark-300 p-6 max-w-[220px] shadow-2xl"
            >
              <div className="font-mono text-gold text-3xl font-bold mb-1">15<span className="text-lg">+</span></div>
              <div className="text-stone-400 text-sm leading-snug">Years crafting timeless architectural narratives</div>
            </motion.div>

            {/* Accent line */}
            <div className="absolute -left-6 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="section-label">About Arcana</p>
            <h2 className="section-title mb-6">
              Architecture Is Our
              <span className="text-gradient italic block"> Language</span>
            </h2>
            <p className="section-subtitle mb-6">
              Founded in 2009 by visionary architect Marcus Llanes, Arcana Architecture has grown into a globally recognized studio with offices in Manila, Tokyo, and Barcelona.
            </p>
            <p className="text-stone-600 text-base leading-relaxed mb-10">
              We believe every structure tells a story. From intimate residential sanctuaries to monumental civic landmarks, we pour our obsession for detail, material, and human experience into every project we undertake. Our multidisciplinary team of 80+ architects, engineers, and designers operates at the intersection of art and science.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '250+', label: 'Projects Built' },
                { value: '80+', label: 'Team Members' },
                { value: '32', label: 'Countries' },
                { value: '18', label: 'Design Awards' },
              ].map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="font-display font-bold text-3xl text-gold mb-1">{s.value}</div>
                  <div className="text-stone-600 text-sm uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="section-label justify-center">Our Principles</p>
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-stone">
              What Drives Us Forward
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                className="card-glass p-8 group"
              >
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                  <v.icon size={20} className="text-gold group-hover:text-dark transition-colors duration-300" />
                </div>
                <h4 className="font-semibold text-stone text-lg mb-3">{v.title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
