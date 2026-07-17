import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const team = [
  {
    name: 'Marcus Llanes',
    role: 'Principal Architect & Founder',
    image: '/images/facade-detail.jpg',
    bio: 'Graduate of Harvard GSD, Marcus founded Arcana in 2009 after a decade at Zaha Hadid Architects. His work spans 5 continents.',
  },
  {
    name: 'Sofia Reyes',
    role: 'Design Director',
    image: '/images/modern-villa.jpg',
    bio: 'MIT-educated and Pritzker Prize jury member, Sofia leads conceptual development across all studio projects.',
  },
  {
    name: 'Kenji Yamamoto',
    role: 'Head of Sustainability',
    image: '/images/japanese-temple.jpg',
    bio: 'Pioneering zero-carbon building strategies for 12+ years, Kenji ensures every project achieves LEED Platinum.',
  },
  {
    name: 'Elena Vasquez',
    role: 'Urban Planning Director',
    image: '/images/spiral-tower.jpg',
    bio: 'Former UN-Habitat advisor, Elena leads masterplanning projects across Asia, Europe, and Latin America.',
  },
];

const awards = [
  { year: '2024', name: 'Pritzker Architecture Prize', org: 'International' },
  { year: '2023', name: 'AIA Gold Medal', org: 'American Institute of Architects' },
  { year: '2023', name: 'RIBA International Award', org: 'UK' },
  { year: '2022', name: 'World Architecture Festival — Winner', org: 'Berlin' },
  { year: '2022', name: 'Dezeen Award — Studio of the Year', org: 'UK' },
  { year: '2021', name: 'Aga Khan Award for Architecture', org: 'Switzerland' },
];

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-dark pt-28">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Heydar Aliyev Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="section-label mb-4">Our Story</p>
            <h1 className="section-title mb-6 max-w-2xl">
              We Believe Architecture
              <span className="text-gradient italic block"> Changes Lives</span>
            </h1>
            <p className="section-subtitle max-w-lg">
              Founded in 2009, Arcana Architecture has grown from a single-room studio in Manila into a globally recognized practice with 80+ creatives across three continents.
            </p>
          </motion.div>
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-16 mb-28 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Our Mission</p>
            <h2 className="font-display font-bold text-4xl text-stone mb-6">
              Architecture as a
              <span className="text-gradient italic"> Human Right</span>
            </h2>
            <p className="text-stone-400 text-base leading-relaxed mb-5">
              We believe every person deserves to inhabit beautifully designed spaces. From private residences to public parks, from corporate offices to sacred temples — architecture shapes how we feel, how we connect, and who we become.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mb-8">
              Our multidisciplinary team operates with a single guiding principle: that extraordinary design should serve people first. We listen deeply, challenge assumptions, and obsess over every detail from the grand gesture to the door handle.
            </p>
            <Link to="/contact" className="btn-outline">
              Work With Us <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/images/blueprints.jpg"
              alt="Architectural blueprints"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold px-6 py-4">
              <div className="font-display font-bold text-dark text-3xl">15+</div>
              <div className="text-dark/70 text-sm font-medium">Years of Practice</div>
            </div>
          </motion.div>
        </div>

        {/* Team */}
        <div id="team" className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="section-label">The People</p>
            <h2 className="section-title">
              Meet Our
              <span className="text-gradient italic"> Team</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative h-64 overflow-hidden mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-stone text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <h3 className="font-display font-bold text-lg text-stone">{member.name}</h3>
                  <p className="text-gold text-xs font-mono mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div id="press">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="section-label">Recognition</p>
            <h2 className="section-title">
              Awards &
              <span className="text-gradient italic"> Honors</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {awards.map((award, i) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-6 py-5 border-b border-dark-300 group hover:border-gold/30 transition-colors duration-300"
              >
                <span className="font-mono text-gold text-sm w-12 flex-shrink-0">{award.year}</span>
                <div className="flex-1">
                  <span className="font-display font-semibold text-stone group-hover:text-gold transition-colors duration-300">
                    {award.name}
                  </span>
                  <span className="text-stone-600 text-sm ml-3">{award.org}</span>
                </div>
                <ArrowRight size={16} className="text-stone-600 group-hover:text-gold transition-colors duration-300 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
