'use client';

import { ShieldCheck, Sparkles, Stethoscope, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Stethoscope className="w-8 h-8 text-[var(--rosegold)]" />,
    title: 'Expert Specialists',
    description: 'Our team comprises board-certified dermatologists and highly trained aesthetic professionals.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[var(--rosegold)]" />,
    title: 'Premium Technology',
    description: 'We use only FDA-approved, state-of-the-art equipment for safe and effective treatments.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[var(--rosegold)]" />,
    title: 'Safety First',
    description: 'Strict hygiene protocols and personalized care plans ensure your absolute safety and comfort.',
  },
  {
    icon: <Clock className="w-8 h-8 text-[var(--rosegold)]" />,
    title: 'Minimal Downtime',
    description: 'Advanced techniques mean you can return to your daily life faster, looking your absolute best.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--rosegold)] text-xs tracking-[0.5em] uppercase mb-3"
          >
            The Celebrity Glow Difference
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-4xl md:text-5xl font-bold"
          >
            Why Choose <span className="rosegold-text">Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[var(--rosegold)]/50 transition-colors"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="font-sans text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
