import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, FileText, Compass, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery & Brief',
    desc: 'We begin with deep listening — understanding your vision, site constraints, budget, and lifestyle needs through structured interviews and site visits.',
    duration: '2–3 weeks',
  },
  {
    icon: Compass,
    step: '02',
    title: 'Concept Design',
    desc: 'Our designers explore multiple design directions through sketches, 3D massing models, and material mood boards to find your project\'s unique character.',
    duration: '4–6 weeks',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Design Development',
    desc: 'Chosen concepts are refined into detailed architectural drawings, structural coordination begins, and engineering consultants are engaged.',
    duration: '6–10 weeks',
  },
  {
    icon: HardHat,
    step: '04',
    title: 'Construction Documentation',
    desc: 'We produce comprehensive permit drawings and construction documents, managing authority approvals and contractor tendering.',
    duration: '8–12 weeks',
  },
  {
    icon: CheckCircle,
    step: '05',
    title: 'Construction & Handover',
    desc: 'Our architects provide on-site oversight throughout construction, ensuring design integrity is maintained through to final handover.',
    duration: 'Project dependent',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" ref={ref} className="py-28 lg:py-36 bg-dark-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">How We Work</p>
            <h2 className="section-title">
              Our Design
              <span className="text-gradient italic"> Process</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-subtitle"
          >
            A transparent, collaborative process that keeps you informed and empowered at every stage of your project's journey.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent hidden sm:block" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative grid lg:grid-cols-2 gap-0 ${
                  i % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Connector dot */}
                <div className="absolute left-6 lg:left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-gold hidden sm:block z-10" />

                {/* Content */}
                <div className={`pb-12 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className={`card-glass p-8 group ${i % 2 === 0 ? '' : ''}`}>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                        <step.icon size={18} className="text-gold group-hover:text-dark transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-gold text-xs font-bold">{step.step}</span>
                          <span className="text-dark-300">|</span>
                          <span className="font-mono text-stone-600 text-xs">{step.duration}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-stone mb-3">{step.title}</h3>
                        <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty col for alternating */}
                {i % 2 === 0 && <div />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
