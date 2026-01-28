/**
 * Footer Component
 * Displays contact information, business hours, and quick links
 * Contact info: Phone, Email, Address from business card
 */

import { Phone, Mail, MapPin, Clock, Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold">BK Auto Repair</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for professional auto repair services. 
              Quality workmanship and exceptional customer service.
            </p>
            <p className="text-sm text-gray-400">
              BIRUK - General Mechanic
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:612-978-2192" 
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>612-978-2192</span>
              </a>
              <a 
                href="mailto:Bkauto@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Bkauto@gmail.com</span>
              </a>
              <a 
                href="https://maps.google.com/?q=2801+Central+Av+Suit+B+Minneapolis+MN+55418" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>2801 Central Av Suit B<br />Minneapolis MN 55418</span>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-cyan-400" />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-sm text-gray-400">8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="text-gray-300">Saturday</p>
                <p className="text-sm text-gray-400">9:00 AM - 4:00 PM</p>
              </div>
              <div className="ml-8">
                <p className="text-gray-300">Sunday</p>
                <p className="text-sm text-gray-400">Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BK Auto Repair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

