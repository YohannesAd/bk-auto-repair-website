'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

/**
 * About Component
 * Displays company description and key features
 * Highlights what makes BK Auto Repair stand out
 */
export default function About() {
  const features = [
    'Experienced and certified technicians',
    'State-of-the-art diagnostic equipment',
    'Competitive pricing with transparent quotes',
    'Quality parts and workmanship guarantee',
    'Fast turnaround times',
    'Excellent customer service',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              About BK Auto Repair
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At BK Auto Repair, we are committed to providing top-quality automotive repair 
              and maintenance services. With years of experience in the industry, our skilled 
              technicians are dedicated to keeping your vehicle running smoothly and safely.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We understand that your vehicle is an important investment, and we treat every
              car that comes through our doors with the care and attention it deserves.
              From routine maintenance to complex repairs, we have you covered.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Why Choose Us?</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
