
import React from 'react';
import { CheckCircle, Clock, Award, DollarSign, Users, Shield } from 'lucide-react';

const reasons = [
  {
    title: 'Experienced Technicians',
    description: 'Our ASE certified technicians have years of experience servicing all makes and models.',
    icon: <Users className="w-10 h-10 text-qz-red" />,
  },
  {
    title: 'Quality Parts & Service',
    description: 'We use only quality parts and follow manufacturer specifications for all repairs.',
    icon: <CheckCircle className="w-10 h-10 text-qz-red" />,
  },
  {
    title: 'Family Owned Since 1990',
    description: 'Over 30 years of serving Connecticut with honest, reliable automotive service.',
    icon: <Award className="w-10 h-10 text-qz-red" />,
  },
  {
    title: 'Fair & Transparent Pricing',
    description: 'No surprises or hidden fees. We provide detailed estimates before any work begins.',
    icon: <DollarSign className="w-10 h-10 text-qz-red" />,
  },
  {
    title: 'Warranty Protection',
    description: 'Our services are backed by industry-leading warranties for your peace of mind.',
    icon: <Shield className="w-10 h-10 text-qz-red" />,
  },
  {
    title: 'Convenient Hours',
    description: 'Open 6 days a week with early morning and evening hours to fit your schedule.',
    icon: <Clock className="w-10 h-10 text-qz-red" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-qz-gray">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Why Choose Quiet Zone CT</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We've been Connecticut's trusted alternative to expensive dealership service since 1990.
          Here's why thousands of customers choose us for their automotive needs:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
