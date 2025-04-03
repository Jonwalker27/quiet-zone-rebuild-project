
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServiceHighlights from '../components/ServiceHighlights';
import WhyChooseUs from '../components/WhyChooseUs';
import LocationsHighlight from '../components/LocationsHighlight';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceHighlights />
        <WhyChooseUs />
        <LocationsHighlight />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
