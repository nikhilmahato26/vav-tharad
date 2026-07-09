import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Compass, Globe, Shield } from 'lucide-react';
import { brandInfo } from '../../data/travelData';
import { getVisaConsultLink } from '../../utils/whatsapp';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Packages', href: '#packages' },
    { name: 'Visa Services', href: '#visa-services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleConsultation = () => {
    window.open(getVisaConsultLink("General Inquiry"), '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-md border border-primary-50 transition-colors duration-300">
            <img src={logo} alt="Vav-Tharad Tourism Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl lg:text-2xl text-primary tracking-tight leading-none group-hover:text-secondary transition-colors duration-300">
              VAV-THARAD
            </span>
            <span className="text-[10px] tracking-[0.25em] font-medium text-textDark/60 uppercase leading-none mt-1">
              TOURISM & VISA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-textDark/85 hover:text-secondary font-medium text-sm transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Area: Contact Info & Action Button */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href={`tel:${brandInfo.phone}`}
            className="flex items-center gap-2.5 text-textDark/90 hover:text-secondary transition-colors duration-300 group"
          >
            <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center bg-primary/5 group-hover:bg-secondary/10 transition-colors duration-300">
              <Phone className="w-4 h-4 text-primary group-hover:text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-textDark/50 uppercase tracking-wider font-semibold">Need Help?</span>
              <span className="text-sm font-bold text-primary group-hover:text-secondary">{brandInfo.phone}</span>
            </div>
          </a>
          
          <button
            onClick={handleConsultation}
            className="btn-primary-gradient px-6 py-2.5 text-xs tracking-wider uppercase font-bold"
          >
            <Shield className="w-3.5 h-3.5" />
            Visa Consult
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 lg:hidden flex flex-col justify-between py-8 px-6 z-40 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-textDark hover:text-secondary border-b border-primary/5 pb-3 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <a
            href={`tel:${brandInfo.phone}`}
            className="flex items-center justify-center gap-3 w-full bg-primary/5 hover:bg-secondary/10 border border-primary/10 rounded-2xl py-4 transition-colors duration-300"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary text-base">Call: {brandInfo.phone}</span>
          </a>
          <button
            onClick={() => {
              setIsOpen(false);
              handleConsultation();
            }}
            className="btn-accent-gradient py-4 rounded-2xl w-full text-center font-bold text-base tracking-wider uppercase shadow-md"
          >
            Free Visa Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
