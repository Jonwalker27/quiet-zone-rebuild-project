import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, Check, AlertTriangle, Droplet, Battery, Thermometer, Gauge, Search, ArrowRight, Wrench, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

// Dashboard warning lights data
const warningLights = [
  {
    id: 'check-engine',
    name: 'Check Engine Light',
    icon: <AlertTriangle className="text-amber-500 w-8 h-8" />,
    description: 'Indicates an issue with the engine or emissions system. Could be minor (loose gas cap) or severe (engine misfire).',
    urgency: 'Medium to High',
    action: 'Have your vehicle diagnosed as soon as possible to prevent further damage.'
  },
  {
    id: 'abs',
    name: 'ABS Warning Light',
    icon: <AlertTriangle className="text-amber-500 w-8 h-8" />,
    description: 'Indicates a problem with the anti-lock braking system, which helps prevent wheel lockup during hard braking.',
    urgency: 'Medium',
    action: 'Safe to drive but have it checked soon to maintain optimal braking performance.'
  },
  {
    id: 'battery',
    name: 'Battery Warning Light',
    icon: <Battery className="text-red-500 w-8 h-8" />,
    description: 'Indicates an issue with the charging system. Battery might not be charging properly.',
    urgency: 'High',
    action: 'Have your vehicle checked soon to avoid being stranded with a dead battery.'
  },
  {
    id: 'oil-pressure',
    name: 'Oil Pressure Warning',
    icon: <Droplet className="text-red-500 w-8 h-8" />,
    description: 'Indicates low oil pressure, which can cause severe engine damage quickly.',
    urgency: 'Very High',
    action: 'Stop driving immediately and have your vehicle towed to a service center.'
  },
  {
    id: 'coolant-temp',
    name: 'Coolant Temperature Warning',
    icon: <Thermometer className="text-red-500 w-8 h-8" />,
    description: 'Indicates the engine is overheating, which can cause serious damage.',
    urgency: 'Very High',
    action: 'Pull over safely, turn off the engine, and have your vehicle towed to a service center.'
  },
  {
    id: 'tire-pressure',
    name: 'Tire Pressure Warning',
    icon: <Gauge className="text-amber-500 w-8 h-8" />,
    description: 'Indicates one or more tires have pressure that is too low or too high.',
    urgency: 'Medium',
    action: 'Check your tire pressure and inflate to the recommended levels.'
  }
];

// Maintenance tips data
const maintenanceTips = [
  {
    id: 'oil-changes',
    title: 'Regular Oil Changes',
    description: 'Engine oil lubricates and protects vital engine components. Regular oil changes prevent premature wear and extend engine life.',
    frequency: 'Every 3,000-7,500 miles, depending on your vehicle and driving conditions',
    tipList: [
      'Check your oil level monthly',
      'Watch for oil leaks under your vehicle',
      'Follow manufacturer recommendations for oil type',
      'Consider synthetic oil for better protection in extreme temperatures'
    ]
  },
  {
    id: 'tire-maintenance',
    title: 'Tire Maintenance',
    description: 'Proper tire maintenance ensures safety, improves fuel economy, and extends tire life.',
    frequency: 'Tire rotation every 5,000-7,500 miles; pressure check monthly',
    tipList: [
      'Check tire pressure when tires are cold',
      'Look for uneven wear patterns',
      'Rotate tires regularly for even wear',
      'Ensure proper wheel alignment to prevent premature tire wear'
    ]
  },
  {
    id: 'brake-system',
    title: 'Brake System Care',
    description: 'Your braking system is crucial for safety. Regular inspections help prevent brake failure and expensive repairs.',
    frequency: 'Inspection every 10,000-15,000 miles or if you notice issues',
    tipList: [
      'Listen for squealing or grinding noises',
      'Pay attention to soft or spongy brake pedal feel',
      'Watch for longer stopping distances',
      'Have brake fluid flushed according to manufacturer recommendations'
    ]
  },
  {
    id: 'battery-care',
    title: 'Battery Maintenance',
    description: 'Your vehicle\'s battery provides the electrical power needed to start the engine and run accessories.',
    frequency: 'Inspection every 6 months; replacement typically every 3-5 years',
    tipList: [
      'Keep battery terminals clean and tight',
      'Have charging system tested if battery repeatedly dies',
      'Consider a battery tender for vehicles not driven regularly',
      'Replace batteries that are over 3 years old if starting to show signs of weakness'
    ]
  },
  {
    id: 'fluid-checks',
    title: 'Fluid Level Checks',
    description: 'Various fluids keep your vehicle\'s systems functioning properly. Regular checks help prevent damage.',
    frequency: 'Monthly checks; replacements according to maintenance schedule',
    tipList: [
      'Check engine oil, coolant, brake fluid, power steering fluid, and windshield washer fluid',
      'Look for leaks or puddles under your vehicle',
      'Ensure fluids are clear and at proper levels',
      'Follow manufacturer\'s recommendations for fluid types'
    ]
  },
  {
    id: 'filter-replacements',
    title: 'Filter Replacements',
    description: 'Air, fuel, and cabin filters ensure clean air flow to your engine, fuel system, and cabin.',
    frequency: 'Air filter: 15,000-30,000 miles; Cabin filter: 15,000-25,000 miles',
    tipList: [
      'Replace air filter more frequently if driving in dusty conditions',
      'Clean cabin filter helps improve air quality and AC performance',
      'Check fuel filter according to manufacturer recommendations',
      'Consider a washable performance air filter for long-term savings'
    ]
  }
];

// Cost-free maintenance tips data
const costFreeTips = [
  {
    id: 'headlights',
    title: 'Use Toothpaste to Clean Foggy Headlights',
    description: 'Over time, headlights can get cloudy, reducing nighttime visibility. A simple trick is to apply toothpaste to a soft cloth and gently rub it onto the headlights in circular motions. Rinse to reveal clearer, brighter lights.',
    category: 'Exterior Care'
  },
  {
    id: 'tire-check',
    title: 'Check Tire Tread Depth with a Penny',
    description: 'You don\'t need a special tool to check your tire tread. Insert a penny into the tread groove, Lincoln\'s head facing down. If you can see the top of Lincoln\'s head, it\'s time to replace your tires.',
    category: 'Tire Maintenance'
  },
  {
    id: 'wiper-fluid',
    title: 'Check and Replace Windshield Wiper Fluid Regularly',
    description: 'Not having enough wiper fluid can compromise your ability to clear debris from your windshield. Check the fluid level regularly and top it off to ensure you\'re ready for any unexpected rain or dirt.',
    category: 'Visibility & Safety'
  },
  {
    id: 'potato-ice',
    title: 'Apply Potato to Remove Windshield Ice',
    description: 'If you\'re dealing with winter mornings and frozen windshields, cut a potato in half and rub the cut side over the glass before freezing temperatures hit. The starch helps to prevent ice from building up, saving you time and effort during your commute.',
    category: 'Winter Care'
  },
  {
    id: 'vinegar-deicer',
    title: 'Use Vinegar as a DIY De-Icer',
    description: 'For a natural way to prevent windshield frost, mix three parts vinegar with one part water in a spray bottle. Spraying it the night before can keep your windows clear of ice, making your mornings easier during the winter months.',
    category: 'Winter Care'
  },
  {
    id: 'tree-sap',
    title: 'Remove Tree Sap with Rubbing Alcohol',
    description: 'If your car is covered in tree sap, rubbing alcohol can help remove it. Dampen a soft cloth with rubbing alcohol and gently rub the sap off the surface. It\'s a simple and effective way to restore your car\'s appearance.',
    category: 'Exterior Care'
  },
  {
    id: 'door-seals',
    title: 'Apply Petroleum Jelly to Door Seals',
    description: 'In cold weather, door seals can freeze, making it hard to open your car. Rubbing a thin layer of petroleum jelly on the seals helps keep them from freezing, allowing your car doors to open easily in winter.',
    category: 'Winter Care'
  },
  {
    id: 'battery-clean',
    title: 'Use Cola to Clean Battery Terminals',
    description: 'Coca-Cola\'s acidity is great for removing corrosion from your car battery terminals. Pour a small amount on the terminals, let it sit for a few minutes, then clean with a cloth to improve battery performance.',
    category: 'Battery Care'
  },
  {
    id: 'keychain',
    title: 'Lighten Your Keychain',
    description: 'Heavy keychains can strain your ignition switch over time, potentially causing damage. By lightening your keychain and only keeping essential keys, you can reduce the wear and tear on your ignition system.',
    category: 'Preventive Maintenance'
  },
  {
    id: 'deodorize',
    title: 'Deodorize Your Car with Baking Soda',
    description: 'To remove unpleasant odors from your vehicle, sprinkle a little baking soda on your car\'s upholstery or carpets. Let it sit for a while, then vacuum it up for a fresh, clean scent.',
    category: 'Interior Care'
  }
];

// Seasonal tips
const seasonalTips = [
  {
    season: 'Spring',
    tips: [
      'Check and replace wiper blades after winter wear',
      'Inspect tires for winter damage',
      'Wash undercarriage to remove road salt',
      'Check AC system before summer heat'
    ]
  },
  {
    season: 'Summer',
    tips: [
      'Check coolant levels and cooling system',
      'Test AC performance',
      'Check battery (heat can strain batteries)',
      'Monitor tire pressure (heat increases pressure)'
    ]
  },
  {
    season: 'Fall',
    tips: [
      'Check heater and defrost systems',
      'Inspect wiper blades before winter',
      'Check battery before cold weather',
      'Consider switching to winter tires'
    ]
  },
  {
    season: 'Winter',
    tips: [
      'Keep gas tank at least half full to prevent fuel line freezing',
      'Check tire tread for safe winter driving',
      'Test your battery (cold reduces battery power)',
      'Replace worn wiper blades and fill washer fluid with winter formula'
    ]
  }
];

const Resources = () => {
  const [activeSection, setActiveSection] = useState('warning-lights');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter warning lights based on search term
  const filteredWarningLights = warningLights.filter(light => 
    light.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    light.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Filter maintenance tips based on search term
  const filteredMaintenanceTips = maintenanceTips.filter(tip => 
    tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    tip.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Filter cost-free tips based on search term
  const filteredCostFreeTips = costFreeTips.filter(tip => 
    tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tip.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-light opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Automotive <span className="text-qz-yellow">Resources</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your guide to understanding your vehicle, from warning lights to maintenance schedules.
              Keep your car running smoothly with our expert tips and advice.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-white/70" />
              </div>
              <input
                type="text"
                placeholder="Search for warning lights, maintenance tips..."
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-qz-yellow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        {/* Resource Navigation */}
        <section className="bg-qz-light border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 py-4">
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeSection === 'warning-lights' 
                    ? 'bg-qz-blue text-white' 
                    : 'bg-white text-qz-blue hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('warning-lights')}
              >
                Warning Lights
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeSection === 'maintenance-tips' 
                    ? 'bg-qz-blue text-white' 
                    : 'bg-white text-qz-blue hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('maintenance-tips')}
              >
                Maintenance Tips
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeSection === 'cost-free-tips' 
                    ? 'bg-qz-blue text-white' 
                    : 'bg-white text-qz-blue hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('cost-free-tips')}
              >
                Cost-Free Tips
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeSection === 'seasonal-care' 
                    ? 'bg-qz-blue text-white' 
                    : 'bg-white text-qz-blue hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('seasonal-care')}
              >
                Seasonal Car Care
              </button>
            </div>
          </div>
        </section>
        
        {/* Warning Lights Section */}
        {activeSection === 'warning-lights' && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mx-auto mb-12 text-center">
                <h2 className="text-3xl font-bold text-qz-blue mb-4">Dashboard Warning Lights</h2>
                <p className="text-qz-gray">
                  Understanding what your car is trying to tell you can save you from expensive repairs and keep you safe on the road.
                  Below are common warning lights you might see on your dashboard.
                </p>
              </div>
              
              {searchTerm && filteredWarningLights.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-lg text-qz-gray mb-4">No warning lights match your search.</p>
                  <p className="mb-8">Try a different search term or contact us for specific information.</p>
                  <Link to="/contact" className="btn-primary">
                    Contact Our Experts
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredWarningLights.map((light) => (
                    <div key={light.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center">
                        {light.icon}
                        <h3 className="text-xl font-bold text-qz-blue ml-3">{light.name}</h3>
                      </div>
                      <div className="p-6">
                        <p className="text-qz-gray mb-4">{light.description}</p>
                        <div className="mb-4">
                          <span className="font-semibold block text-qz-blue">Urgency:</span>
                          <span 
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 ${
                              light.urgency.includes('High') ? 'bg-red-100 text-red-800' :
                              light.urgency.includes('Medium') ? 'bg-amber-100 text-amber-800' :
                              'bg-green-100 text-green-800'
                            }`}
                          >
                            {light.urgency}
                          </span>
                        </div>
                        <div className="mb-6">
                          <span className="font-semibold block text-qz-blue">Recommended Action:</span>
                          <p className="mt-1">{light.action}</p>
                        </div>
                        <Link 
                          to="/appointment" 
                          className="btn-accent inline-flex items-center text-sm"
                        >
                          Schedule a Diagnostic <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="text-center mt-12">
                <p className="text-lg mb-4">
                  Not sure about a warning light not listed here? Our technicians can help diagnose any dashboard warning.
                </p>
                <Link to="/appointment" className="btn-primary inline-flex items-center">
                  Schedule a Diagnostic <Calendar size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </section>
        )}
        
        {/* Maintenance Tips Section */}
        {activeSection === 'maintenance-tips' && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mx-auto mb-12 text-center">
                <h2 className="text-3xl font-bold text-qz-blue mb-4">Maintenance Tips</h2>
                <p className="text-qz-gray">
                  Regular maintenance is key to extending the life of your vehicle and preventing costly repairs.
                  Follow these tips to keep your car running smoothly for years to come.
                </p>
              </div>
              
              {searchTerm && filteredMaintenanceTips.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-lg text-qz-gray mb-4">No maintenance tips match your search.</p>
                  <p className="mb-8">Try a different search term or contact us for specific information.</p>
                  <Link to="/contact" className="btn-primary">
                    Contact Our Experts
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredMaintenanceTips.map((tip) => (
                    <div key={tip.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-qz-blue mb-2">{tip.title}</h3>
                        <p className="text-qz-gray mb-4">{tip.description}</p>
                        
                        <div className="mb-4">
                          <span className="font-semibold text-qz-blue">Recommended Frequency:</span>
                          <p className="mt-1">{tip.frequency}</p>
                        </div>
                        
                        <h4 className="font-semibold text-qz-blue mb-2">Key Tips:</h4>
                        <ul className="space-y-2 mb-6">
                          {tip.tipList.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check size={18} className="text-qz-yellow mr-2 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-4">
                          <Link 
                            to={`/services#${tip.id}`} 
                            className="text-qz-blue font-medium hover:text-qz-yellow transition-colors inline-flex items-center"
                          >
                            Learn About Our {tip.title} Service <ArrowRight size={16} className="ml-2" />
                          </Link>
                          
                          <Link 
                            to="/appointment" 
                            className="btn-accent inline-flex items-center text-sm"
                          >
                            Schedule Service <Wrench size={16} className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="bg-qz-light rounded-lg p-8 mt-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-qz-blue mb-3">Need a Comprehensive Inspection?</h3>
                  <p className="text-qz-gray mb-6">
                    Our multi-point inspection covers all essential systems in your vehicle to ensure everything is working properly.
                    Our technicians will identify potential issues before they become major problems.
                  </p>
                  <Link to="/appointment" className="btn-primary inline-flex items-center">
                    Schedule a Multi-Point Inspection <Calendar size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Cost-Free Maintenance Tips Section */}
        {activeSection === 'cost-free-tips' && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mx-auto mb-12 text-center">
                <h2 className="text-3xl font-bold text-qz-blue mb-4">Cost-Free Maintenance Tips</h2>
                <p className="text-qz-gray">
                  Taking care of your vehicle doesn't always require a mechanic or expensive tools. Here are some 
                  lesser-known, cost-free maintenance tips that every driver should know to keep their vehicle in top condition.
                </p>
              </div>
              
              {searchTerm && filteredCostFreeTips.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-lg text-qz-gray mb-4">No cost-free tips match your search.</p>
                  <p className="mb-8">Try a different search term or contact us for specific information.</p>
                  <Link to="/contact" className="btn-primary">
                    Contact Our Experts
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredCostFreeTips.map((tip) => (
                    <div key={tip.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-qz-blue mb-2">{tip.title}</h3>
                            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                              {tip.category}
                            </span>
                          </div>
                          <DollarSign size={24} className="text-green-500" />
                        </div>
                        
                        <p className="text-qz-gray mb-6">{tip.description}</p>
                        
                        <div className="flex flex-wrap gap-4">
                          <Link 
                            to="/appointment" 
                            className="btn-accent inline-flex items-center text-sm"
                          >
                            Schedule Professional Service <Wrench size={16} className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="bg-qz-light rounded-lg p-8 mt-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-qz-blue mb-3">Need Professional Help?</h3>
                  <p className="text-qz-gray mb-6">
                    While these DIY tips can help maintain your vehicle, sometimes professional service is necessary.
                    Our skilled technicians are ready to assist with more complex maintenance and repairs.
                  </p>
                  <Link to="/appointment" className="btn-primary inline-flex items-center">
                    Schedule a Service Appointment <Calendar size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Seasonal Car Care Section */}
        {activeSection === 'seasonal-care' && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mx-auto mb-12 text-center">
                <h2 className="text-3xl font-bold text-qz-blue mb-4">Seasonal Car Care</h2>
                <p className="text-qz-gray">
                  Different seasons present different challenges for your vehicle. 
                  Follow these seasonal tips to keep your car running smoothly all year round.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {seasonalTips.map((season) => (
                  <div key={season.season} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                    <div className={`px-6 py-4 border-b border-gray-200 ${
                      season.season === 'Spring' ? 'bg-green-50' :
                      season.season === 'Summer' ? 'bg-yellow-50' :
                      season.season === 'Fall' ? 'bg-orange-50' :
                      'bg-blue-50'
                    }`}>
                      <h3 className="text-xl font-bold text-qz-blue">{season.season} Car Care</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3 mb-6">
                        {season.tips.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className="text-qz-yellow mr-2 mt-1 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to="/appointment" 
                        className="btn-accent inline-flex items-center text-sm"
                      >
                        Schedule Seasonal Maintenance <Calendar size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-qz-blue text-white rounded-lg p-8">
                <div className="md:flex items-center justify-between">
                  <div className="md:w-2/3 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-3">Seasonal Maintenance Package</h3>
                    <p className="text-white/90">
                      Prepare your vehicle for the changing seasons with our comprehensive seasonal maintenance package.
                      Our technicians will ensure your vehicle is ready for whatever weather lies ahead.
                    </p>
                  </div>
                  <div className="md:w-1/3 text-center">
                    <Link to="/appointment" className="btn-accent inline-block w-full md:w-auto">
                      Schedule Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Expert Advice Section */}
        <section className="py-16 bg-qz-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-qz-blue mb-4">Need Expert Advice?</h2>
              <p className="text-qz-gray">
                Our ASE-certified technicians are here to help with any automotive questions or concerns you might have.
                Don't hesitate to contact us for personalized advice about your vehicle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Phone className="w-12 h-12 text-qz-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-qz-blue mb-2">Call Us</h3>
                <p className="text-qz-gray mb-4">Speak directly with our automotive experts.</p>
                <a 
                  href="tel:8604073984" 
                  className="text-qz-blue font-bold hover:text-qz-yellow transition-colors"
                >
                  (860) 407-3984
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <MessageSquare className="w-12 h-12 text-qz-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-qz-blue mb-2">Contact Us</h3>
                <p className="text-qz-gray mb-4">Send us a message with your question.</p>
                <Link 
                  to="/contact" 
                  className="text-qz-blue font-bold hover:text-qz-yellow transition-colors"
                >
                  Send a Message
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <CalendarCheck className="w-12 h-12 text-qz-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-qz-blue mb-2">Schedule Service</h3>
                <p className="text-qz-gray mb-4">Book an appointment at any location.</p>
                <Link 
                  to="/appointment" 
                  className="text-qz-blue font-bold hover:text-qz-yellow transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

// Additional icons
const Phone = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MessageSquare = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const CalendarCheck = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <path d="M9 16l2 2 4-4"></path>
  </svg>
);

export default Resources; 