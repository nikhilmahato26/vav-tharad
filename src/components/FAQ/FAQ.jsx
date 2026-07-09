import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/travelData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F0F4FA]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-3">
            Clearing Doubts
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-textDark/60 mt-4 leading-relaxed font-normal">
            Find answers to commonly asked questions about booking procedures, custom tour assemblies, and visa consultancies.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-primary-50 overflow-hidden shadow-luxury transition-all duration-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-50/20 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5.5 h-5.5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-heading font-bold text-sm md:text-base text-textDark tracking-tight">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-bgLight flex items-center justify-center text-primary transition-transform duration-300 ${isOpen ? 'rotate-180 bg-secondary-50 text-secondary' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-primary-50' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-xs md:text-sm text-textDark/70 leading-relaxed font-normal bg-bgLight/30">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
