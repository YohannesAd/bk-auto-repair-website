'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Hero Component
 * Main landing section with call-to-action
 * Features animated text and button
 */
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to <span className="text-primary-400">BK Auto Repair</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Your trusted partner for professional auto repair services.
            We provide quality workmanship and exceptional customer service for all makes and models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/services"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

