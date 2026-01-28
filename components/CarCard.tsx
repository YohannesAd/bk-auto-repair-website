'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCar, FaRoad, FaCog, FaGasPump } from 'react-icons/fa';

interface CarCardProps {
  image: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  transmission: string;
  fuelType: string;
  index: number;
}

/**
 * CarCard Component
 * Displays individual car listing with image, details, and price
 * Shows key specifications like mileage, transmission, and fuel type
 */
export default function CarCard({
  image,
  make,
  model,
  year,
  price,
  mileage,
  transmission,
  fuelType,
  index,
}: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Car Image */}
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={`${year} ${make} ${model}`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Car Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {year} {make} {model}
        </h3>
        
        <p className="text-3xl font-bold text-primary-600 mb-4">
          ${price.toLocaleString()}
        </p>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <FaRoad className="text-primary-500" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCog className="text-primary-500" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaGasPump className="text-primary-500" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCar className="text-primary-500" />
            <span>Used</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

