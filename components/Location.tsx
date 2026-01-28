/**
 * Location Component
 * Displays business location with embedded Google Maps
 * Shows address and interactive map for easy navigation
 */

import { MapPin, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Shop
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stop by our location for professional auto repair services.
            We are conveniently located in Minneapolis and ready to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Information Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    2801 Central Av Suit B<br />
                    Minneapolis, MN 55418
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a 
                    href="tel:612-978-2192" 
                    className="text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    612-978-2192
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a 
                    href="mailto:Bkauto@gmail.com" 
                    className="text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    Bkauto@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=2801+Central+Av+Suit+B+Minneapolis+MN+55418"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-semibold"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.8!2d-93.2489!3d45.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d7f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2s2801%20Central%20Ave%20NE%2C%20Minneapolis%2C%20MN%2055418!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BK Auto Repair Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
