import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[820px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Heydar Aliyev Center — iconic modern architecture"
          className={`w-full h-full object-cover object-center transition-transform duration-[10s] ease-out ${
            loaded ? 'scale-105' : 'scale-100'
          }`}
          onLoad={() => setLoaded(true)}
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center lg:-translate-y-16">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-label mb-6"
          >
            Est. 2009 · Award Winning Firm
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stone leading-[1.05] mb-6"
          >
            Designing
            <br />
            <span className="text-gradient italic">Tomorrow's</span>
            <br />
            Landmarks
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-stone-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            We craft architectural masterpieces that transcend time — blending innovation,
            sustainability, and artistry into every structure we create.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/projects" className="btn-primary">
              View Our Work
            </Link>
            <Link to="/about" className="btn-outline">
              <Play size={14} />
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-6 lg:left-12 right-6 lg:right-12"
        >
          <div className="flex flex-wrap gap-0 border border-dark-300 bg-dark/60 backdrop-blur-md divide-x divide-dark-300 max-w-2xl">
            {[
              { value: '250+', label: 'Projects Completed' },
              { value: '18', label: 'Design Awards' },
              { value: '32', label: 'Countries' },
              { value: '15Y', label: 'Of Excellence' },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 min-w-[100px] px-5 py-4">
                <div className="font-display font-bold text-xl text-gold">{stat.value}</div>
                <div className="text-stone-600 text-xs uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-12 flex flex-col items-center gap-2 text-stone-600 hover:text-gold transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] rotate-90 mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} className="text-gold" />
        </motion.div>
      </motion.button>
    </section>
  );
}
