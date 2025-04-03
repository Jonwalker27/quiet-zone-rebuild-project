
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Clock, Check, ArrowRight, Calendar, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OilChangeService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-primary overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-texture-light opacity-10"></div>
          
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional <span className="text-qz-yellow">Oil Change</span> Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Regular oil changes are essential for maintaining your vehicle's performance and extending engine life. Trust Quiet Zone's certified technicians for quick, thorough oil changes using quality products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointment?service=oil-change" className="btn-accent">
                  Schedule Oil Change <Calendar size={18} className="ml-2" />
                </Link>
                <a href="#pricing" className="bg-white text-qz-blue hover:bg-gray-100 px-6 py-3 rounded-lg inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  View Pricing <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-2xl w-full max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1599119269916-cdd1bf6d7b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Oil change service" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-qz-blue/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-qz-blue text-center mb-12">
              Benefits of Regular Oil Changes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="service-card">
                <div className="mb-6 text-qz-lightblue">
                  <Droplet size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Extended Engine Life</h3>
                <p className="text-qz-gray">
                  Fresh oil properly lubricates engine components, reducing wear and extending the life of your engine.
                </p>
              </div>
              
              <div className="service-card">
                <div className="mb-6 text-qz-lightblue">
                  <Clock size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Improved Performance</h3>
                <p className="text-qz-gray">
                  Clean oil helps your engine run more efficiently, improving overall vehicle performance and fuel economy.
                </p>
              </div>
              
              <div className="service-card">
                <div className="mb-6 text-qz-lightblue">
                  <AlertCircle size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Prevent Costly Repairs</h3>
                <p className="text-qz-gray">
                  Regular oil changes help prevent engine damage that can lead to expensive repairs or engine replacement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Process Section */}
        <section className="py-16 bg-qz-light">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-qz-blue text-center mb-6">
              Our Oil Change Process
            </h2>
            <p className="text-center text-qz-gray max-w-3xl mx-auto mb-12">
              At Quiet Zone, we don't just change your oil. Our comprehensive service includes a multi-point inspection to ensure your vehicle is in top condition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-premium p-6 md:p-8">
                <h3 className="text-2xl font-bold text-qz-blue mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  {[
                    "Drain old oil and replace with premium new oil",
                    "Replace oil filter with OEM or premium quality filter",
                    "Check and top off all fluids",
                    "Inspect belts and hoses",
                    "Check tire pressure and inflate if needed",
                    "Inspect battery and electrical system",
                    "Visual brake inspection",
                    "Check air filter",
                    "Reset oil life monitor (when applicable)",
                    "Apply maintenance sticker for next service"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={20} className="text-qz-yellow flex-shrink-0 mt-1 mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col space-y-6">
                <div className="bg-white rounded-xl shadow-premium p-6" id="pricing">
                  <h3 className="text-2xl font-bold text-qz-blue mb-4">Oil Change Options</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-qz-yellow bg-qz-light rounded-r-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-lg">Conventional Oil Change</h4>
                        <span className="text-qz-blue font-bold">$39.99</span>
                      </div>
                      <p className="text-sm text-qz-gray">Best for older vehicles with low mileage.</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-qz-yellow bg-qz-light rounded-r-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-lg">Synthetic Blend Oil Change</h4>
                        <span className="text-qz-blue font-bold">$59.99</span>
                      </div>
                      <p className="text-sm text-qz-gray">Recommended for most vehicles.</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-qz-yellow bg-qz-light rounded-r-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-lg">Full Synthetic Oil Change</h4>
                        <span className="text-qz-blue font-bold">$79.99</span>
                      </div>
                      <p className="text-sm text-qz-gray">Best for high-performance or newer vehicles.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-qz-blue text-white rounded-xl shadow-premium p-6">
                  <h3 className="text-xl font-bold mb-3">When should I change my oil?</h3>
                  <p className="mb-4">Most manufacturers recommend every 5,000-7,500 miles for synthetic oil, but it can vary based on:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check size={18} className="text-qz-yellow flex-shrink-0 mt-1 mr-2" />
                      <span>Driving conditions</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-qz-yellow flex-shrink-0 mt-1 mr-2" />
                      <span>Vehicle age and make</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-qz-yellow flex-shrink-0 mt-1 mr-2" />
                      <span>Type of oil used</span>
                    </li>
                  </ul>
                  <p>Our technicians can recommend the optimal schedule for your specific vehicle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-texture-light opacity-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready For Your Next Oil Change?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and experience the Quiet Zone difference. Quick service, quality products, and expert technicians.
            </p>
            
            <Link 
              to="/appointment?service=oil-change" 
              className="btn-accent text-lg px-8 py-4 inline-flex items-center justify-center shadow-xl"
            >
              Schedule Oil Change <Calendar size={20} className="ml-2" />
            </Link>
          </div>
        </section>
        
        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-qz-blue text-center mb-12">
              Related Maintenance Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Filter Replacement</h3>
                <p className="text-qz-gray mb-4">
                  Air, fuel, and cabin filters are essential for vehicle performance and air quality.
                </p>
                <Link 
                  to="/services/filter-replacement" 
                  className="text-qz-yellow font-semibold hover:text-qz-gold inline-flex items-center transition-colors"
                >
                  Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Fluid Flush Services</h3>
                <p className="text-qz-gray mb-4">
                  Keep your transmission, brake, and power steering systems working properly.
                </p>
                <Link 
                  to="/services/fluid-flush" 
                  className="text-qz-yellow font-semibold hover:text-qz-gold inline-flex items-center transition-colors"
                >
                  Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">30/60/90K Maintenance</h3>
                <p className="text-qz-gray mb-4">
                  Comprehensive maintenance packages to keep your vehicle running at its best.
                </p>
                <Link 
                  to="/services/scheduled-maintenance" 
                  className="text-qz-yellow font-semibold hover:text-qz-gold inline-flex items-center transition-colors"
                >
                  Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OilChangeService;
