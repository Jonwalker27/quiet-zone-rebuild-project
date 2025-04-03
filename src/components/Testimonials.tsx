
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jennifer M.',
    location: 'Torrington',
    stars: 5,
    text: 'I've been bringing my cars to Quiet Zone for years. Their service is always top-notch, prices are fair, and they never try to sell me services I don't need. Highly recommend!',
  },
  {
    id: 2,
    name: 'Robert K.',
    location: 'Thomaston',
    stars: 5,
    text: 'The team at Quiet Zone saved me from a breakdown right before a long trip. They diagnosed the issue quickly and had me back on the road the same day. Great service!',
  },
  {
    id: 3,
    name: 'Sarah P.',
    location: 'Watertown',
    stars: 4,
    text: 'As a woman who knows very little about cars, I appreciate how the staff takes time to explain everything to me without being condescending. I always feel I'm getting honest service.',
  },
  {
    id: 4,
    name: 'Michael D.',
    location: 'Bantam',
    stars: 5,
    text: 'Changed from the dealership to Quiet Zone and I'm saving hundreds on regular maintenance without sacrificing quality. Their technicians are extremely knowledgeable.',
  },
  {
    id: 5,
    name: 'Lisa T.',
    location: 'Naugatuck',
    stars: 5,
    text: 'I appreciate their text updates while my car is being serviced. Very transparent about what needs to be done and the costs. Will definitely continue going here.',
  },
  {
    id: 6,
    name: 'David W.',
    location: 'Orange',
    stars: 4,
    text: 'Brought my truck in for an issue that two other places couldn't figure out. The team at Quiet Zone diagnosed and fixed it the same day. Great technical knowledge!',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  // Determine how many testimonials to show based on screen size
  const updateVisibleTestimonials = () => {
    let displayCount = 1;
    if (window.innerWidth >= 768) displayCount = 2;
    if (window.innerWidth >= 1024) displayCount = 3;
    
    // Create a new array of visible testimonials
    const startIndex = activeIndex;
    let newVisible = [];
    
    for (let i = 0; i < displayCount; i++) {
      const index = (startIndex + i) % testimonials.length;
      newVisible.push(testimonials[index]);
    }
    
    setVisibleTestimonials(newVisible);
  };

  // Initialize and handle window resize
  useEffect(() => {
    updateVisibleTestimonials();
    window.addEventListener('resize', updateVisibleTestimonials);
    
    return () => {
      window.removeEventListener('resize', updateVisibleTestimonials);
    };
  }, [activeIndex]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-qz-blue text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">What Our Customers Say</h2>
        
        <div className="relative">
          {/* Previous button */}
          <button 
            onClick={goToPrev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-qz-blue rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Testimonials */}
          <div className="flex flex-wrap gap-6 justify-center">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] text-gray-800"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location} Location</div>
              </div>
            ))}
          </div>
          
          {/* Next button */}
          <button 
            onClick={goToNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-qz-blue rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
