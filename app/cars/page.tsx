'use client';

import { motion } from 'framer-motion';
import CarCard from '@/components/CarCard';

/**
 * Cars for Sale Page
 * Displays available cars for sale with images, prices, and specifications
 * Uses placeholder images from Unsplash (to be replaced with actual car photos)
 */
export default function CarsPage() {
  const cars = [
    {
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      price: 18500,
      mileage: '45,000 miles',
      transmission: 'Automatic',
      fuelType: 'Gasoline',
    },
    {
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
      make: 'Toyota',
      model: 'Camry',
      year: 2019,
      price: 21000,
      mileage: '38,000 miles',
      transmission: 'Automatic',
      fuelType: 'Gasoline',
    },
    {
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      make: 'BMW',
      model: '3 Series',
      year: 2021,
      price: 35000,
      mileage: '22,000 miles',
      transmission: 'Automatic',
      fuelType: 'Gasoline',
    },
    {
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      make: 'Ford',
      model: 'F-150',
      year: 2020,
      price: 32000,
      mileage: '50,000 miles',
      transmission: 'Automatic',
      fuelType: 'Gasoline',
    },
    {
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      make: 'Chevrolet',
      model: 'Silverado',
      year: 2019,
      price: 28500,
      mileage: '55,000 miles',
      transmission: 'Automatic',
      fuelType: 'Diesel',
    },
    {
      image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
      make: 'Nissan',
      model: 'Altima',
      year: 2021,
      price: 22500,
      mileage: '28,000 miles',
      transmission: 'Automatic',
      fuelType: 'Gasoline',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cars for Sale</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our selection of quality pre-owned vehicles. All cars are inspected and serviced by our expert technicians.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <CarCard
                key={index}
                image={car.image}
                make={car.make}
                model={car.model}
                year={car.year}
                price={car.price}
                mileage={car.mileage}
                transmission={car.transmission}
                fuelType={car.fuelType}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

