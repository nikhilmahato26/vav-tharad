import React, { useState } from 'react';
import { Camera, ZoomIn } from 'lucide-react';
import { galleryItems } from '../../data/travelData';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Malaysia',
    'Thailand',
    'Dubai',
    'Bali',
    'Vietnam',
    'Singapore',
    'Resorts',
    'Cruises',
    'Flights',
    'Beaches'
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

  const handleInquireGalleryItem = (category) => {
    const text = `Hello Vav-Tharad Tourism,\n\nI was looking at the photo gallery on your website and would like to get holiday details/quotes regarding: *${category}*.\n\nThank you!`;
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-3">
            Visual Inspiration
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
            Our Luxury Gallery
          </h2>
          <p className="text-sm md:text-base text-textDark/60 mt-4 leading-relaxed font-normal">
            Browse through immersive snapshots of beautiful resorts, airline fleets, cruises, and popular tourist hubs.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-luxury'
                  : 'bg-[#F0F4FA] text-textDark/70 hover:bg-secondary hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-masonry">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInquireGalleryItem(item.category)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl h-64 shadow-luxury transition-all duration-500 hover:shadow-luxury-lg border border-primary-50"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Glassmorphic Overlay on Hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <div className="glass-card p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-secondary uppercase font-extrabold tracking-wider">Destination</span>
                    <span className="font-heading font-black text-sm text-primary tracking-tight">{item.category}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Tag indicator */}
              <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] uppercase font-bold text-primary border border-white/20 tracking-wider">
                {item.category}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
