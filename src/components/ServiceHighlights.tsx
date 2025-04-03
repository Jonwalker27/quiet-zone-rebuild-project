
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Gauge, Wrench, Thermometer, Car, Cog, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'oil-changes',
    title: 'Oil Changes & Maintenance',
    description: 'Regular maintenance to keep your vehicle running smoothly and prevent costly repairs.',
    icon: <Droplet size={48} className="text-qz-lightblue" />,
  },
  {
    id: 'brake-repair',
    title: 'Brake Repair & Service',
    description: 'Complete brake services to ensure your safety on the road.',
    icon: <Gauge size={48} className="text-qz-lightblue" />,
  },
  {
    id: 'engine-diagnostics',
    title: 'Engine Diagnostics',
    description: 'Advanced diagnostics to identify and fix issues with your engine.',
    icon: <Wrench size={48} className="text-qz-lightblue" />,
  },
  {
    id: 'ac-service',
    title: 'AC & Heating Service',
    description: 'Comprehensive AC and heating services to keep you comfortable in any weather.',
    icon: <Thermometer size={48} className="text-qz-lightblue" />,
  },
  {
    id: 'emissions',
    title: 'Emissions Testing',
    description: 'State-required emissions testing and repairs to keep your vehicle compliant.',
    icon: <Car size={48} className="text-qz-lightblue" />,
  },
  {
    id: 'transmission',
    title: 'Transmission Service',
    description: 'Expert transmission service and repair for all vehicle makes and models.',
    icon: <Cog size={48} className="text-qz-lightblue" />,
  },
];

const ServiceHighlights = () => {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-texture-light opacity-50 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h2 className="section-title">Our Services</h2>
        <p className="text-center text-qz-gray max-w-3xl mx-auto mb-12 text-lg">
          At Quiet Zone CT, we offer a comprehensive range of automotive services to keep your vehicle running at its best. 
          Our skilled technicians are trained to handle all makes and models.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="mb-6 bg-qz-light inline-flex p-4 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-qz-lightblue transition-colors">
                {service.title}
              </h3>
              <p className="text-qz-gray mb-5">{service.description}</p>
              <Link 
                to={`/services#${service.id}`} 
                className="text-qz-yellow font-semibold hover:text-qz-gold inline-flex items-center transition-colors"
              >
                Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/services" className="btn-accent inline-flex items-center">
            Explore All Services <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
