'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  index: number;
}

/**
 * ServiceCard Component
 * Displays individual service with icon, title, and description
 * Animated on scroll for better user experience
 */
export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary-100 p-4 rounded-full mb-4">
          <Icon className="text-primary-600 text-4xl" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

