import React from 'react';
import * as Icons from 'lucide-react';
import { trustBadges } from '../../data/travelData';

const TrustBadges = () => {
  return (
    <section className="py-12 md:py-20 bg-bgLight">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustBadges.map((badge, idx) => {
            // Dynamically resolve icon or fall back to Compass
            const IconComponent = Icons[badge.icon] || Icons.Compass;
            
            // Set distinct background colors/border colors to make them look premium
            const borderColors = [
              'border-accent-orange/15 hover:border-accent-orange/40 bg-accent-orange/5',
              'border-secondary/15 hover:border-secondary/40 bg-secondary/5',
              'border-accent-pink/15 hover:border-accent-pink/40 bg-accent-pink/5',
              'border-accent-green/15 hover:border-accent-green/40 bg-accent-green/5',
              'border-accent-purple/15 hover:border-accent-purple/40 bg-accent-purple/5',
              'border-primary/15 hover:border-primary/40 bg-primary/5',
            ];
            
            const iconColors = [
              'text-accent-orange',
              'text-secondary',
              'text-accent-pink',
              'text-accent-green',
              'text-accent-purple',
              'text-primary',
            ];

            return (
              <div
                key={badge.id}
                className={`flex gap-5 p-6 rounded-2xl border transition-all duration-300 hover:shadow-luxury hover:translate-y-[-4px] bg-white ${borderColors[idx % borderColors.length]}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${borderColors[idx % borderColors.length]} bg-opacity-10`}>
                  <IconComponent className={`w-6 h-6 ${iconColors[idx % iconColors.length]}`} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading font-bold text-base text-textDark mb-1 tracking-tight">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-textDark/60 leading-relaxed font-normal">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
