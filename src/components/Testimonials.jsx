import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Arcana didn't just design our headquarters — they created a statement of who we are. The building has won three design awards and completely transformed how our team works together.",
    name: 'Hiroshi Tanaka',
    role: 'CEO, Tanaka Holdings',
    location: 'Tokyo, Japan',
    initials: 'HT',
  },
  {
    quote: "Working with the Arcana team was an extraordinary experience. They listened, challenged our assumptions, and delivered a home that exceeds everything we imagined. It is beyond perfect.",
    name: 'Isabella Moreau',
    role: 'Private Client',
    location: 'Barcelona, Spain',
    initials: 'IM',
  },
  {
    quote: "The cultural center they designed for us has become the most visited building in the country. Arcana's sensitivity to our heritage while pushing design boundaries is unmatched.",
    name: 'Rashid Al-Mansoori',
    role: 'Minister of Culture',
    location: 'Baku, Azerbaijan',
    initials: 'RA',
  },
  {
    quote: "Our resort has been featured in 20+ architecture publications since opening. Arcana's mastery of tropical modernism and sustainable design made this possible. I cannot recommend them enough.",
    name: 'Maria Santos',
    role: 'Director, Archipelago Resorts',
    location: 'Palawan, Philippines',
    initials: 'MS',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="py-28 lg:py-36 bg-dark relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/facade-detail.jpg"
          alt="architectural facade"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-dark/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center">Client Stories</p>
          <h2 className="section-title">
            Voices of
            <span className="text-gradient italic"> Trust</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-glass p-10 lg:p-14 relative">
            {/* Quote icon */}
            <Quote size={48} className="text-gold/20 absolute top-8 right-8" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-display text-xl lg:text-2xl text-stone leading-relaxed italic mb-10">
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-gradient flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-dark text-sm">
                      {testimonials[current].initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-stone">{testimonials[current].name}</div>
                    <div className="text-stone-600 text-sm">{testimonials[current].role}</div>
                    <div className="text-gold text-xs font-mono mt-0.5">{testimonials[current].location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current ? 'w-8 h-1.5 bg-gold' : 'w-3 h-1.5 bg-dark-300 hover:bg-gold/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                id="testimonial-prev"
                onClick={prev}
                className="w-10 h-10 border border-dark-300 flex items-center justify-center text-stone-600 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                id="testimonial-next"
                onClick={next}
                className="w-10 h-10 border border-dark-300 flex items-center justify-center text-stone-600 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
