
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-qz-blue text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quiet Zone CT</h3>
            <p className="mb-4">
              Family-owned and operated since 1990, providing quality automotive services at affordable prices throughout Connecticut.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-qz-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-qz-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-qz-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#oil-changes" className="hover:text-qz-red transition-colors">Oil Changes & Maintenance</Link>
              </li>
              <li>
                <Link to="/services#brake-repair" className="hover:text-qz-red transition-colors">Brake Repair & Service</Link>
              </li>
              <li>
                <Link to="/services#engine-diagnostics" className="hover:text-qz-red transition-colors">Engine Diagnostics</Link>
              </li>
              <li>
                <Link to="/services#emissions" className="hover:text-qz-red transition-colors">Emissions Testing</Link>
              </li>
              <li>
                <Link to="/services#ac-service" className="hover:text-qz-red transition-colors">AC & Heating Service</Link>
              </li>
              <li>
                <Link to="/services" className="text-qz-red hover:underline mt-2 inline-block">View All Services</Link>
              </li>
            </ul>
          </div>

          {/* Locations Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/locations/torrington" className="hover:text-qz-red transition-colors">Torrington</Link>
              </li>
              <li>
                <Link to="/locations/thomaston" className="hover:text-qz-red transition-colors">Thomaston</Link>
              </li>
              <li>
                <Link to="/locations/bantam" className="hover:text-qz-red transition-colors">Bantam</Link>
              </li>
              <li>
                <Link to="/locations/watertown" className="hover:text-qz-red transition-colors">Watertown</Link>
              </li>
              <li>
                <Link to="/locations/naugatuck" className="hover:text-qz-red transition-colors">Naugatuck</Link>
              </li>
              <li>
                <Link to="/locations/orange" className="hover:text-qz-red transition-colors">Orange</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="tel:8604073984" className="hover:text-qz-red transition-colors">(860) 407-3984</a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@quietzonect.com" className="hover:text-qz-red transition-colors">info@quietzonect.com</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>1299 East Main Street, Torrington, CT 06790</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Mon-Fri: 8am-6pm<br />Sat: 8am-2pm<br />Sun: Closed</span>
              </li>
            </ul>
            <Link to="/appointment" className="btn-accent inline-block mt-4">Schedule Service</Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Quiet Zone CT. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-qz-red transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-qz-red transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-qz-red transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
