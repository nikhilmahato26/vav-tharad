import React, { useState, useEffect, useRef } from 'react';
import { statsList } from '../../data/travelData';

const Counter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * value);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const Statistics = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-800 to-[#020710] text-white overflow-hidden">
      
      {/* Background World Map Vector Tint */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1920')] opacity-5 bg-cover bg-center mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 shadow-md"
            >
              {/* Stat Value */}
              <div className="font-heading font-black text-3xl md:text-5xl text-secondary mb-2 flex items-center justify-center">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              
              {/* Stat Label */}
              <h3 className="font-heading font-bold text-sm md:text-base tracking-wide mb-1 text-white">
                {stat.label}
              </h3>
              
              {/* Sub-label */}
              <p className="text-[10px] md:text-xs text-white/60 leading-none">
                {stat.sub}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Statistics;
