import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    image: '/images/hero.jpg',
    title: 'Heydar Cultural Center',
    category: 'Civic / Cultural',
    location: 'Baku, Azerbaijan',
    year: '2023',
    size: 'large',
  },
  {
    id: 2,
    image: '/images/japanese-temple.jpg',
    title: 'Heritage Sanctuary',
    category: 'Cultural / Hospitality',
    location: 'Kanagawa, Japan',
    year: '2022',
    size: 'medium',
  },
  {
    id: 3,
    image: '/images/modern-villa.jpg',
    title: 'Cantilevered Villa',
    category: 'Residential',
    location: 'Ibiza, Spain',
    year: '2023',
    size: 'medium',
  },
  {
    id: 4,
    image: '/images/spiral-tower.jpg',
    title: 'Ribbon Chapel',
    category: 'Religious / Cultural',
    location: 'Onomichi, Japan',
    year: '2021',
    size: 'medium',
  },
  {
    id: 5,
    image: '/images/facade-detail.jpg',
    title: 'Lattice Facade Tower',
    category: 'Commercial',
    location: 'Singapore',
    year: '2022',
    size: 'small',
  },
  {
    id: 6,
    image: '/images/blueprint-sketch.jpg',
    title: 'Structural Masterplan',
    category: 'Urban Planning',
    location: 'Manila, Philippines',
    year: '2024',
    size: 'small',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="py-28 lg:py-36 bg-dark-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Our Portfolio</p>
            <h2 className="section-title max-w-lg">
              Selected
              <span className="text-gradient italic"> Works</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link to="/projects" className="btn-outline">
              View All Projects
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${
                project.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ height: project.size === 'large' ? '500px' : project.size === 'medium' ? '350px' : '280px' }}
            >
              <img
                              src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Always visible category tag */}
              <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">{project.category}</span>
              </div>

              {/* Hover overlay */}
              <div               className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-gold text-xs">{project.year}</span>
                    <span className="text-stone-600 text-xs">·</span>
                    <span className="font-mono text-stone-400 text-xs">{project.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-stone mb-4">{project.title}</h3>
                  <Link
                    to={`/projects#${project.id}`}
                    className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-4 transition-all duration-300"
                  >
                    View Project <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
