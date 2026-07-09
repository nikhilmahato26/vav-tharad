import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { brandInfo } from '../../data/travelData';
import { getContactFormLink, buildWhatsAppUrl } from '../../utils/whatsapp';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      alert("Please fill in all required fields (Name, Phone, Message)!");
      return;
    }
    const info = { name, phone, email, subject, message };
    const waUrl = getContactFormLink(info);
    window.open(waUrl, '_blank');
  };

  const handleQuickCall = () => {
    window.open(`tel:${brandInfo.phone}`);
  };

  const handleQuickWhatsApp = () => {
    const text = "Hello Vav-Tharad Tourism,\n\nI want to inquire about custom holiday packages and visa consultancy.\n\nPlease get in touch with me.";
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-secondary font-heading block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight font-heading">
            Contact Our Experts
          </h2>
          <p className="text-sm md:text-base text-textDark/60 mt-4 leading-relaxed font-normal">
            Reach out via phone, email, or fill out the form to instantly initiate your visa consultation or holiday booking.
          </p>
        </div>

        {/* Form and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Info & Map (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Info Cards */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex gap-4 p-5 rounded-2xl bg-[#F7FAFD] border border-primary-50">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-textDark/45 uppercase tracking-wider">Office Address</h4>
                  <p className="text-sm md:text-base font-bold text-primary mt-1 leading-snug">
                    {brandInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                onClick={handleQuickCall}
                className="flex gap-4 p-5 rounded-2xl bg-[#F7FAFD] border border-primary-50 cursor-pointer hover:border-secondary/30 hover:bg-white transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/5 border border-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-textDark/45 uppercase tracking-wider">Call Hotline</h4>
                  <p className="text-sm md:text-base font-bold text-primary group-hover:text-secondary mt-1 transition-colors">
                    +91 {brandInfo.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${brandInfo.email}`}
                className="flex gap-4 p-5 rounded-2xl bg-[#F7FAFD] border border-primary-50 cursor-pointer hover:border-accent-pink/30 hover:bg-white transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-pink/5 border border-accent-pink/10 flex items-center justify-center text-accent-pink shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-textDark/45 uppercase tracking-wider">Email Address</h4>
                  <p className="text-sm md:text-base font-bold text-primary group-hover:text-accent-pink mt-1 transition-colors">
                    {brandInfo.email}
                  </p>
                </div>
              </a>

            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-primary-100 shadow-luxury h-64 lg:h-auto flex-grow min-h-[250px]">
              <iframe
                title="Vav-Tharad Tourism Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3664797072535!2d72.57140887600742!3d23.083675079127807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e838e12ec68eb%3A0xe54d24174c838ee5!2sArved%20Transcube%20Plaza!5e0!3m2!1sen!2sin!4v1719999000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Side: Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7FAFD] rounded-3xl p-8 border border-primary-50 shadow-luxury flex flex-col justify-between h-full">
              <div>
                <h3 className="font-heading font-black text-xl md:text-2xl text-primary tracking-tight mb-2">
                  Send Inquiry Message
                </h3>
                <p className="text-xs md:text-sm text-textDark/60 leading-relaxed font-normal mb-6">
                  Fill in your travel preferences. On clicking send, your inquiry details will compile and open in WhatsApp for immediate response.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-extrabold tracking-wider text-textDark/50">Your Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary transition-all"
                        required
                      />
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-extrabold tracking-wider text-textDark/50">Mobile Number *</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="9879911958"
                        className="w-full bg-white border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-extrabold tracking-wider text-textDark/50">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                        className="w-full bg-white border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary transition-all"
                      />
                    </div>
                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-extrabold tracking-wider text-textDark/50">Trip Destination / Subject</label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Bali Honeymoon"
                        className="w-full bg-white border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-extrabold tracking-wider text-textDark/50">Travel Requirements *</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share dates, number of travelers, and accommodation choices..."
                      rows="4"
                      className="w-full bg-white border border-primary-100 rounded-xl px-4 py-3 text-sm font-semibold text-textDark outline-none focus:border-secondary transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-whatsapp-gradient w-full py-4 text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-glow mt-4"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0 fill-white" />
                    Send Message via WhatsApp
                  </button>
                </form>
              </div>

              {/* Instant direct buttons */}
              <div className="mt-8 pt-6 border-t border-primary-100 flex flex-wrap gap-3">
                <button
                  onClick={handleQuickCall}
                  className="btn-outline-premium flex-grow text-xs uppercase font-extrabold px-6 py-3"
                >
                  Call Now
                </button>
                <button
                  onClick={handleQuickWhatsApp}
                  className="btn-primary-gradient flex-grow text-xs uppercase font-extrabold px-6 py-3 shadow-glow"
                >
                  Quick WhatsApp Help
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
