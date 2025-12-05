import React from 'react';
import { Phone } from 'lucide-react';

export const FloatingCallButton: React.FC = () => {
  return (
    <a
      href="tel:+919488834020"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Call Now"
    >
      <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-25 group-hover:opacity-50"></div>
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-xl shadow-purple-500/40 hover:shadow-purple-500/60 transform transition-all duration-300 hover:scale-110 flex items-center justify-center">
        <Phone size={28} className="animate-pulse-slow" />
      </div>
    </a>
  );
};