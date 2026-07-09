import React from 'react';
import { Thermometer, Moon, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { featuredPackages } from '../../data/travelData';
import { getPackageInquiryLink, buildWhatsAppUrl } from '../../utils/whatsapp';

const FeaturedPackages = () => {
  
  const handleBookNow = (pkgName, price) => {
    const link = getPackageInquiryLink(pkgName, price);
    window.open(link, '_blank');
  };

  const handleViewItinerary = (pkgName) => {
    const text = `Hello Vav-Tharad Tourism,\n\nI want to see the detailed itinerary for the *${pkgName}* package.\n\nPlease share the travel plan, flight details, and hotel inclusions.\n\nThank you!`;
    const link = buildWhatsAppUrl(text);
    window.open(link, '_blank');
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#F0F4FA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-3">
              Specialized International Tours
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
              Featured Packages
            </h2>
            <p className="text-sm md:text-base text-textDark/60 mt-4 leading-relaxed font-normal">
              Immerse yourself in premium travel experiences carefully crafted with top-tier stays, flight deals, and smooth visa handlings.
            </p>
          </div>
          
          <button
            onClick={() => handleBookNow("Custom Travel Plan", "Flexible")}
            className="mt-6 md:mt-0 btn-outline-premium hover:bg-primary hover:text-white"
          >
            Customize A Holiday
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg hover:translate-y-[-8px] transition-all duration-500 flex flex-col h-full border border-primary-50"
            >
              
              {/* Photo Area */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Large package bold number overlay */}
                <div className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-md border border-white/25 rounded-2xl w-14 h-14 flex items-center justify-center font-heading font-black text-2xl text-white shadow-sm">
                  {pkg.id}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                
                {/* Destination name inside photo */}
                <div className="absolute bottom-4 left-6 z-20">
                  <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-white/80 text-xs font-normal mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-secondary" /> {pkg.cities.join(' • ')}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-sm italic font-medium text-textDark/75 font-accent mb-4">
                    {pkg.subtitle}
                  </p>
                  
                  {/* Weather and duration row */}
                  <div className="grid grid-cols-2 gap-4 bg-bgLight rounded-2xl p-4 mb-6 border border-primary-100">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-accent-orange shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] text-textDark/45 uppercase font-bold tracking-wider leading-none">Temp</span>
                        <span className="text-xs font-bold text-textDark mt-0.5">{pkg.temp}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Moon className="w-4 h-4 text-secondary shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] text-textDark/45 uppercase font-bold tracking-wider leading-none">Duration</span>
                        <span className="text-xs font-bold text-textDark mt-0.5">{pkg.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div>
                  <div className="flex items-center justify-between border-t border-primary-50 pt-4 mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-textDark/40 uppercase font-extrabold tracking-wider leading-none">Pricing starts at</span>
                      <span className="text-2xl font-black text-primary mt-1 font-heading">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/20 text-secondary font-extrabold rounded-full px-3 py-1 text-xs">
                      Per Person
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleViewItinerary(pkg.name)}
                      className="btn-outline-premium px-4 py-3 text-xs uppercase font-extrabold rounded-xl"
                    >
                      Itinerary
                    </button>
                    <button
                      onClick={() => handleBookNow(pkg.name, pkg.price)}
                      className="btn-primary-gradient px-4 py-3 text-xs uppercase font-extrabold rounded-xl shadow-md"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedPackages;
