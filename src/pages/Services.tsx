import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplet, Gauge, Wrench, Thermometer, Car, Cog, Check, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

// Service data from ServiceHighlights component
const services = [
  {
    id: 'oil-changes',
    title: 'Oil Changes & Maintenance',
    description: 'Regular maintenance to keep your vehicle running smoothly and prevent costly repairs.',
    icon: <Droplet size={64} className="text-qz-lightblue" />,
    fullDescription: [
      'Keep your engine running smoothly with our professional oil change services.',
      'We use high-quality oils and filters to ensure optimal engine performance.',
      'Our comprehensive service includes a multi-point inspection to catch potential issues early.'
    ],
    benefits: [
      'Extended engine life',
      'Improved fuel efficiency',
      'Reduced engine wear and tear',
      'Prevention of costly repairs'
    ],
    linkTo: '/services/oil-change'
  },
  {
    id: 'brake-repair',
    title: 'Brake Repair & Service',
    description: 'Complete brake services to ensure your safety on the road.',
    icon: <Gauge size={64} className="text-qz-lightblue" />,
    fullDescription: [
      'Your brakes are your vehicle\'s most important safety feature.',
      'Our comprehensive brake service includes inspection, repair, and replacement of all brake components.',
      'We service all types of brake systems including disc, drum, ABS, and hydraulic systems.'
    ],
    benefits: [
      'Improved stopping power',
      'Enhanced safety for you and your passengers',
      'Extended brake component life',
      'Elimination of brake noise and vibration'
    ]
  },
  {
    id: 'engine-diagnostics',
    title: 'Engine Diagnostics',
    description: 'Advanced diagnostics to identify and fix issues with your engine.',
    icon: <Wrench size={64} className="text-qz-lightblue" />,
    fullDescription: [
      'Modern vehicles have complex computer systems that require specialized diagnostic equipment.',
      'Our technicians use state-of-the-art tools to accurately diagnose engine problems.',
      'We can identify issues with your engine, transmission, emissions system, and more.'
    ],
    benefits: [
      'Accurate identification of vehicle issues',
      'Targeted repairs that fix the problem the first time',
      'Prevention of misdiagnosis and unnecessary repairs',
      'Detailed explanation of issues and solutions'
    ]
  },
  {
    id: 'ac-service',
    title: 'AC & Heating Service',
    description: 'Comprehensive AC and heating services to keep you comfortable in any weather.',
    icon: <Thermometer size={64} className="text-qz-lightblue" />,
    fullDescription: [
      'Connecticut weather demands a reliable climate control system in your vehicle.',
      'Our services include AC recharge, repair, and complete system diagnostics.',
      'We service all components including compressors, condensers, evaporators, and heater cores.'
    ],
    benefits: [
      'Year-round comfort in your vehicle',
      'Improved air quality with clean filters',
      'Prevention of major system failures',
      'Efficient heating and cooling operation'
    ]
  },
  {
    id: 'emissions',
    title: 'Emissions Testing',
    description: 'State-required emissions testing and repairs to keep your vehicle compliant.',
    icon: <Car size={64} className="text-qz-lightblue" />,
    fullDescription: [
      'Connecticut requires emissions testing for most vehicles.',
      'Our certified technicians can perform official emissions tests and make necessary repairs.',
      'We diagnose and fix emissions-related issues to help your vehicle pass inspection.'
    ],
    benefits: [
      'Compliance with state regulations',
      'Reduced environmental impact',
      'Improved fuel efficiency',
      'Expert repairs if your vehicle fails testing'
    ]
  },
  {
    id: 'transmission',
    title: 'Transmission Service',
    description: 'Expert transmission service and repair for all vehicle makes and models.',
    icon: <Cog size={64} className="text-qz-lightblue" />,
    fullDescription: [
      'Your transmission is one of the most complex and important components in your vehicle.',
      'Our services include fluid changes, filter replacements, and complete transmission repairs.',
      'We work on automatic, manual, CVT, and dual-clutch transmission systems.'
    ],
    benefits: [
      'Extended transmission life',
      'Smoother gear shifting',
      'Prevention of major transmission failures',
      'Improved overall vehicle performance'
    ]
  }
];

const Services = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to the specific service section if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when the page loads without a hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-light opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Automotive <span className="text-qz-yellow">Services</span>
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, our ASE-certified technicians 
              provide quality automotive services for all makes and models.
            </p>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-20 bg-qz-light">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-qz-blue text-center mb-16">
              Comprehensive Automotive Services
            </h2>
            
            {services.map((service) => (
              <div 
                id={service.id} 
                key={service.id} 
                className="bg-white rounded-xl shadow-premium p-8 mb-16 scroll-mt-24"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                    <div className="p-6 bg-qz-light rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-2xl md:text-3xl font-bold text-qz-blue mb-4">
                      {service.title}
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                      {service.fullDescription.map((paragraph, index) => (
                        <p key={index} className="text-qz-dark">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-qz-blue mb-4">Benefits</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={20} className="text-qz-yellow flex-shrink-0 mt-1 mr-3" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {service.linkTo && (
                      <Link 
                        to={service.linkTo} 
                        className="btn-accent inline-flex items-center"
                      >
                        Learn More <ArrowRight size={20} className="ml-2" />
                      </Link>
                    )}
                    
                    <Link 
                      to="/appointment" 
                      className="btn-primary inline-flex items-center ml-4"
                    >
                      Schedule Service <ArrowRight size={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Additional Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-qz-blue text-center mb-12">
              Additional Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Wheel Alignment</h3>
                <p className="text-qz-gray mb-4">
                  Proper wheel alignment ensures even tire wear and optimal handling.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Tire Services</h3>
                <p className="text-qz-gray mb-4">
                  Tire rotation, balancing, patching, and replacement services.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Battery Service</h3>
                <p className="text-qz-gray mb-4">
                  Testing, maintenance, and replacement of vehicle batteries.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Suspension Repair</h3>
                <p className="text-qz-gray mb-4">
                  Shocks, struts, and other suspension component repair and replacement.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Exhaust System</h3>
                <p className="text-qz-gray mb-4">
                  Muffler repair and complete exhaust system services.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Electrical Systems</h3>
                <p className="text-qz-gray mb-4">
                  Diagnosing and repairing electrical issues in all vehicle systems.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services; 