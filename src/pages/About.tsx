import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Mail, Award, Users, Clock, Shield, Wrench, MapPin, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import EmailCapture from '../components/EmailCapture';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-light opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-qz-yellow">Quiet Zone</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Family owned and operated since 1990, we've been serving Connecticut 
              with honest, reliable automotive services for over three decades.
            </p>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-qz-blue mb-6">Our Story</h2>
                <div className="space-y-4 text-qz-gray">
                  <p>
                    What began as a small family repair shop in Torrington in 1990 has grown into 
                    Connecticut's trusted network of automotive service centers. Quiet Zone was 
                    founded by James Wilson, a master mechanic with a vision to create an auto 
                    repair business built on honesty, quality, and customer education.
                  </p>
                  <p>
                    The name "Quiet Zone" comes from our founder's commitment to eliminating those 
                    worrying sounds your vehicle makes - and the peace of mind our customers feel 
                    knowing their car is in expert hands.
                  </p>
                  <p>
                    Our connection to Connecticut's automotive history runs deep. When we expanded to 
                    Naugatuck in 2012, we took over a historic service station that had been operating 
                    since 1958 (pictured here). We've preserved the character of this landmark location 
                    while upgrading it with modern equipment and technology.
                  </p>
                  <p>
                    Over the decades, we've expanded to six locations across Connecticut, but our 
                    values remain unchanged. Now led by the second generation of the Wilson family, 
                    we continue to provide reliable, transparent service with the latest diagnostic 
                    technology and ASE-certified technicians at every location.
                  </p>
                </div>
                
                {/* Email Capture - Inline */}
                <div className="mt-8">
                  <EmailCapture
                    title="Get Our Story in Your Inbox"
                    description="Subscribe to receive our monthly newsletter with maintenance tips, special offers, and Quiet Zone news."
                    buttonText="Subscribe"
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-xl font-bold text-qz-blue mb-4">Our Historical Roots</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-lg col-span-2">
                    <img 
                      src="/images/1958%20Quiet%20Zone%20CT%20NAUGATUCK.jpg" 
                      alt="Historical Quiet Zone Naugatuck location from 1958" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg col-span-2">
                    <img 
                      src="/images/1958%20Quiet%20Zone%20CT%20NAUGATUCK%202.jpg" 
                      alt="Inside the original Quiet Zone shop in Naugatuck, 1958" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="col-span-2 text-center italic text-sm text-qz-gray mt-2">
                    Historical photos of our Naugatuck location from 1958, showing the rich heritage of Quiet Zone in Connecticut.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 bg-qz-light">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-qz-blue text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-qz-blue/10 p-4 rounded-full mb-4">
                  <Shield size={36} className="text-qz-blue" />
                </div>
                <h3 className="text-xl font-bold text-qz-blue mb-2">Integrity</h3>
                <p className="text-qz-gray">
                  We believe in honest assessments, fair pricing, and 
                  never recommending unnecessary services.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-qz-blue/10 p-4 rounded-full mb-4">
                  <Award size={36} className="text-qz-blue" />
                </div>
                <h3 className="text-xl font-bold text-qz-blue mb-2">Excellence</h3>
                <p className="text-qz-gray">
                  From our ASE-certified technicians to state-of-the-art equipment, 
                  we commit to quality in everything we do.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-qz-blue/10 p-4 rounded-full mb-4">
                  <Users size={36} className="text-qz-blue" />
                </div>
                <h3 className="text-xl font-bold text-qz-blue mb-2">Community</h3>
                <p className="text-qz-gray">
                  As a local family business, we're committed to giving back 
                  to the communities we serve across Connecticut.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-qz-blue/10 p-4 rounded-full mb-4">
                  <Wrench size={36} className="text-qz-blue" />
                </div>
                <h3 className="text-xl font-bold text-qz-blue mb-2">Education</h3>
                <p className="text-qz-gray">
                  We empower our customers with knowledge about their vehicles 
                  so they can make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Lead Generation - Book or Contact */}
        <section className="py-12 bg-qz-blue/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Schedule Service */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-qz-blue p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ready for Service?</h3>
                  <p>Schedule an appointment at any of our six convenient locations across Connecticut.</p>
                </div>
                <div className="p-6">
                  <div className="mb-6 space-y-4">
                    <div className="flex items-start">
                      <Clock size={20} className="text-qz-yellow mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block text-qz-blue">Quick Service Times</strong>
                        <p className="text-sm text-qz-gray">Most routine services completed same-day</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin size={20} className="text-qz-yellow mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block text-qz-blue">Multiple Locations</strong>
                        <p className="text-sm text-qz-gray">Six convenient shops across Connecticut</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/appointment" 
                    className="w-full btn-accent flex items-center justify-center"
                  >
                    Schedule Service <Calendar size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
              
              {/* Contact Us */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-qz-blue p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Questions?</h3>
                  <p>Our friendly team is here to answer any questions you might have.</p>
                </div>
                <div className="p-6">
                  <div className="mb-6 space-y-4">
                    <div className="flex items-start">
                      <Phone size={20} className="text-qz-yellow mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block text-qz-blue">Call Us</strong>
                        <a 
                          href="tel:8604073984" 
                          className="text-qz-blue hover:text-qz-yellow transition-colors"
                        >
                          (860) 407-3984
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail size={20} className="text-qz-yellow mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block text-qz-blue">Email Us</strong>
                        <a 
                          href="mailto:info@quietzonect.com" 
                          className="text-qz-blue hover:text-qz-yellow transition-colors"
                        >
                          info@quietzonect.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    Contact Us <ChevronRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Milestones */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-qz-blue text-center mb-12">Our Journey</h2>
            
            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-qz-blue/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* 1990 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-qz-blue">1990</h3>
                    <p className="text-qz-gray">
                      James Wilson opens the first Quiet Zone auto repair shop in Torrington, Connecticut
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-qz-blue flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-12 hidden md:block"></div>
                </div>
                
                {/* 1997 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-qz-blue flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-qz-blue">1997</h3>
                    <p className="text-qz-gray">
                      Expansion to Thomaston location, doubling the business capacity
                    </p>
                  </div>
                </div>
                
                {/* 2005 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-qz-blue">2005</h3>
                    <p className="text-qz-gray">
                      Michael Wilson takes over the business from his father and opens the Bantam location
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-qz-blue flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-12 hidden md:block"></div>
                </div>
                
                {/* 2012 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-qz-blue flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-qz-blue">2012</h3>
                    <p className="text-qz-gray">
                      Rapid expansion with new locations in Watertown and the acquisition of the historic 1958 service station in Naugatuck
                    </p>
                  </div>
                </div>
                
                {/* 2020 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-qz-blue">2020</h3>
                    <p className="text-qz-gray">
                      Opening of our flagship Orange location and celebrating 30 years of service
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-qz-blue flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="flex-1 md:pl-12 hidden md:block"></div>
                </div>
                
                {/* Today */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-qz-yellow flex items-center justify-center">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-qz-blue">Today</h3>
                    <p className="text-qz-gray">
                      Continuing to grow while maintaining our commitment to quality service across Connecticut
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Full Width Email Capture */}
        <section className="py-12 bg-qz-blue">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <EmailCapture
              title="Join the Quiet Zone Family"
              description="Subscribe to our newsletter for maintenance tips, special offers, and updates from our team. We'll send you a special discount on your first service as a thank you!"
              buttonText="Subscribe & Save"
              darkMode={true}
              successMessage="Thanks for subscribing! Check your email for your welcome discount."
              className="max-w-lg mx-auto"
            />
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About; 