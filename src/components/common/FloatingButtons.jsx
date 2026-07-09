import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { brandInfo } from '../../data/travelData';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const FloatingButtons = () => {
  const handleCall = () => {
    window.open(`tel:${brandInfo.phone}`);
  };

  const handleWhatsApp = () => {
    const text = "Hello Vav-Tharad Tourism, I want to book a holiday package / consult for a visa. Please assist me.";
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      
      {/* WhatsApp Button (Green) */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-[#18B84A] text-white flex items-center justify-center shadow-lg hover:shadow-glow hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute right-16 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold py-1.5 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
          Chat on WhatsApp
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
        {/* Radar Ring Animation */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#18B84A] opacity-75 animate-ping -z-10" />
      </button>

      {/* Call Button (Primary Royal Blue) */}
      <button
        onClick={handleCall}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Call Hotline"
      >
        <span className="absolute right-16 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold py-1.5 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
          Call Support
        </span>
        <Phone className="w-6 h-6 fill-white" />
      </button>

    </div>
  );
};

export default FloatingButtons;
