
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jennifer M.",
    location: "Torrington",
    stars: 5,
    text: "I've been bringing my cars to Quiet Zone for years. Their service is always top-notch, prices are fair, and they never try to sell me services I don't need. Highly recommend!",
  },
  {
    id: 2,
    name: "Robert K.",
    location: "Thomaston",
    stars: 5,
    text: "The team at Quiet Zone saved me from a breakdown right before a long trip. They diagnosed the issue quickly and had me back on the road the same day. Great service!",
  },
  {
    id: 3,
    name: "Sarah P.",
    location: "Watertown",
    stars: 4,
    text: "As a woman who knows very little about cars, I appreciate how the staff takes time to explain everything to me without being condescending. I always feel I'm getting honest service.",
  },
  {
    id: 4,
    name: "Michael D.",
    location: "Bantam",
    stars: 5,
    text: "Changed from the dealership to Quiet Zone and I'm saving hundreds on regular maintenance without sacrificing quality. Their technicians are extremely knowledgeable.",
  },
  {
    id: 5,
    name: "Lisa T.",
    location: "Naugatuck",
    stars: 5,
    text: "I appreciate their text updates while my car is being serviced. Very transparent about what needs to be done and the costs. Will definitely continue going here.",
  },
  {
    id: 6,
    name: "David W.",
    location: "Orange",
    stars: 4,
    text: "Brought my truck in for an issue that two other places couldn't figure out. The team at Quiet Zone diagnosed and fixed it the same day. Great technical knowledge!",
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
    <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-texture-light opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          What Our <span className="text-qz-yellow">Customers</span> Say
        </h2>
        
        <div className="relative">
          {/* Previous button */}
          <button 
            onClick={goToPrev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white text-qz-blue rounded-full p-3 shadow-lg z-10 hover:bg-gray-100 transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Testimonials */}
          <div className="flex flex-wrap gap-6 lg:gap-8 justify-center">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-20px)] text-qz-dark relative"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 -left-2 text-qz-yellow opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M11.0933 8.02264C8.88871 8.02264 7.10433 9.80702 7.10433 12.0116C7.10433 14.2162 8.88871 16.0006 11.0933 16.0006C11.7445 16.0006 12.3551 15.8542 12.9037 15.5939C12.5214 17.0492 11.1722 18.127 9.60021 18.127C8.88376 18.127 8.30128 18.7095 8.30128 19.426C8.30128 20.1424 8.88376 20.7249 9.60021 20.7249C12.5518 20.7249 14.9433 18.3334 14.9433 15.3818C14.9433 15.3766 14.9432 15.3713 14.9431 15.3661C14.9216 13.1841 13.2714 11.5339 11.0895 11.5123C11.0842 11.5123 11.0788 11.5123 11.0733 11.5123C10.357 11.5123 9.77449 10.9298 9.77449 10.2133C9.77449 9.49686 10.357 8.91438 11.0733 8.91438H11.0933C11.8098 8.91438 12.3923 9.49686 12.3923 10.2133C12.3923 10.9298 12.9748 11.5123 13.6912 11.5123C14.4077 11.5123 14.9902 10.9298 14.9902 10.2133C14.9902 8.01569 13.291 6.31653 11.0933 6.31653H11.0733C8.88069 6.31653 7.1001 8.09069 7.08538 10.2812C7.08526 10.2918 7.08519 10.3024 7.08519 10.3131C7.08519 10.3224 7.08524 10.3316 7.08533 10.3408C7.0862 10.3503 7.08663 10.3599 7.08663 10.3695C7.08663 10.379 7.0862 10.3886 7.08533 10.398C7.08524 10.4073 7.08519 10.4165 7.08519 10.4258C7.08519 10.4365 7.08526 10.4471 7.08538 10.4577C7.09443 11.4155 7.43641 12.2917 7.99476 12.9887C7.43552 13.686 7.09307 14.5631 7.08538 15.521C7.08526 15.5316 7.08519 15.5422 7.08519 15.553C7.08519 15.5623 7.08524 15.5715 7.08533 15.5807C7.0862 15.5902 7.08663 15.5998 7.08663 15.6094C7.08663 15.6189 7.0862 15.6285 7.08533 15.6379C7.08524 15.6472 7.08519 15.6564 7.08519 15.6657C7.08519 15.6764 7.08526 15.687 7.08538 15.6976C7.10011 17.8894 8.88166 19.6648 11.0756 19.6648H11.0955C13.2941 19.6648 15.0862 17.8986 15.0933 15.7018C15.1005 13.4996 13.2998 11.6783 11.0933 11.6783C10.377 11.6783 9.79449 11.0959 9.79449 10.3794C9.79449 9.66295 10.377 9.08047 11.0933 9.08047V8.02264Z"></path>
                    <path d="M4.6035 8.02264C2.39887 8.02264 0.614502 9.80702 0.614502 12.0116C0.614502 14.2162 2.39887 16.0006 4.6035 16.0006C5.25464 16.0006 5.86526 15.8542 6.41383 15.5939C6.03157 17.0492 4.68233 18.127 3.1104 18.127C2.39394 18.127 1.81146 18.7095 1.81146 19.426C1.81146 20.1424 2.39394 20.7249 3.1104 20.7249C6.06201 20.7249 8.45344 18.3334 8.45344 15.3818C8.45344 15.3766 8.45339 15.3713 8.45329 15.3661C8.43175 13.1841 6.78163 11.5339 4.59965 11.5123C4.59439 11.5123 4.58913 11.5123 4.58386 11.5123C3.86741 11.5123 3.28493 10.9298 3.28493 10.2133C3.28493 9.49686 3.86741 8.91438 4.58386 8.91438H4.6035C5.32001 8.91438 5.90249 9.49686 5.90249 10.2133C5.90249 10.9298 6.48497 11.5123 7.20142 11.5123C7.91788 11.5123 8.50036 10.9298 8.50036 10.2133C8.50036 8.01569 6.80114 6.31653 4.6035 6.31653H4.58386C2.39122 6.31653 0.610676 8.09069 0.595954 10.2812C0.595839 10.2918 0.59577 10.3024 0.59577 10.3131C0.59577 10.3224 0.595816 10.3316 0.595908 10.3408C0.596775 10.3503 0.597208 10.3599 0.597208 10.3695C0.597208 10.379 0.596775 10.3886 0.595908 10.398C0.595816 10.4073 0.59577 10.4165 0.59577 10.4258C0.59577 10.4365 0.595839 10.4471 0.595954 10.4577C0.604612 11.4155 0.94659 12.2917 1.50494 12.9887C0.945701 13.686 0.603252 14.5631 0.595954 15.521C0.595839 15.5316 0.59577 15.5422 0.59577 15.553C0.59577 15.5623 0.595816 15.5715 0.595908 15.5807C0.596775 15.5902 0.597208 15.5998 0.597208 15.6094C0.597208 15.6189 0.596775 15.6285 0.595908 15.6379C0.595816 15.6472 0.59577 15.6564 0.59577 15.6657C0.59577 15.6764 0.595839 15.687 0.595954 15.6976C0.610676 17.8894 2.39219 19.6648 4.5861 19.6648H4.6061C6.80443 19.6648 8.59654 17.8986 8.60368 15.7018C8.61081 13.4996 6.81001 11.6783 4.6035 11.6783C3.88705 11.6783 3.30457 11.0959 3.30457 10.3794C3.30457 9.66295 3.88705 9.08047 4.6035 9.08047V8.02264Z"></path>
                  </svg>
                </div>
                
                <div className="flex items-center mb-4 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.stars ? "text-qz-yellow fill-qz-yellow" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="italic mb-5 text-qz-dark">"{testimonial.text}"</p>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="font-montserrat font-semibold text-qz-blue">{testimonial.name}</div>
                  <div className="text-sm text-qz-gray">{testimonial.location} Location</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Next button */}
          <button 
            onClick={goToNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white text-qz-blue rounded-full p-3 shadow-lg z-10 hover:bg-gray-100 transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-qz-yellow w-8' : 'bg-white/30 hover:bg-white/50'
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
