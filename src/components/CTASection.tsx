
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-texture-light opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-qz-lightblue opacity-20 blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-qz-yellow opacity-10 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Experience the <span className="text-qz-yellow">Quiet Zone</span> Difference?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
          Schedule your service appointment today and see why thousands of Connecticut residents trust us with their vehicles.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link 
            to="/appointment" 
            className="btn-accent text-lg px-8 py-4 flex items-center justify-center shadow-xl"
          >
            Schedule Service <Calendar size={20} className="ml-2" />
          </Link>
          <Link 
            to="/contact" 
            className="bg-white text-qz-blue hover:bg-gray-100 text-lg px-8 py-4 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Contact Us <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        
        <div className="inline-block border border-white/20 rounded-full px-6 py-3 bg-white/5 backdrop-blur-sm">
          <p className="flex items-center justify-center text-white font-montserrat">
            <Phone size={20} className="mr-3 text-qz-yellow animate-pulse-soft" />
            Questions? Call us at <a href="tel:8604073984" className="text-qz-yellow font-semibold ml-2 hover:underline">(860) 407-3984</a>
          </p>
        </div>
      </div>
      
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 w-full h-full">
          <path fill="#F8F9FA" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
