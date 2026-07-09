import React from 'react';
import { Compass, Users, Clock, Tag, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const WhyChooseUs = () => {
  
  const handlePlanTrip = () => {
    const text = "Hello Vav-Tharad Tourism,\n\nI am planning a trip and would like to get a personalized travel plan. Please help me with packages, visa requirements, and bookings.\n\nThank you!";
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  const advantages = [
    {
      title: "Wide Range of Choices",
      description: "Choose from thousands of flights, luxury hotels, and custom tour itineraries worldwide.",
      icon: Compass,
      bgColor: "bg-primary-50",
      iconColor: "text-primary"
    },
    {
      title: "Trusted by Travelers",
      description: "Join thousands of satisfied international holidaymakers and student visa clients across Gujarat.",
      icon: Users,
      bgColor: "bg-[#18B84A]/10",
      iconColor: "text-[#18B84A]"
    },
    {
      title: "Flexible & Easy Booking",
      description: "Book flights, reserve resorts, and file visa applications with easy documentation.",
      icon: Clock,
      bgColor: "bg-accent-orange/10",
      iconColor: "text-accent-orange"
    },
    {
      title: "Exclusive Deals",
      description: "Get access to exclusive discounts, customized package offers, and competitive tariffs.",
      icon: Tag,
      bgColor: "bg-accent-purple/10",
      iconColor: "text-accent-purple"
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-bgLight">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Title */}
        <div className="mb-12 text-left">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-2">
            Why Travel With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
            Why Choose Vav-Tharad?
          </h2>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Advantages Grid (8 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div key={index} className="flex gap-4 p-5 rounded-2xl bg-white border border-primary-50 hover:shadow-luxury hover:translate-y-[-2px] transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${adv.bgColor}`}>
                    <Icon className={`w-5 h-5 ${adv.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-textDark mb-1 tracking-tight">
                      {adv.title}
                    </h3>
                    <p className="text-xs md:text-sm text-textDark/60 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Adventure Card (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg h-[400px] group border border-primary-100">
              
              {/* Background Traveler Image */}
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" // Beach traveler
                alt="Your Next Adventure"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] tracking-[0.25em] font-extrabold text-secondary uppercase mb-2">
                  Let's Go!
                </span>
                <h3 className="font-heading font-extrabold text-2xl md:text-3xl tracking-tight leading-tight mb-4 text-white">
                  Your Next Adventure Awaits!
                </h3>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                  Discover breathtaking places, obtain secure visas, and create unforgettable memories with our team.
                </p>
                <button
                  onClick={handlePlanTrip}
                  className="btn-primary-gradient w-fit text-xs px-6 py-3 tracking-wider uppercase font-bold text-white shadow-glow"
                >
                  Plan Your Trip
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
