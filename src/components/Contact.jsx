import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@arcana-arch.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+63 2 8123 4567',
    sub: 'Mon–Fri, 9AM–6PM PHT',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'BGC, Taguig City',
    sub: 'Metro Manila, Philippines',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Fri: 9AM–6PM',
    sub: 'Sat: 10AM–2PM',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-28 lg:py-36 bg-dark-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label">Start a Conversation</p>
          <h2 className="section-title max-w-xl">
            Let's Build Something
            <span className="text-gradient italic"> Remarkable</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-5 card-glass"
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <info.icon size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-stone-600 uppercase tracking-widest mb-1">{info.label}</div>
                  <div className="text-stone font-medium text-sm">{info.value}</div>
                  <div className="text-stone-600 text-xs mt-0.5">{info.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* Image */}
            <div className="relative h-52 overflow-hidden mt-4">
              <img
                src="/images/blueprints.jpg"
                alt="Blueprints and design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/60" />
              <div className="absolute bottom-5 left-5">
                <div className="font-mono text-gold text-xs uppercase tracking-widest mb-1">Ready to build?</div>
                <div className="font-display text-stone font-bold text-xl">Tell us your vision.</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="card-glass p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 border border-gold flex items-center justify-center mb-6">
                    <CheckCircle size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-stone mb-3">Message Sent!</h3>
                  <p className="text-stone-400 text-sm max-w-xs">
                    Thank you for reaching out. One of our architects will be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-mono text-[10px] text-stone-600 uppercase tracking-widest mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Marcus Llanes"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-mono text-[10px] text-stone-600 uppercase tracking-widest mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="hello@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-mono text-[10px] text-stone-600 uppercase tracking-widest mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="input-field appearance-none"
                    >
                      <option value="" disabled>Select a service...</option>
                      <option>Architectural Design</option>
                      <option>Urban Planning</option>
                      <option>Commercial Projects</option>
                      <option>Luxury Residential</option>
                      <option>Sustainable Design</option>
                      <option>Interior Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-[10px] text-stone-600 uppercase tracking-widest mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project — location, scale, timeline, and any special requirements..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn-primary w-full justify-center gap-3 py-4"
                  >
                    <Send size={16} />
                    Send Message
                  </button>

                  <p className="text-stone-600 text-xs text-center">
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
