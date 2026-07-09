import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, ShieldAlert } from 'lucide-react';
import { testimonials } from '../../data/travelData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F0F4FA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-3">
            Real Reviews from Real Clients
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
            Google Reviews & Feedback
          </h2>
          <p className="text-sm md:text-base text-textDark/60 mt-4 leading-relaxed font-normal">
            Read what our premium travelers say about their custom holiday packages and visa consultancy experiences.
          </p>
        </div>

        {/* Testimonials Swiper */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((test, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white rounded-3xl p-8 border border-primary-50 shadow-luxury hover:shadow-luxury-lg hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between h-full">
                  
                  {/* Google style header info */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={test.avatar}
                          alt={test.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-secondary-50"
                        />
                        <div className="flex flex-col">
                          <span className="font-heading font-extrabold text-sm text-textDark leading-none">
                            {test.name}
                          </span>
                          <span className="text-[10px] text-textDark/50 mt-1 font-medium leading-none">
                            {test.location}
                          </span>
                        </div>
                      </div>
                      
                      {/* Google G Symbol Placeholder Icon */}
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-lg text-primary select-none">
                        G
                      </div>
                    </div>

                    {/* Star Ratings & Date */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-0.5 text-accent-orange">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent-orange" />
                        ))}
                      </div>
                      <span className="text-[10px] text-textDark/40 uppercase tracking-wide font-extrabold">
                        • {test.date}
                      </span>
                    </div>

                    {/* Feedback Text */}
                    <p className="text-xs md:text-sm text-textDark/75 leading-relaxed italic font-normal mb-6">
                      "{test.text}"
                    </p>
                  </div>

                  {/* Verification Badge */}
                  <div className="flex items-center gap-1.5 text-[10px] text-[#18B84A] font-extrabold uppercase border-t border-primary-50 pt-4">
                    <div className="w-4 h-4 rounded-full bg-[#18B84A]/10 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    Verified Traveler Review
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
