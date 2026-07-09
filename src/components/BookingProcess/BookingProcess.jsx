import React from 'react';
import { ChevronRight } from 'lucide-react';
import { bookingProcess } from '../../data/travelData';

const BookingProcess = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-3">
            Streamlined Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
            Our Booking Process
          </h2>
          <p className="text-sm md:text-base text-textDark/60 mt-4 leading-relaxed font-normal">
            A simple, step-by-step workflow designed to take you from custom planning down to enjoying a hassle-free vacation.
          </p>
        </div>

        {/* Stepper Timeline Container */}
        <div className="relative">
          
          {/* Horizontal line for desktop screens */}
          <div className="hidden lg:block absolute top-16 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-primary/10 via-secondary/30 to-primary/10 -z-10" />

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
            {bookingProcess.map((step, idx) => (
              <div
                key={step.step}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Step Circle Indicator */}
                <div className="w-16 h-16 rounded-2xl bg-bgLight border-2 border-primary-50 group-hover:border-secondary flex items-center justify-center font-heading font-black text-xl text-primary group-hover:text-secondary shadow-sm hover:shadow-luxury hover:translate-y-[-2px] transition-all duration-300 mb-6 bg-white">
                  {step.step}
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-sm md:text-base text-textDark mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-textDark/65 max-w-[200px] leading-relaxed font-normal">
                  {step.description}
                </p>

                {/* Right arrow for desktop between steps */}
                {idx < bookingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-[52px] -right-[15px] translate-x-1/2 z-10 text-secondary animate-pulse">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default BookingProcess;
