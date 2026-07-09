import React, { useState } from 'react';
import { Compass, Mail, Phone, MapPin, Send } from 'lucide-react';
import { brandInfo, featuredPackages } from '../../data/travelData';
import { getVisaConsultLink, buildWhatsAppUrl } from '../../utils/whatsapp';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    const text = `Hello Vav-Tharad Tourism,\n\nI would like to subscribe to your newsletter. My email is: *${newsletterEmail}*.\n\nPlease keep me updated with special offers and packages.\n\nThank you!`;
    window.open(buildWhatsAppUrl(text), '_blank');
    setNewsletterEmail('');
  };

  const visaCategories = [
    'Tourist Visa',
    'Business Visa',
    'Student Visa',
    'Work Visa',
    'Visitor Visa'
  ];

  return (
    <footer className="bg-primary-950 text-white/80 pt-20 pb-8 border-t border-primary-900 overflow-hidden relative">
      
      {/* Background soft lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Top Newsletter Bar */}
        <div className="bg-primary/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-heading font-black text-xl md:text-2xl tracking-tight text-white mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/60 text-xs md:text-sm font-normal">
              Get the latest travel deals, visa updates, and customized packages straight to your inbox.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="flex w-full lg:max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-grow bg-white/10 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-secondary focus:bg-white/20 transition-all"
              required
            />
            <button
              type="submit"
              className="btn-primary-gradient px-6 py-3 shrink-0 rounded-2xl text-sm font-bold uppercase tracking-wider"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <div className="bg-secondary text-white p-2 rounded-xl">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-secondary transition-colors">
                VAV-THARAD
              </span>
            </a>
            
            <p className="text-xs md:text-sm text-white/50 leading-relaxed font-normal">
              Vav-Tharad Tourism specializes in providing premium international tour packages, fast-track visa documentation, and customizable holidays.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href={brandInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/30 hover:bg-secondary hover:text-white flex items-center justify-center text-white/70 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href={brandInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/30 hover:bg-secondary hover:text-white flex items-center justify-center text-white/70 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Tour Packages */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-6">
              Tour Packages
            </h4>
            <ul className="space-y-3">
              {featuredPackages.map((pkg) => (
                <li key={pkg.id}>
                  <a
                    href="#packages"
                    className="text-xs md:text-sm text-white/60 hover:text-secondary transition-colors"
                  >
                    {pkg.name} Tour Package
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Visa Services */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-6">
              Visa Services
            </h4>
            <ul className="space-y-3">
              {visaCategories.map((visa, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => window.open(getVisaConsultLink(visa), '_blank')}
                    className="text-xs md:text-sm text-white/60 hover:text-secondary transition-colors text-left"
                  >
                    {visa} Guidance
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-xs md:text-sm text-white/60 leading-relaxed">
                  {brandInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href={`tel:${brandInfo.phone}`}
                  className="text-xs md:text-sm text-white/60 hover:text-secondary transition-colors"
                >
                  +91 {brandInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href={`mailto:${brandInfo.email}`}
                  className="text-xs md:text-sm text-white/60 hover:text-secondary transition-colors break-all"
                >
                  {brandInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright rule */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] md:text-xs text-white/40 font-normal text-center md:text-left">
            © {new Date().getFullYear()} Vav-Tharad Tourism. All Rights Reserved. Designed to premium standards.
          </p>
          <div className="flex gap-6 text-[10px] md:text-xs text-white/40 font-normal">
            <a href="#home" className="hover:text-secondary">Privacy Policy</a>
            <a href="#home" className="hover:text-secondary">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
