import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ExternalLink, ArrowRight } from 'lucide-react';

// Default fallback image
const FALLBACK_IMAGE = '/placeholder.svg';

const locations = [
  {
    id: 'torrington',
    name: 'Torrington',
    address: '1299 East Main Street, Torrington, CT 06790',
    phone: '(860) 407-3984',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Torrington.jpg',
  },
  {
    id: 'thomaston',
    name: 'Thomaston',
    address: '123 Main Street, Thomaston, CT 06787',
    phone: '(860) 555-1234',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Thomaston.jpg',
  },
  {
    id: 'bantam',
    name: 'Bantam',
    address: '456 Church Street, Bantam, CT 06750',
    phone: '(860) 555-5678',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Bantam.png',
  },
  {
    id: 'watertown',
    name: 'Watertown',
    address: '789 Water Street, Watertown, CT 06795',
    phone: '(860) 555-9012',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Watertown.jpeg',
  },
  {
    id: 'naugatuck',
    name: 'Naugatuck',
    address: '321 River Road, Naugatuck, CT 06770',
    phone: '(860) 555-3456',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Naugatuck.jpg',
  },
  {
    id: 'orange',
    name: 'Orange',
    address: '654 Orange Avenue, Orange, CT 06477',
    phone: '(860) 555-7890',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
    image: '/images/Orange.jpg',
  },
];

const LocationsHighlight = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = FALLBACK_IMAGE;
    setImageLoaded(true);
  };

  // Function to handle lazy loading of images
  const onImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="locations" className="section-container scroll-mt-24">
      <h2 className="section-title">Our Locations</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        With six convenient locations across Connecticut, there's always a Quiet Zone near you. 
        Each location offers our full range of automotive services.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        {/* Locations List */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-qz-blue text-white py-3 px-4">
              <h3 className="text-lg font-semibold">Select a Location</h3>
            </div>
            <div className="divide-y">
              {locations.map((location) => (
                <button
                  key={location.id}
                  className={`w-full text-left py-3 px-4 hover:bg-gray-50 transition-colors ${
                    activeLocation.id === location.id ? 'bg-qz-gray/20' : ''
                  }`}
                  onClick={() => setActiveLocation(location)}
                >
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 mr-3 bg-gray-100">
                      <img 
                        src={location.image} 
                        alt={`${location.name}`}
                        className="h-full w-full object-cover"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="font-semibold">{location.name}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="p-4 bg-gray-50 border-t">
              <Link 
                to="/locations" 
                className="text-qz-blue font-medium hover:text-qz-yellow transition-colors inline-flex items-center w-full justify-center"
              >
                View All Locations <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-100 p-4">
              <div className="h-60 rounded overflow-hidden relative bg-gray-200">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center">
                      <MapPin size={40} className="mx-auto text-qz-blue animate-pulse" />
                      <p className="mt-2 text-gray-600">Loading {activeLocation.name} location</p>
                    </div>
                  </div>
                )}
                <img 
                  src={activeLocation.image} 
                  alt={`${activeLocation.name} auto repair center`} 
                  className="h-full w-full object-cover"
                  onLoad={onImageLoad}
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{activeLocation.name}</h3>
                  <p className="text-sm">Expert auto service at our {activeLocation.name} location</p>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(activeLocation.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-qz-yellow inline-flex items-center mt-2 text-sm"
                  >
                    Get Directions <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-qz-blue mb-4">{activeLocation.name} Location</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex">
                  <MapPin size={18} className="text-qz-yellow mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Address:</strong>
                    {activeLocation.address}
                  </div>
                </div>
                <div className="flex">
                  <Phone size={18} className="text-qz-yellow mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Phone:</strong>
                    <a href={`tel:${activeLocation.phone.replace(/[^0-9]/g, '')}`} className="text-qz-blue hover:text-qz-yellow">
                      {activeLocation.phone}
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <Clock size={18} className="text-qz-yellow mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Hours:</strong>
                    {activeLocation.hours}<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Link 
                  to={`/locations/${activeLocation.id}`} 
                  className="btn-primary"
                >
                  Location Details
                </Link>
                <Link 
                  to={`/appointment?location=${activeLocation.id}`} 
                  className="btn-accent"
                >
                  Schedule Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Link to="/locations" className="btn-primary">
          View All Locations
        </Link>
      </div>
    </section>
  );
};

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

export default LocationsHighlight;
