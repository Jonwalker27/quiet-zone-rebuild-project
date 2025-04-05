import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Phone, ExternalLink, Car, Calendar, Wrench, ArrowRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import ImageGallery from '../components/ui/ImageGallery';

// Default fallback image if external images fail to load
const FALLBACK_IMAGE = '/placeholder.svg';

// Import locations data - this would ideally be moved to a shared data file
const locations = [
  {
    id: 'torrington',
    name: 'Torrington',
    address: '1299 East Main Street, Torrington, CT 06790',
    phone: '(860) 407-3984',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Torrington.jpg',
    galleryImages: [
      '/images/Torrington%202.jpg'
    ],
    services: [
      'Oil Changes & Maintenance',
      'Brake Repair & Service',
      'Engine Diagnostics',
      'AC & Heating Service',
      'Emissions Testing',
      'Transmission Service'
    ],
    features: [
      'ASE Certified Technicians',
      'Customer Waiting Area with WiFi',
      'Free Coffee',
      'Early Bird Drop-off',
      'After Hours Pick-up',
      'Shuttle Service'
    ]
  },
  {
    id: 'thomaston',
    name: 'Thomaston',
    address: '123 Main Street, Thomaston, CT 06787',
    phone: '(860) 555-1234',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Thomaston.jpg',
    galleryImages: [
      '/images/Thomaston%202.jpg',
      '/images/Thomaston%203.jpg'
    ],
    services: [
      'Oil Changes & Maintenance',
      'Brake Repair & Service',
      'Engine Diagnostics',
      'AC & Heating Service',
      'Emissions Testing',
      'Transmission Service'
    ],
    features: [
      'ASE Certified Technicians',
      'Customer Waiting Area with WiFi',
      'Free Coffee',
      'Early Bird Drop-off',
      'After Hours Pick-up',
      'Shuttle Service'
    ]
  },
  {
    id: 'bantam',
    name: 'Bantam',
    address: '456 Church Street, Bantam, CT 06750',
    phone: '(860) 555-5678',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Bantam.png',
    galleryImages: [],
    services: [
      'Oil Changes & Maintenance',
      'Brake Repair & Service',
      'Engine Diagnostics',
      'AC & Heating Service',
      'Emissions Testing',
      'Transmission Service'
    ],
    features: [
      'ASE Certified Technicians',
      'Customer Waiting Area with WiFi',
      'Free Coffee',
      'Early Bird Drop-off',
      'After Hours Pick-up'
    ]
  },
  {
    id: 'watertown',
    name: 'Watertown',
    address: '789 Water Street, Watertown, CT 06795',
    phone: '(860) 555-9012',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Watertown.jpeg',
    galleryImages: [],
    services: [
      'Oil Changes & Maintenance',
      'Brake Repair & Service',
      'Engine Diagnostics',
      'AC & Heating Service',
      'Emissions Testing',
      'Transmission Service'
    ],
    features: [
      'ASE Certified Technicians',
      'Customer Waiting Area with WiFi',
      'Free Coffee',
      'Early Bird Drop-off',
      'After Hours Pick-up',
      'Shuttle Service'
    ]
  },
  {
    id: 'naugatuck',
    name: 'Naugatuck',
    address: '321 River Road, Naugatuck, CT 06770',
    phone: '(860) 555-3456',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Naugatuck.jpg',
    galleryImages: [
      '/images/1958%20Quiet%20Zone%20CT%20NAUGATUCK.jpg',
      '/images/1958%20Quiet%20Zone%20CT%20NAUGATUCK%202.jpg'
    ],
    services: [
      'Oil Changes & Maintenance',
      'Brake Repair & Service',
      'Engine Diagnostics',
      'AC & Heating Service',
      'Emissions Testing',
      'Transmission Service'
    ],
    features: [
      'ASE Certified Technicians',
      'Customer Waiting Area with WiFi',
      'Free Coffee',
      'Early Bird Drop-off',
      'After Hours Pick-up'
    ]
  },
  {
    id: 'orange',
    name: 'Orange',
    address: '654 Orange Avenue, Orange, CT 06477',
    phone: '(860) 555-7890',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Orange.jpg',
    galleryImages: [
      '/images/Orange%202.jpg'
    ],
    services: [
      'Oil Changes & Maintenance',
      'Brake Repair & Service',
      'Engine Diagnostics',
      'AC & Heating Service',
      'Emissions Testing',
      'Transmission Service'
    ],
    features: [
      'ASE Certified Technicians',
      'Customer Waiting Area with WiFi',
      'Free Coffee',
      'Early Bird Drop-off',
      'After Hours Pick-up',
      'Shuttle Service'
    ]
  }
];

const Locations = () => {
  const { locationId } = useParams();
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const quickLinksRef = useRef<HTMLDivElement>(null);

  // Set active location based on URL parameter if available
  useEffect(() => {
    if (locationId) {
      const location = locations.find(loc => loc.id === locationId);
      if (location) {
        setActiveLocation(location);
        // Scroll to the quick links section with a small delay to ensure rendering
        setTimeout(() => {
          if (quickLinksRef.current) {
            quickLinksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [locationId]);

  // Function to handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = FALLBACK_IMAGE;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-light opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-qz-yellow">Locations</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              With six convenient locations across Connecticut, there's always a Quiet Zone near you.
              Each location offers our full range of automotive services.
            </p>
          </div>
        </section>
        
        {/* Locations Map Overview */}
        <section className="py-12 bg-qz-light">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-qz-blue text-center mb-8">Find a Quiet Zone Near You</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                {/* This would be replaced with an actual map component showing all locations */}
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-qz-blue mb-4" />
                  <p className="text-qz-gray text-lg">
                    Interactive map showing all Quiet Zone locations
                  </p>
                  <p className="text-qz-gray text-sm">
                    (This would be replaced with an actual Google Maps integration)
                  </p>
                </div>
              </div>
              <p className="text-center text-qz-gray">
                Select a location below for detailed information and directions
              </p>
            </div>
            
            {/* Location Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {locations.map((location) => (
                <div 
                  key={location.id}
                  className={`
                    bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border-2
                    ${activeLocation.id === location.id ? 'border-qz-yellow' : 'border-transparent'}
                  `}
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={location.image} 
                      alt={`${location.name} auto repair center`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-3">
                      <span className="bg-qz-yellow text-white text-xs font-semibold px-2 py-1 rounded">
                        {location.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-qz-blue mb-2">{location.name} Location</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <MapPin size={16} className="text-qz-yellow mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">{location.address}</span>
                      </div>
                      <div className="flex items-start">
                        <Phone size={16} className="text-qz-yellow mr-2 flex-shrink-0 mt-1" />
                        <a 
                          href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                          className="text-sm text-qz-blue hover:text-qz-yellow transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-start">
                        <Clock size={16} className="text-qz-yellow mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">{location.hours}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Link
                        to={`/locations/${location.id}`}
                        className="btn-primary text-sm py-2 px-4"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/appointment?location=${location.id}`}
                        className="btn-accent text-sm py-2 px-4"
                      >
                        Schedule Service
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Location Detail */}
        {locationId && (
          <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Location Details */}
                <div className="w-full lg:w-2/3">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                    <ImageGallery 
                      mainImage={activeLocation.image} 
                      additionalImages={activeLocation.galleryImages} 
                      altText={`${activeLocation.name} auto repair center`} 
                      fallbackImage={FALLBACK_IMAGE}
                    />
                    
                    <div className="p-6">
                      <h2 className="text-3xl font-bold text-qz-blue mb-4">{activeLocation.name} Location</h2>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin size={18} className="text-qz-yellow mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-qz-darkgray mb-1">Address</h4>
                              <p className="text-qz-gray">{activeLocation.address}</p>
                              <a 
                                href={`https://maps.google.com/?q=${encodeURIComponent(activeLocation.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-qz-blue text-sm hover:text-qz-yellow transition-colors inline-flex items-center mt-1"
                              >
                                Get Directions <ExternalLink size={12} className="ml-1" />
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Phone size={18} className="text-qz-yellow mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-qz-darkgray mb-1">Phone</h4>
                              <a 
                                href={`tel:${activeLocation.phone.replace(/[^0-9]/g, '')}`}
                                className="text-qz-blue hover:text-qz-yellow transition-colors"
                              >
                                {activeLocation.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <Clock size={18} className="text-qz-yellow mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-qz-darkgray mb-1">Hours</h4>
                              <p className="text-qz-gray">
                                Monday - Friday: 8am-6pm<br />
                                Saturday: 8am-2pm<br />
                                Sunday: Closed
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Calendar size={18} className="text-qz-yellow mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-qz-darkgray mb-1">Appointments</h4>
                              <p className="text-qz-gray mb-2">
                                Schedule your service online or give us a call
                              </p>
                              <Link 
                                to={`/appointment?location=${activeLocation.id}`}
                                className="btn-accent text-sm py-2 px-4"
                              >
                                Schedule Service
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Services & Amenities */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="flex items-center mb-4">
                        <Wrench size={20} className="text-qz-yellow mr-2" />
                        <h3 className="text-xl font-bold text-qz-blue">Services</h3>
                      </div>
                      <ul className="space-y-2">
                        {activeLocation.services.map((service, index) => (
                          <li key={index} className="flex items-center">
                            <Check size={16} className="text-qz-yellow mr-2 flex-shrink-0" />
                            <span className="text-qz-gray">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="flex items-center mb-4">
                        <Car size={20} className="text-qz-yellow mr-2" />
                        <h3 className="text-xl font-bold text-qz-blue">Amenities</h3>
                      </div>
                      <ul className="space-y-2">
                        {activeLocation.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check size={16} className="text-qz-yellow mr-2 flex-shrink-0" />
                            <span className="text-qz-gray">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Sidebar */}
                <div className="w-full lg:w-1/3">
                  {/* Quick Links */}
                  <div ref={quickLinksRef} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-qz-blue mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link 
                          to={`/appointment?location=${activeLocation.id}`}
                          className="flex items-center text-qz-darkgray hover:text-qz-yellow transition-colors"
                        >
                          <Calendar size={16} className="mr-2" />
                          <span>Schedule an Appointment</span>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/services"
                          className="flex items-center text-qz-darkgray hover:text-qz-yellow transition-colors"
                        >
                          <Wrench size={16} className="mr-2" />
                          <span>View All Services</span>
                        </Link>
                      </li>
                      <li>
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(activeLocation.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-qz-darkgray hover:text-qz-yellow transition-colors"
                        >
                          <MapPin size={16} className="mr-2" />
                          <span>Get Directions</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href={`tel:${activeLocation.phone.replace(/[^0-9]/g, '')}`}
                          className="flex items-center text-qz-darkgray hover:text-qz-yellow transition-colors"
                        >
                          <Phone size={16} className="mr-2" />
                          <span>Call This Location</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Other Locations */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-qz-blue text-white p-4">
                      <h3 className="text-lg font-semibold">Other Locations</h3>
                    </div>
                    <div className="divide-y">
                      {locations
                        .filter(loc => loc.id !== activeLocation.id)
                        .map(location => (
                          <Link
                            key={location.id}
                            to={`/locations/${location.id}`}
                            className="flex items-center p-4 hover:bg-gray-50 transition-colors"
                          >
                            <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                              <img 
                                src={location.image} 
                                alt={location.name}
                                className="h-full w-full object-cover"
                                onError={handleImageError}
                              />
                            </div>
                            <div className="ml-3">
                              <h4 className="font-medium text-qz-darkgray">{location.name}</h4>
                              <p className="text-xs text-qz-gray">{location.address.split(',')[0]}</p>
                            </div>
                            <ArrowRight size={16} className="ml-auto text-qz-gray" />
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

// Helper component for the clock icon
const Clock = ({ size = 24, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default Locations; 