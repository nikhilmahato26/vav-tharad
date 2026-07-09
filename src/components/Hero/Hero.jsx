import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Search, MapPin, Calendar, Users, Plane, Hotel, Compass, ShieldAlert } from 'lucide-react';
import { getSearchInquiryLink } from '../../utils/whatsapp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1920", // Santorini Blue Dome
    title: "Discover Amazing Places with Us",
    subtitle: "Luxury Holidays • International Tours • Visa Consultancy"
  },
  {
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920", // Maldives
    title: "Experience the Ultimate Luxury Resorts",
    subtitle: "Overwater Villas • Private Island Escapes • Airport Lounges"
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920", // Dubai
    title: "Explore Exotic Global Landmarks",
    subtitle: "Premium Flights • Visa Guidance • Group Departures"
  }
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState('tours'); // flights, hotels, tours, packages
  const [from, setFrom] = useState('Ahmedabad (AMD)');
  const [to, setTo] = useState('');
  const [depart, setDepart] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('2 Adults, 1 Child');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!to) {
      alert("Please enter a destination!");
      return;
    }
    const inquiry = {
      type: activeTab.toUpperCase(),
      from,
      to,
      depart: depart ? `${depart} ${returnDate ? `to ${returnDate}` : ''}` : 'Flexible',
      travelers
    };
    const waUrl = getSearchInquiryLink(inquiry);
    window.open(waUrl, '_blank');
  };

  const tabs = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'tours', label: 'Tours', icon: Compass },
    { id: 'packages', label: 'Packages', icon: ShieldAlert },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-20 lg:pt-0">
      
      {/* Background Cinematic Swiper Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect={'fade'}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          className="h-full w-full"
        >
          {HERO_SLIDES.map((slide, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-[#020710]/20 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover scale-105 animate-pulse-soft transition-transform duration-[6000ms]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Typography Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full flex-grow flex flex-col justify-center py-20 lg:py-32">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-bounce">
            <Plane className="w-4 h-4 rotate-45 text-secondary" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] font-heading">
              explore. dream. discover.
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight font-heading mb-6 drop-shadow-md">
            Discover Amazing <br />
            <span className="font-accent italic text-secondary font-medium tracking-normal">Places</span> with Us
          </h1>

          <p className="text-sm md:text-lg text-white/90 font-medium mb-8 max-w-xl drop-shadow-sm leading-relaxed">
            Find the best tours, hotels and flights: everything you need for the perfect premium holiday and visa consulting assistance.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#packages" className="btn-primary-gradient shadow-glow">
              Explore Now
            </a>
            <a href="#contact" className="btn-outline-premium bg-white/10 hover:bg-white text-white hover:text-primary">
              Plan Your Trip →
            </a>
          </div>
        </div>
      </div>

      {/* Overlapping Quick Search Form */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 lg:-mb-16">
        <div className="bg-white rounded-3xl shadow-luxury-lg border border-primary-50 p-6 md:p-8">
          
          {/* Tab Headers */}
          <div className="flex flex-wrap gap-2 border-b border-primary-50 pb-4 mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-secondary-50 text-secondary border border-secondary/20 shadow-sm'
                      : 'text-textDark/60 hover:text-primary hover:bg-primary-50/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-secondary' : 'text-textDark/45'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            
            {/* From Field */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-extrabold tracking-wider text-textDark/40 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-secondary" /> From
              </label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Origin City"
                className="w-full bg-bgLight border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary focus:bg-white transition-all"
              />
            </div>

            {/* To Field */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-extrabold tracking-wider text-textDark/40 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-orange" /> To
              </label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Where to? (e.g. Dubai, Bali)"
                className="w-full bg-bgLight border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary focus:bg-white transition-all"
                required
              />
            </div>

            {/* Depart Date */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-extrabold tracking-wider text-textDark/40 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-secondary" /> Depart
              </label>
              <input
                type="date"
                value={depart}
                onChange={(e) => setDepart(e.target.value)}
                className="w-full bg-bgLight border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary focus:bg-white transition-all"
              />
            </div>

            {/* Return Date / Visa Type */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-extrabold tracking-wider text-textDark/40 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-secondary" /> Return
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-bgLight border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary focus:bg-white transition-all"
              />
            </div>

            {/* Travelers */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-extrabold tracking-wider text-textDark/40 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-secondary" /> Travelers
              </label>
              <input
                type="text"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                placeholder="Travelers Count"
                className="w-full bg-bgLight border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary focus:bg-white transition-all"
              />
            </div>

            {/* Search/Submit Button */}
            <div className="lg:col-span-5 flex justify-end mt-4">
              <button
                type="submit"
                className="btn-primary-gradient px-8 py-3.5 w-full sm:w-auto shadow-md"
              >
                <Search className="w-4 h-4" />
                Search & Get Quote via WhatsApp
              </button>
            </div>

          </form>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
