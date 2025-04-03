import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, Car, Wrench, User, Phone, Mail, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const locations = [
  { id: 'torrington', name: 'Torrington', address: '1299 East Main Street, Torrington, CT 06790' },
  { id: 'thomaston', name: 'Thomaston', address: '123 Main Street, Thomaston, CT 06787' },
  { id: 'bantam', name: 'Bantam', address: '456 Church Street, Bantam, CT 06750' },
  { id: 'watertown', name: 'Watertown', address: '789 Water Street, Watertown, CT 06795' },
  { id: 'naugatuck', name: 'Naugatuck', address: '321 River Road, Naugatuck, CT 06770' },
  { id: 'orange', name: 'Orange', address: '654 Orange Avenue, Orange, CT 06477' },
];

const services = [
  { id: 'oil-change', name: 'Oil Change & Filter' },
  { id: 'brake-service', name: 'Brake Service & Repair' },
  { id: 'engine-diagnostic', name: 'Engine Diagnostic' },
  { id: 'ac-service', name: 'AC Service & Repair' },
  { id: 'tire-service', name: 'Tire Service & Replacement' },
  { id: 'battery-service', name: 'Battery Testing & Replacement' },
  { id: 'scheduled-maintenance', name: 'Scheduled Maintenance' },
  { id: 'check-engine-light', name: 'Check Engine Light Diagnosis' },
  { id: 'fluid-service', name: 'Fluid Services' },
  { id: 'other', name: 'Other Services' },
];

// Generate time slots from 8 AM to 5 PM
const generateTimeSlots = () => {
  const slots = [];
  for (let i = 8; i <= 17; i++) {
    const hour = i > 12 ? i - 12 : i;
    const ampm = i >= 12 ? 'PM' : 'AM';
    slots.push(`${hour}:00 ${ampm}`);
    if (i < 17) {
      slots.push(`${hour}:30 ${ampm}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

const Appointment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialLocationId = queryParams.get('location') || '';
  const initialServiceId = queryParams.get('service') || '';

  const [step, setStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(initialLocationId);
  const [selectedServices, setSelectedServices] = useState(initialServiceId ? [initialServiceId] : []);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceToggle = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment submitted:', {
      location: selectedLocation,
      services: selectedServices,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    setIsSubmitted(true);
  };

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep(step - 1);
  };

  const isStepOneValid = selectedLocation && selectedServices.length > 0;
  const isStepTwoValid = selectedDate && selectedTime;
  const isStepThreeValid = formData.firstName && formData.lastName && formData.email && formData.phone;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-qz-light">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-qz-blue text-center mb-4">
            Schedule Your Service Appointment
          </h1>
          <p className="text-center text-qz-gray max-w-2xl mx-auto mb-12">
            Complete the form below to schedule your service appointment at any of our six Connecticut locations.
          </p>
          
          {!isSubmitted ? (
            <div className="bg-white rounded-xl shadow-premium p-6 md:p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  {['Service Details', 'Date & Time', 'Your Information', 'Review & Confirm'].map((stepName, index) => (
                    <div 
                      key={index}
                      className={`text-sm font-medium ${step > index + 1 ? 'text-qz-yellow' : step === index + 1 ? 'text-qz-blue' : 'text-qz-gray'}`}
                    >
                      Step {index + 1}
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-qz-blue h-2 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${(step / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Step 1: Service Details */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-qz-blue mb-6 flex items-center">
                    <Wrench size={24} className="mr-2 text-qz-yellow" /> Select Service & Location
                  </h2>
                  
                  <div className="mb-8">
                    <label className="premium-label">Select Location</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {locations.map((loc) => (
                        <div 
                          key={loc.id}
                          className={`
                            p-4 rounded-lg border-2 cursor-pointer transition-all
                            ${selectedLocation === loc.id ? 'border-qz-yellow bg-qz-yellow/10' : 'border-gray-200 hover:border-qz-lightblue/30'}
                          `}
                          onClick={() => setSelectedLocation(loc.id)}
                        >
                          <div className="font-semibold">{loc.name}</div>
                          <div className="text-sm text-qz-gray mt-1">{loc.address}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="premium-label">Select Service(s)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {services.map((service) => (
                        <div 
                          key={service.id}
                          className={`
                            p-3 rounded-lg border cursor-pointer flex items-center transition-all
                            ${selectedServices.includes(service.id) ? 'border-qz-yellow bg-qz-yellow/10' : 'border-gray-200 hover:border-qz-lightblue/30'}
                          `}
                          onClick={() => handleServiceToggle(service.id)}
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedServices.includes(service.id) ? 'border-qz-yellow bg-qz-yellow' : 'border-gray-300'}`}>
                            {selectedServices.includes(service.id) && (
                              <CheckCircle size={14} className="text-white" />
                            )}
                          </div>
                          {service.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      onClick={nextStep}
                      disabled={!isStepOneValid}
                      className={`btn-primary inline-flex items-center ${!isStepOneValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      Continue <ArrowRight size={18} className="ml-1" />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-qz-blue mb-6 flex items-center">
                    <Calendar size={24} className="mr-2 text-qz-yellow" /> Select Date & Time
                  </h2>
                  
                  <div className="mb-8">
                    <label htmlFor="date" className="premium-label">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      className="premium-input"
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label className="premium-label">Preferred Time</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-2">
                      {timeSlots.map((time) => (
                        <div 
                          key={time}
                          className={`
                            p-3 rounded-lg border cursor-pointer text-center transition-all
                            ${selectedTime === time ? 'border-qz-yellow bg-qz-yellow/10 font-medium' : 'border-gray-200 hover:border-qz-lightblue/30'}
                          `}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      className="btn-primary inline-flex items-center"
                    >
                      <ArrowLeft size={18} className="mr-1" /> Back
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!isStepTwoValid}
                      className={`btn-primary inline-flex items-center ${!isStepTwoValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      Continue <ArrowRight size={18} className="ml-1" />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Your Information */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-qz-blue mb-6 flex items-center">
                    <User size={24} className="mr-2 text-qz-yellow" /> Your Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="premium-label">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="premium-input"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="premium-label">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="premium-input"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="premium-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="premium-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="premium-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="premium-input"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-qz-blue mb-4 flex items-center mt-8">
                    <Car size={20} className="mr-2 text-qz-yellow" /> Vehicle Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label htmlFor="vehicleMake" className="premium-label">Make</label>
                      <input
                        type="text"
                        id="vehicleMake"
                        name="vehicleMake"
                        className="premium-input"
                        value={formData.vehicleMake}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicleModel" className="premium-label">Model</label>
                      <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        className="premium-input"
                        value={formData.vehicleModel}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicleYear" className="premium-label">Year</label>
                      <input
                        type="text"
                        id="vehicleYear"
                        name="vehicleYear"
                        className="premium-input"
                        value={formData.vehicleYear}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="comments" className="premium-label">Additional Comments</label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={4}
                      className="premium-input"
                      value={formData.comments}
                      onChange={handleInputChange}
                      placeholder="Please provide any additional details about your service needs."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      className="btn-primary inline-flex items-center"
                    >
                      <ArrowLeft size={18} className="mr-1" /> Back
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!isStepThreeValid}
                      className={`btn-primary inline-flex items-center ${!isStepThreeValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      Review & Confirm <ArrowRight size={18} className="ml-1" />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 4: Review & Confirm */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-qz-blue mb-6">Review Your Appointment</h2>
                  
                  <div className="bg-qz-light rounded-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-qz-blue mb-2 flex items-center">
                          <Wrench size={18} className="mr-2 text-qz-yellow" /> Service Details
                        </h3>
                        <div className="mb-4">
                          <div className="text-sm text-qz-gray">Location:</div>
                          <div className="font-medium">
                            {locations.find(loc => loc.id === selectedLocation)?.name}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-qz-gray">Services:</div>
                          <ul className="list-disc list-inside">
                            {selectedServices.map(serviceId => (
                              <li key={serviceId} className="font-medium">
                                {services.find(s => s.id === serviceId)?.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-qz-blue mb-2 flex items-center">
                          <Calendar size={18} className="mr-2 text-qz-yellow" /> Appointment Time
                        </h3>
                        <div className="mb-4">
                          <div className="text-sm text-qz-gray">Date:</div>
                          <div className="font-medium">
                            {new Date(selectedDate).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-qz-gray">Time:</div>
                          <div className="font-medium">{selectedTime}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-qz-blue mb-2 flex items-center">
                          <User size={18} className="mr-2 text-qz-yellow" /> Your Information
                        </h3>
                        <div className="mb-2">
                          <div className="text-sm text-qz-gray">Name:</div>
                          <div className="font-medium">{formData.firstName} {formData.lastName}</div>
                        </div>
                        <div className="mb-2">
                          <div className="text-sm text-qz-gray">Email:</div>
                          <div className="font-medium">{formData.email}</div>
                        </div>
                        <div>
                          <div className="text-sm text-qz-gray">Phone:</div>
                          <div className="font-medium">{formData.phone}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-qz-blue mb-2 flex items-center">
                          <Car size={18} className="mr-2 text-qz-yellow" /> Vehicle Information
                        </h3>
                        {formData.vehicleMake && (
                          <div className="font-medium">
                            {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
                          </div>
                        )}
                        {formData.comments && (
                          <div className="mt-4">
                            <div className="text-sm text-qz-gray">Additional Comments:</div>
                            <div className="font-medium">{formData.comments}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      className="btn-primary inline-flex items-center"
                    >
                      <ArrowLeft size={18} className="mr-1" /> Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="btn-accent inline-flex items-center"
                    >
                      Confirm Appointment <CheckCircle size={18} className="ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-premium p-8 text-center">
              <div className="w-16 h-16 bg-qz-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-qz-yellow" />
              </div>
              <h2 className="text-2xl font-bold text-qz-blue mb-4">Appointment Confirmed!</h2>
              <p className="text-qz-gray max-w-lg mx-auto mb-8">
                Thank you for scheduling your service appointment with Quiet Zone. 
                We've sent a confirmation email to {formData.email} with your appointment details.
              </p>
              <div className="bg-qz-light rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
                <div className="mb-4">
                  <div className="text-sm text-qz-gray">Appointment Details:</div>
                  <div className="font-medium">
                    {new Date(selectedDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })} at {selectedTime}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-qz-gray">Location:</div>
                  <div className="font-medium">
                    {locations.find(loc => loc.id === selectedLocation)?.name}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-qz-gray">Service(s):</div>
                  <div className="font-medium">
                    {selectedServices.map(serviceId => (
                      services.find(s => s.id === serviceId)?.name
                    )).join(', ')}
                  </div>
                </div>
              </div>
              <Link to="/" className="btn-primary">
                Return to Homepage
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Appointment;
