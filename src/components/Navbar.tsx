import React, { useState, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

// Move constants outside component to prevent recreation
const LOCATIONS = [
  { id: 'torrington', name: 'Torrington' },
  { id: 'thomaston', name: 'Thomaston' },
  { id: 'bantam', name: 'Bantam' },
  { id: 'watertown', name: 'Watertown' },
  { id: 'naugatuck', name: 'Naugatuck' },
  { id: 'orange', name: 'Orange' },
] as const;

// Separate mobile menu into its own component for better code splitting
const MobileMenu: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void;
  onLocationsClick: (e: React.MouseEvent) => void;
}> = memo(({ isOpen, onClose, onLocationsClick }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white px-4 py-4 shadow-lg animate-fade-in" role="navigation">
      <div className="flex flex-col space-y-4">
        <Link to="/" className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors" onClick={onClose}>Home</Link>
        <Link to="/services" className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors" onClick={onClose}>Services</Link>
        <Link to="/locations" className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors" onClick={(e) => { onLocationsClick(e); onClose(); }}>Locations</Link>
        <Link to="/about" className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors" onClick={onClose}>About Us</Link>
        <Link to="/resources" className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors" onClick={onClose}>Resources</Link>
        <div className="flex flex-col space-y-2 pt-4 border-t">
          <div className="flex items-center text-qz-blue">
            <Phone size={16} className="mr-2" aria-hidden="true" />
            <a href="tel:8604073984" aria-label="Call us at (860) 407-3984">(860) 407-3984</a>
          </div>
          <div className="flex items-center text-qz-blue">
            <Clock size={16} className="mr-2" aria-hidden="true" />
            <span>Mon-Fri: 8am-6pm, Sat: 8am-2pm</span>
          </div>
          <Link to="/appointment" className="btn-accent text-center mt-4" onClick={onClose}>
            Schedule Service
          </Link>
        </div>
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

const Navbar: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle locations link click - scrolls on homepage, navigates on other pages
  const handleLocationsClick = useCallback((e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const locationsSection = document.querySelector('#locations');
      if (locationsSection) {
        locationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // On other pages, default navigation behavior will occur
  }, [location.pathname]);

  return (
    <header className="w-full bg-white" role="banner">
      {/* Top Locations Bar */}
      <div className="top-locations-bar">
        <div className="container mx-auto">
          <ul className="locations-list" role="list">
            {LOCATIONS.map(location => (
              <li key={location.id}>
                <Link to={`/locations/${location.id}`} aria-label={`Visit ${location.name} location`}>
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar with Contact Info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-qz-blue">
              <Phone size={16} className="mr-2" aria-hidden="true" />
              <a href="tel:8604073984" aria-label="Call us at (860) 407-3984">(860) 407-3984)</a>
            </div>
            <div className="flex items-center text-qz-blue">
              <Clock size={16} className="mr-2" aria-hidden="true" />
              <span>Mon-Fri: 8am-6pm, Sat: 8am-2pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/contact" className="hover:text-qz-yellow transition-colors">
              Contact Us
            </Link>
            <Link 
              to="/locations" 
              className="hover:text-qz-yellow transition-colors"
              onClick={handleLocationsClick}
            >
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" aria-hidden="true" />
                <span>Find Location</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-qz-blue">Quiet Zone <span className="text-qz-yellow">CT</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" role="navigation">
            <Link to="/" className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors">Services</Link>
            <Link 
              to="/locations" 
              className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors"
              onClick={handleLocationsClick}
            >
              Locations
            </Link>
            <Link to="/about" className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors">About Us</Link>
            <Link to="/resources" className="text-qz-darkgray hover:text-qz-yellow font-medium transition-colors">Resources</Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/appointment" className="btn-accent">Schedule Service</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-qz-blue" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={closeMenu} 
        onLocationsClick={handleLocationsClick}
      />
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
