
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar with Contact Info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-qz-blue">
              <Phone size={16} className="mr-2" />
              <span>(860) 407-3984</span>
            </div>
            <div className="flex items-center text-qz-blue">
              <Clock size={16} className="mr-2" />
              <span>Mon-Fri: 8am-6pm, Sat: 8am-2pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/contact" className="hover:text-qz-red transition-colors">
              Contact Us
            </Link>
            <Link to="/locations" className="hover:text-qz-red transition-colors">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span>Find Location</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-qz-blue">Quiet Zone <span className="text-qz-red">CT</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors">Services</Link>
            <Link to="/locations" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors">Locations</Link>
            <Link to="/about" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors">About Us</Link>
            <Link to="/resources" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors">Resources</Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/appointment" className="btn-accent">Schedule Service</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-qz-blue" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/locations" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors" onClick={toggleMenu}>Locations</Link>
            <Link to="/about" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/resources" className="text-qz-darkgray hover:text-qz-red font-medium transition-colors" onClick={toggleMenu}>Resources</Link>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <div className="flex items-center text-qz-blue">
                <Phone size={16} className="mr-2" />
                <a href="tel:8604073984">(860) 407-3984</a>
              </div>
              <div className="flex items-center text-qz-blue">
                <Clock size={16} className="mr-2" />
                <span>Mon-Fri: 8am-6pm, Sat: 8am-2pm</span>
              </div>
              <Link to="/appointment" className="btn-accent text-center mt-4" onClick={toggleMenu}>
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
