'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { 
  FaOilCan, 
  FaCar, 
  FaTools, 
  FaBatteryFull, 
  FaCogs, 
  FaWrench,
  FaCheckCircle,
  FaTachometerAlt 
} from 'react-icons/fa';

/**
 * Services Page
 * Displays all auto repair services offered by BK Auto Repair
 * Each service is presented in a card with icon and description
 */
export default function ServicesPage() {
  const services = [
    {
      icon: FaOilCan,
      title: 'Oil Change',
      description: 'Regular oil changes to keep your engine running smoothly and extend its lifespan.',
    },
    {
      icon: FaCar,
      title: 'Brake Service',
      description: 'Complete brake inspection, repair, and replacement for optimal safety and performance.',
    },
    {
      icon: FaTools,
      title: 'Engine Diagnostics',
      description: 'Advanced diagnostic tools to identify and resolve engine issues quickly and accurately.',
    },
    {
      icon: FaBatteryFull,
      title: 'Battery Service',
      description: 'Battery testing, charging, and replacement to ensure reliable vehicle starting.',
    },
    {
      icon: FaCogs,
      title: 'Transmission Repair',
      description: 'Expert transmission diagnostics, maintenance, and repair for smooth gear shifting.',
    },
    {
      icon: FaWrench,
      title: 'General Maintenance',
      description: 'Comprehensive vehicle maintenance including filters, fluids, and inspections.',
    },
    {
      icon: FaCheckCircle,
      title: 'Safety Inspections',
      description: 'Thorough safety inspections to ensure your vehicle meets all safety standards.',
    },
    {
      icon: FaTachometerAlt,
      title: 'Performance Tuning',
      description: 'Optimize your vehicle\'s performance with professional tuning and upgrades.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Professional auto repair services tailored to meet all your vehicle needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

