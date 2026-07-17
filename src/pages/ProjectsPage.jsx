import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import { useState } from 'react';

const allProjects = [
  {
    id: 1,
    image: '/images/hero.jpg',
    title: 'Heydar Cultural Center',
    category: 'Civic',
    location: 'Baku, Azerbaijan',
    year: '2023',
    area: '57,500 m²',
    desc: 'A landmark cultural center that redefines civic architecture through parametric design and seamless integration of public spaces.',
  },
  {
    id: 2,
    image: '/images/japanese-temple.jpg',
    title: 'Heritage Sanctuary',
    category: 'Cultural',
    location: 'Kanagawa, Japan',
    year: '2022',
    area: '3,200 m²',
    desc: 'A reverent interpretation of traditional Japanese temple architecture, blending ancient craft with contemporary spatial thinking.',
  },
  {
    id: 3,
    image: '/images/modern-villa.jpg',
    title: 'Cantilevered Villa',
    category: 'Residential',
    location: 'Ibiza, Spain',
    year: '2023',
    area: '820 m²',
    desc: 'An audacious private residence where bold geometric cantilevers meet a serene Mediterranean landscape.',
  },
  {
    id: 4,
    image: '/images/spiral-tower.jpg',
    title: 'Ribbon Chapel',
    category: 'Cultural',
    location: 'Onomichi, Japan',
    year: '2021',
    area: '540 m²',
    desc: 'Two interlocking spiral staircases create a breathtaking structure that celebrates the union of opposites.',
  },
  {
    id: 5,
    image: '/images/facade-detail.jpg',
    title: 'Lattice Facade Tower',
    category: 'Commercial',
    location: 'Singapore',
    year: '2022',
    area: '18,000 m²',
    desc: 'A commercial tower whose perforated brick skin filters light beautifully while reducing solar heat gain by 40%.',
  },
  {
    id: 6,
    image: '/images/blueprint-sketch.jpg',
    title: 'Urban Masterplan — BGC',
    category: 'Planning',
    location: 'Manila, Philippines',
    year: '2024',
    area: '12.5 hectares',
    desc: 'A mixed-use urban masterplan for Bonifacio Global City featuring green corridors, transit nodes, and cultural anchors.',
  },
];

const categories = ['All', 'Civic', 'Cultural', 'Residential', 'Commercial', 'Planning'];

export default function ProjectsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-dark pt-28">
      {/* Page Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/blueprint-sketch.jpg"
            alt="architectural sketch"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="section-label mb-4">Portfolio</p>
            <h1 className="section-title mb-6">
              All
              <span className="text-gradient italic"> Projects</span>
            </h1>
            <p className="section-subtitle">
              250+ completed projects across 32 countries. From intimate residences to iconic civic landmarks.
            </p>
          </motion.div>
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <div className="flex items-center gap-2 text-stone-600 mr-4">
            <Filter size={14} />
            <span className="font-mono text-xs uppercase tracking-widest">Filter</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-gold text-dark border-gold'
                  : 'border-dark-300 text-stone-600 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              id={String(project.id)}
              className="group card-glass overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-dark/80 backdrop-blur-sm px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-gold text-xs">{project.year}</span>
                  <span className="text-dark-300">·</span>
                  <span className="font-mono text-stone-600 text-xs">{project.area}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-stone mb-2">{project.title}</h3>
                <p className="text-stone-600 text-xs mb-1">{project.location}</p>
                <p className="text-stone-600 text-sm leading-relaxed mt-3 mb-5">{project.desc}</p>
                <a
                  href={`#${project.id}`}
                  className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-4 transition-all duration-300"
                >
                  View Details <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
