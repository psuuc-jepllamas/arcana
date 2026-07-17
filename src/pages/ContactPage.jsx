import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark pt-28">
      {/* Page Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/facade-detail.jpg"
            alt="architectural facade"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-dark/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="section-label mb-4">Get In Touch</p>
            <h1 className="section-title mb-6 max-w-xl">
              Let's Create
              <span className="text-gradient italic"> Together</span>
            </h1>
            <p className="section-subtitle max-w-lg">
              Whether you have a fully-formed vision or just an idea on a napkin — we'd love to hear from you. Every great building starts with a conversation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact section (reuse component, no top padding needed) */}
      <div className="pt-0">
        <Contact />
      </div>

      {/* Studio locations */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="section-label">Our Studios</p>
          <h2 className="font-display font-bold text-3xl text-stone">
            Find Us Worldwide
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              city: 'Manila',
              country: 'Philippines',
              address: '32F One Bonifacio High Street, BGC, Taguig',
              phone: '+63 2 8123 4567',
              primary: true,
            },
            {
              city: 'Tokyo',
              country: 'Japan',
              address: 'Roppongi Hills Mori Tower, 10-1 Roppongi, Minato',
              phone: '+81 3 6234 5678',
              primary: false,
            },
            {
              city: 'Barcelona',
              country: 'Spain',
              address: 'Passeig de Gràcia 92, L\'Eixample',
              phone: '+34 93 456 7890',
              primary: false,
            },
          ].map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`card-glass p-8 ${loc.primary ? 'border-gold/40' : ''}`}
            >
              {loc.primary && (
                <span className="font-mono text-[9px] bg-gold text-dark px-2 py-0.5 uppercase tracking-widest mb-4 inline-block">
                  Headquarters
                </span>
              )}
              <h3 className="font-display font-bold text-2xl text-stone mb-1">{loc.city}</h3>
              <p className="text-gold font-mono text-xs mb-4">{loc.country}</p>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">{loc.address}</p>
              <p className="text-stone-400 text-sm">{loc.phone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
