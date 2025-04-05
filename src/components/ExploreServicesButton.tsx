import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ExploreServicesButton = () => {
  return (
    <Link 
      to="/services" 
      className="inline-flex items-center justify-center gap-2 bg-white text-qz-blue hover:bg-gray-50 
        font-bold py-6 px-8 rounded-full text-xl transition-all duration-300 shadow-lg 
        hover:shadow-xl w-full md:w-auto"
    >
      <span>Explore Services</span>
      <ArrowRight size={24} />
    </Link>
  );
};

export default ExploreServicesButton; 