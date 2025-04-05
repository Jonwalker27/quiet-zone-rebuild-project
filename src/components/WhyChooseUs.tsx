import React from 'react';
import { CheckCircle, Clock, Award, DollarSign, Users, Shield } from 'lucide-react';

const reasons = [
  {
    title: 'Experienced Technicians',
    description: 'Our ASE certified technicians have years of experience servicing all makes and models.',
    icon: <Users className="w-10 h-10 text-qz-yellow" />,
  },
  {
    title: 'Quality Parts & Service',
    description: 'We use only quality parts and follow manufacturer specifications for all repairs.',
    icon: <CheckCircle className="w-10 h-10 text-qz-yellow" />,
  },
  {
    title: 'Family Owned Since 1990',
    description: 'Over 30 years of serving Connecticut with honest, reliable automotive service.',
    icon: <Award className="w-10 h-10 text-qz-yellow" />,
  },
  {
    title: 'Fair & Transparent Pricing',
    description: 'No surprises or hidden fees. We provide detailed estimates before any work begins.',
    icon: <DollarSign className="w-10 h-10 text-qz-yellow" />,
  },
  {
    title: 'Warranty Protection',
    description: 'Our services are backed by industry-leading warranties for your peace of mind.',
    icon: <Shield className="w-10 h-10 text-qz-yellow" />,
  },
  {
    title: 'Convenient Hours',
    description: 'Open 6 days a week with early morning and evening hours to fit your schedule.',
    icon: <Clock className="w-10 h-10 text-qz-yellow" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-qz-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-qz-blue text-center mb-4">Why Choose Quiet Zone CT</h2>
        <p className="text-center text-qz-dark max-w-3xl mx-auto mb-12">
          We've been Connecticut's trusted alternative to expensive dealership service since 1990.
          Here's why thousands of customers choose us for their automotive needs:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-qz-blue">{reason.title}</h3>
              <p className="text-qz-dark">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
