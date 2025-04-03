
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const predefinedResponses = {
  'hours': "Our hours are Monday-Friday 8am-6pm, Saturday 8am-2pm, and we're closed on Sundays.",
  'services': "We offer a full range of automotive services including oil changes, brake repair, engine diagnostics, emissions testing, AC service, and much more. Would you like information about a specific service?",
  'appointment': "You can schedule an appointment online through our website, call us directly at (860) 407-3984, or just stop by during our business hours.",
  'locations': "We have 6 locations across Connecticut in Torrington, Thomaston, Bantam, Watertown, Naugatuck, and Orange. Would you like specific information about any of these locations?",
  'pricing': "Our pricing varies depending on the service and your vehicle. We're committed to fair, transparent pricing and can provide estimates before performing any work.",
  'default': "Thanks for your message! For immediate assistance, please call us at (860) 407-3984. If you'd prefer, you can leave your name, contact information, and question, and we'll get back to you as soon as possible."
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    {
      text: "Hi there! How can we help you today?",
      isUser: false
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMessage = { text: newMessage, isUser: true };
    setMessages([...messages, userMessage]);
    
    // Generate response
    setTimeout(() => {
      let responseText = predefinedResponses.default;
      
      // Check for keywords in the message
      const lowerMessage = newMessage.toLowerCase();
      
      if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('time')) {
        responseText = predefinedResponses.hours;
      } else if (lowerMessage.includes('service') || lowerMessage.includes('repair') || lowerMessage.includes('fix')) {
        responseText = predefinedResponses.services;
      } else if (lowerMessage.includes('appointment') || lowerMessage.includes('schedule') || lowerMessage.includes('book')) {
        responseText = predefinedResponses.appointment;
      } else if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('address')) {
        responseText = predefinedResponses.locations;
      } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
        responseText = predefinedResponses.pricing;
      }
      
      setMessages(prev => [...prev, { text: responseText, isUser: false }]);
    }, 500);
    
    // Clear input
    setNewMessage('');
  };

  return (
    <>
      {/* Chat toggle button */}
      <button 
        onClick={toggleChat} 
        className={`fixed bottom-6 right-6 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isOpen ? 'bg-qz-red rotate-90' : 'bg-qz-blue hover:bg-qz-lightblue'
        }`}
        aria-label="Chat with us"
      >
        {isOpen ? (
          <X size={24} className="m-4 text-white" />
        ) : (
          <MessageCircle size={24} className="m-4 text-white" />
        )}
      </button>
      
      {/* Chat widget */}
      <div 
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-qz-blue text-white p-4">
          <h3 className="font-semibold">Chat with Quiet Zone CT</h3>
          <p className="text-sm text-white/80">Ask us anything about our services</p>
        </div>
        
        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50" style={{ scrollBehavior: 'smooth' }}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-3 max-w-[80%] ${message.isUser ? 'ml-auto' : 'mr-auto'}`}
            >
              <div 
                className={`p-3 rounded-lg ${
                  message.isUser 
                    ? 'bg-qz-blue text-white rounded-br-none' 
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-qz-blue"
          />
          <button 
            type="submit" 
            className="bg-qz-blue hover:bg-qz-lightblue text-white p-2 rounded-r-md"
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
