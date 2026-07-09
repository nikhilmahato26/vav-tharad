import React from 'react';
import * as Icons from 'lucide-react';
import { visaServices } from '../../data/travelData';
import { getVisaConsultLink } from '../../utils/whatsapp';

const VisaConsultancy = () => {
  const handleVisaInquiry = (visaTitle) => {
    const link = getVisaConsultLink(visaTitle);
    window.open(link, '_blank');
  };

  return (
    <section id="visa-services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-3">
            Hassle-Free Clearances
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
            Visa Consultancy
          </h2>
          <p className="text-sm md:text-base text-textDark/60 mt-4 leading-relaxed font-normal">
            Specialized team providing document processing support, appointment slots, and interview preparation for all major countries worldwide.
          </p>
        </div>

        {/* Visa Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {visaServices.map((visa, idx) => {
            const IconComponent = Icons[visa.icon] || Icons.Compass;
            
            // Custom hover borders and overlay styles
            const styles = [
              'hover:border-accent-orange/30 group-hover:text-accent-orange bg-accent-orange/5',
              'hover:border-secondary/30 group-hover:text-secondary bg-secondary/5',
              'hover:border-accent-pink/30 group-hover:text-accent-pink bg-accent-pink/5',
              'hover:border-accent-purple/30 group-hover:text-accent-purple bg-accent-purple/5',
            ];

            return (
              <div
                key={visa.id}
                onClick={() => handleVisaInquiry(visa.title)}
                className={`group cursor-pointer p-6 rounded-3xl border border-primary-50 bg-[#F7FAFD]/50 transition-all duration-300 hover:shadow-luxury hover:translate-y-[-4px] hover:bg-white flex flex-col justify-between ${styles[idx % styles.length]}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0 ${styles[idx % styles.length]}`}>
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-textDark mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {visa.title}
                  </h3>
                  <p className="text-xs md:text-sm text-textDark/60 leading-relaxed font-normal">
                    {visa.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center gap-1 text-[11px] uppercase font-extrabold tracking-wider text-primary group-hover:text-secondary transition-colors">
                  Inquire Now →
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-10 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="font-heading font-extrabold text-xl md:text-2xl tracking-tight">
              Looking for a custom visa assistance consultation?
            </h3>
            <p className="text-white/80 text-xs md:text-sm mt-2 leading-relaxed">
              We arrange rapid document auditing, visa appointments, and flight reservations.
            </p>
          </div>
          <button
            onClick={() => handleVisaInquiry("General Consultation")}
            className="btn-accent-gradient shadow-md shrink-0 px-8 py-3.5"
          >
            Get Free Visa Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default VisaConsultancy;
