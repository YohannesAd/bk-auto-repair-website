'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Gallery Component
 * Displays a grid of auto shop images
 * Uses placeholder images from Unsplash (to be replaced with client photos)
 */
export default function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
      alt: 'Auto repair shop interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80',
      alt: 'Mechanic working on car',
    },
    {
      src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
      alt: 'Car engine repair',
    },
    {
      src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
      alt: 'Professional auto service',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900"
        >
          Our Shop
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

