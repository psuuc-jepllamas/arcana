import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Building2, PenTool, TreePine, Ruler, Layers } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Architectural Design',
    desc: 'From concept sketches to construction documents, we craft designs that inspire and endure. Every line is intentional.',
    tags: ['Schematic Design', 'Design Development', 'Construction Docs'],
  },
  {
    icon: Ruler,
    title: 'Urban Planning',
    desc: 'Shaping city districts and master plans that foster community, connectivity, and sustainable growth.',
    tags: ['Master Planning', 'Zoning', 'Community Design'],
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    desc: 'Iconic office towers, retail destinations, and hospitality environments that define skylines and brands.',
    tags: ['Offices', 'Hotels', 'Retail'],
  },
  {
    icon: Home,
    title: 'Luxury Residential',
    desc: 'Private homes and estates tailored to the individual — spaces that feel deeply personal yet architecturally extraordinary.',
    tags: ['Villas', 'Penthouses', 'Estates'],
  },
  {
    icon: TreePine,
    title: 'Sustainable Design',
    desc: 'LEED-certified buildings that reduce carbon footprint without compromising on aesthetics or performance.',
    tags: ['LEED', 'Net-Zero', 'Biophilic'],
  },
  {
    icon: Layers,
    title: 'Interior Architecture',
    desc: 'Seamlessly merging interior and exterior — we design spaces from the inside out for a unified experience.',
    tags: ['Space Planning', 'Material Selection', 'Lighting'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="py-28 lg:py-36 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,169,110,0.5) 60px, rgba(201,169,110,0.5) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,169,110,0.5) 60px, rgba(201,169,110,0.5) 61px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center">What We Do</p>
          <h2 className="section-title mb-6">
            Our Core
            <span className="text-gradient italic"> Services</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A full spectrum of architectural and design services — from vision to completion.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="card-glass p-8 group relative overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 font-mono text-5xl font-bold text-dark-300 select-none transition-colors duration-300 group-hover:text-dark-200">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 border border-gold/30 flex items-center justify-center mb-6 transition-all duration-400 group-hover:bg-gold group-hover:border-gold relative z-10">
                <service.icon
                  size={22}
                  className="text-gold transition-colors duration-400 group-hover:text-dark"
                />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-stone mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-5 relative z-10">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dark-300 text-stone-400 font-mono text-[10px] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
