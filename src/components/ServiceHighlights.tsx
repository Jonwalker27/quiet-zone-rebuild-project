import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Gauge, Wrench, Thermometer, Car, Cog } from 'lucide-react';

const services = [
  {
    id: 'oil-changes',
    title: 'Oil Changes & Maintenance',
    description: 'Regular maintenance to keep your vehicle running smoothly and prevent costly repairs.',
    icon: <Droplet size={40} className="text-qz-blue" />,
  },
  {
    id: 'brake-repair',
    title: 'Brake Repair & Service',
    description: 'Complete brake services to ensure your safety on the road.',
    icon: <Gauge size={40} className="text-qz-blue" />,
  },
  {
    id: 'engine-diagnostics',
    title: 'Engine Diagnostics',
    description: 'Advanced diagnostics to identify and fix issues with your engine.',
    icon: <Wrench size={40} className="text-qz-blue" />,
  },
  {
    id: 'ac-service',
    title: 'AC & Heating Service',
    description: 'Comprehensive AC and heating services to keep you comfortable in any weather.',
    icon: <Thermometer size={40} className="text-qz-blue" />,
  },
  {
    id: 'emissions',
    title: 'Emissions Testing',
    description: 'State-required emissions testing and repairs to keep your vehicle compliant.',
    icon: <Car size={40} className="text-qz-blue" />,
  },
  {
    id: 'transmission',
    title: 'Transmission Service',
    description: 'Expert transmission service and repair for all vehicle makes and models.',
    icon: <Cog size={40} className="text-qz-blue" />,
  },
];

const ServiceHighlights = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Our Services</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        At Quiet Zone CT, we offer a comprehensive range of automotive services to keep your vehicle running at its best. 
        Our skilled technicians are trained to handle all makes and models.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <div key={service.id} className="service-card group">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link 
              to={`/services#${service.id}`} 
              className="text-qz-red font-medium hover:underline inline-flex items-center"
            >
              Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    </section>
  );
};

const ArrowRight = ({ size = 24, className = '' }) => (
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
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

export default ServiceHighlights;
