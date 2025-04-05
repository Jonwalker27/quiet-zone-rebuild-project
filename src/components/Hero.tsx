import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Calendar } from 'lucide-react';
import ExploreServicesButton from './ExploreServicesButton';

const Hero = () => {
  return (
    <div className="relative bg-gradient-primary text-white overflow-hidden">
      {/* Professional auto repair shop background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-50"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-qz-blue/90 to-qz-blue/70"></div>
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-texture-light opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Expert Auto Repair <span className="text-qz-yellow">You Can Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/90 font-light">
            Family owned and operated since 1990, providing quality service at affordable prices across Connecticut.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-12 justify-center">
            <Link to="/appointment" className="btn-accent text-lg px-8 py-4 flex items-center justify-center shadow-xl">
              Schedule Service <Calendar size={20} className="ml-2" />
            </Link>
            <ExploreServicesButton />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-qz-yellow fill-qz-yellow" size={24} />
                ))}
              </div>
              <span className="ml-3 text-white font-semibold">4.8/5 from over 500 reviews</span>
            </div>
            
            <div className="h-12 border-l border-white/20 hidden md:block"></div>
            
            <div className="flex items-center">
              <CheckCircle size={24} className="text-qz-yellow mr-3" />
              <span className="text-white font-semibold">ASE Certified Technicians</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
          <path fill="#F8F9FA" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
