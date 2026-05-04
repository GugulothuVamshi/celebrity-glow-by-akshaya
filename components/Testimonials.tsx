'use client';

/* eslint-disable @next/next/no-img-element */

import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Bhole Shavali',
    role: 'Telugu Cine Personality',
    content: 'Celebrity Glow gave me camera-ready skin with a polished, natural finish. The team understood exactly how to keep the look fresh, healthy, and screen-friendly.',
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qpDO-sCl_BugeNVPXso2JRnP6-XuVg9rXQ&s',
  },
  {
    name: 'Tasty Teja',
    role: 'Telugu Cine Personality',
    content: 'From consultation to results, the experience felt premium and precise. The treatments helped my skin look brighter and more even without feeling overdone.',
    rating: 5,
    image: 'https://images.filmibeat.com/te/img/2023/10/tasty-teja-bigg-boss-32-1698738681.jpg',
  },
  {
    name: 'Jabardasth Bobby',
    role: 'Telugu Cine Personality',
    content: 'What stood out most was the attention to detail. The clinic combines comfort, professionalism, and visible results in a way that feels made for public-facing personalities.',
    rating: 5,
    image: 'https://axdxht1orlhu.compat.objectstorage.ap-hyderabad-1.oraclecloud.com/static.filmyfocus.com/wp-content/uploads/2024/03/Jabardasth-Bobby.png',
  },
  {
    name: 'Miss Grand Divya',
    role: 'Telugu Cine Personality',
    content: 'The skin rejuvenation plan was tailored perfectly for my schedule and appearance goals. My skin looked radiant, refined, and event-ready.',
    rating: 5,
    image: 'https://assets.thehansindia.com/h-upload/2026/02/14/1627191-ivy.webp',
  },
  {
    name: 'Sameer Hasan',
    role: 'Telugu Cine Personality',
    content: 'The clinic delivers a strong mix of technology and personal care. The improvements in texture, glow, and confidence were noticeable after the sessions.',
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9orO65dHs57yS1TIsr3kXYv2Oe1dK5R3SQ&s',
  },
  {
    name: 'Music Director Koti',
    role: 'Telugu Cine Personality',
    content: 'Celebrity Glow maintains a very high standard in both care and results. The approach feels modern, thoughtful, and ideal for anyone who values quality aesthetic treatment.',
    rating: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Saluri_Koti.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--rosegold)] text-xs tracking-[0.5em] uppercase mb-3"
        >
          Client Stories
        </motion.h3>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-4xl md:text-5xl mb-16 text-[var(--navy)] font-bold"
        >
          Words of <span className="rosegold-text">Appreciation</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[var(--cream)] p-8 rounded-2xl border border-[var(--rosegold)]/20 text-left relative"
            >
              <div className="flex text-[var(--rosegold)] mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[var(--rosegold)]/30 flex-shrink-0"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[var(--rosegold)]/20 border-2 border-[var(--rosegold)]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--rosegold)] font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="font-sans font-bold text-[var(--navy)]">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
