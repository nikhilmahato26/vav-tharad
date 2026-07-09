import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MapPin } from 'lucide-react';
import { destinationsCarousel } from '../../data/travelData';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

// Import Swiper styles
import 'swiper/css';

const Destinations = () => {
  
  const handleDestinationClick = (name) => {
    const text = `Hello Vav-Tharad Tourism,\n\nI am planning a trip to *${name}*.\n\nPlease share the popular packages, estimated pricing, and visa guidelines for *${name}*.\n\nThank you!`;
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-3">
            Explore Beyond Boundaries
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
            Popular Destinations
          </h2>
          <p className="text-sm md:text-base text-textDark/60 mt-4 leading-relaxed font-normal">
            Click any destination below to get immediate travel itineraries and visa assistance via WhatsApp.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative px-2">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 24 },
              768: { slidesPerView: 4, spaceBetween: 24 },
              1024: { slidesPerView: 5, spaceBetween: 28 },
              1280: { slidesPerView: 6, spaceBetween: 30 },
            }}
            className="py-4"
          >
            {destinationsCarousel.map((dest, idx) => (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => handleDestinationClick(dest.name)}
                  className="group cursor-pointer flex flex-col items-center text-center select-none"
                >
                  {/* Circle Image Wrapper */}
                  <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-luxury border-4 border-white group-hover:border-secondary transition-all duration-500 hover:scale-105">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Tint Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white animate-bounce" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading font-bold text-sm md:text-base text-textDark mt-4 group-hover:text-secondary transition-colors duration-300">
                    {dest.name}
                  </h3>
                  
                  <span className="text-[10px] text-textDark/45 uppercase tracking-wider font-extrabold mt-1">
                    Get Quote
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Destinations;
