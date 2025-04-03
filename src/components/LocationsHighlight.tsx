
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

const locations = [
  {
    id: 'torrington',
    name: 'Torrington',
    address: '1299 East Main Street, Torrington, CT 06790',
    phone: '(860) 407-3984',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
  },
  {
    id: 'thomaston',
    name: 'Thomaston',
    address: '123 Main Street, Thomaston, CT 06787',
    phone: '(860) 555-1234',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
  },
  {
    id: 'bantam',
    name: 'Bantam',
    address: '456 Church Street, Bantam, CT 06750',
    phone: '(860) 555-5678',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
  },
  {
    id: 'watertown',
    name: 'Watertown',
    address: '789 Water Street, Watertown, CT 06795',
    phone: '(860) 555-9012',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
  },
  {
    id: 'naugatuck',
    name: 'Naugatuck',
    address: '321 River Road, Naugatuck, CT 06770',
    phone: '(860) 555-3456',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
  },
  {
    id: 'orange',
    name: 'Orange',
    address: '654 Orange Avenue, Orange, CT 06477',
    phone: '(860) 555-7890',
    hours: 'Mon-Fri: 8am-6pm, Sat: 8am-2pm',
  },
];

const LocationsHighlight = () => {
  const [activeLocation, setActiveLocation] = React.useState(locations[0]);

  return (
    <section className="section-container">
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
                    activeLocation.id === location.id ? 'bg-qz-gray' : ''
                  }`}
                  onClick={() => setActiveLocation(location)}
                >
                  <div className="font-semibold">{location.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-100 p-4">
              <div className="h-60 bg-gray-300 rounded">
                {/* This would be replaced with an actual map component */}
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={40} className="mx-auto text-qz-blue" />
                    <p className="mt-2 text-gray-600">Map view of {activeLocation.name} location</p>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(activeLocation.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-qz-blue hover:text-qz-red inline-flex items-center mt-2"
                    >
                      Open in Google Maps <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-qz-blue mb-4">{activeLocation.name} Location</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex">
                  <MapPin size={18} className="text-qz-red mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Address:</strong>
                    {activeLocation.address}
                  </div>
                </div>
                <div className="flex">
                  <Phone size={18} className="text-qz-red mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Phone:</strong>
                    <a href={`tel:${activeLocation.phone.replace(/[^0-9]/g, '')}`} className="text-qz-blue hover:text-qz-red">
                      {activeLocation.phone}
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <Clock size={18} className="text-qz-red mr-2 flex-shrink-0 mt-1" />
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
