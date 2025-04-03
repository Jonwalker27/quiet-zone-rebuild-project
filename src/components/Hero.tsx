
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-qz-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Expert Auto Repair You Can Trust
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Family owned and operated since 1990, providing quality service at affordable prices across Connecticut.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link to="/appointment" className="btn-accent text-lg px-8 py-3 flex items-center justify-center">
            Schedule Service <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link to="/services" className="bg-white text-qz-blue hover:bg-gray-100 text-lg px-8 py-3 rounded flex items-center justify-center transition-colors duration-300">
            Explore Services
          </Link>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="text-yellow-400 fill-yellow-400" size={20} />
            ))}
          </div>
          <span className="ml-2 text-white">4.8/5 from over 500 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
