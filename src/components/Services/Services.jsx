import React from 'react';
import * as Icons from 'lucide-react';
import { servicesList } from '../../data/travelData';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const Services = () => {
  const handleServiceInquiry = (serviceTitle) => {
    const text = `Hello Vav-Tharad Tourism,\n\nI am looking for details regarding your *${serviceTitle}* service.\n\nPlease share the options, packages, and custom assistance you offer.\n\nThank you!`;
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F0F4FA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
            Our Business Services
          </h2>
          <p className="text-sm md:text-base text-textDark/60 mt-4 leading-relaxed font-normal">
            Your single destination for premium international travel bookings, visa handlings, and custom holiday planning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const IconComponent = Icons[service.icon] || Icons.Compass;
            
            return (
              <div
                key={idx}
                onClick={() => handleServiceInquiry(service.title)}
                className="group cursor-pointer bg-white rounded-3xl p-8 border border-primary-50 hover:border-secondary/20 shadow-luxury hover:shadow-luxury-lg hover:translate-y-[-6px] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon with dynamic gradient bg */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} text-white flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-heading font-extrabold text-lg md:text-xl text-textDark mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-textDark/60 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary group-hover:text-primary transition-colors">
                  Inquire Now →
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
