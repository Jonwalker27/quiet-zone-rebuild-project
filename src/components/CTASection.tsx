
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-qz-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-qz-red"></div>
        <div className="absolute -left-10 -bottom-10 w-80 h-80 rounded-full bg-white"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Experience the Quiet Zone Difference?</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Schedule your service appointment today and see why thousands of Connecticut residents trust us with their vehicles.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/appointment" 
            className="btn-accent text-lg px-8 py-3 flex items-center justify-center"
          >
            Schedule Service <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link 
            to="/contact" 
            className="bg-white text-qz-blue hover:bg-gray-100 text-lg px-8 py-3 rounded flex items-center justify-center transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
        
        <p className="mt-8 text-white/80">
          Questions? Call us at <a href="tel:8604073984" className="text-white font-semibold hover:underline">(860) 407-3984</a>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
