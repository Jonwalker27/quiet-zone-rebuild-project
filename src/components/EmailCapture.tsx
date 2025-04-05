import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface EmailCaptureProps {
  title: string;
  description: string;
  buttonText?: string;
  darkMode?: boolean;
  compact?: boolean;
  successMessage?: string;
  className?: string;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({
  title,
  description,
  buttonText = 'Subscribe',
  darkMode = false,
  compact = false,
  successMessage = 'Thanks for subscribing!',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your backend
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setEmail('');
    // Reset the subscribed state after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  // Base styles
  const containerClasses = darkMode
    ? 'bg-qz-blue text-white'
    : 'bg-qz-light text-qz-gray';
  
  const inputClasses = darkMode
    ? 'border-white/30 bg-white/10 text-white focus:border-qz-yellow'
    : 'border-gray-300 bg-white text-qz-gray focus:border-qz-blue';
  
  const buttonClasses = darkMode
    ? 'bg-qz-yellow hover:bg-qz-yellow/90 text-qz-blue'
    : 'bg-qz-blue hover:bg-qz-blue/90 text-white';
  
  const successClasses = darkMode
    ? 'text-qz-yellow'
    : 'text-green-600';

  return (
    <div className={`${containerClasses} ${compact ? 'p-4' : 'p-6'} rounded-lg ${className}`}>
      <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold ${darkMode ? 'text-white' : 'text-qz-blue'} mb-2`}>
        {title}
      </h3>
      <p className={`${compact ? 'text-sm' : ''} ${darkMode ? 'text-white/80' : 'text-qz-gray'} mb-4`}>
        {description}
      </p>
      
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Your email address"
          className={`flex-grow px-4 py-2 rounded-lg border ${inputClasses} focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-qz-yellow' : 'focus:ring-qz-blue'}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`${buttonClasses} font-medium py-2 px-6 rounded-lg transition-colors`}
        >
          {buttonText}
        </button>
      </form>
      
      {subscribed && (
        <p className={`mt-2 ${successClasses} flex items-center text-sm`}>
          <CheckCircle2 size={16} className="mr-1" /> {successMessage}
        </p>
      )}
      
      {darkMode && (
        <p className="text-white/60 text-xs mt-2">
          We respect your privacy and will never share your information.
        </p>
      )}
    </div>
  );
};

export default EmailCapture; 