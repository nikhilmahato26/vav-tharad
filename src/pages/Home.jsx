import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TrustBadges from '../components/Hero/TrustBadges';
import FeaturedPackages from '../components/FeaturedPackages/FeaturedPackages';
import DomesticPackages from '../components/DomesticPackages/DomesticPackages';
import Services from '../components/Services/Services';
import VisaConsultancy from '../components/VisaConsultancy/VisaConsultancy';
import WhyChooseUs from '../components/About/WhyChooseUs';
import Destinations from '../components/Destinations/Destinations';
import BookingProcess from '../components/BookingProcess/BookingProcess';
import Statistics from '../components/Statistics/Statistics';
import Testimonials from '../components/Testimonials/Testimonials';
import Gallery from '../components/Gallery/Gallery';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import FloatingButtons from '../components/common/FloatingButtons';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <FeaturedPackages />
      <DomesticPackages />
      <Services />
      <VisaConsultancy />
      <WhyChooseUs />
      <Destinations />
      <BookingProcess />
      <Statistics />
      <Testimonials />
      {/* <Gallery /> */}
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Home;
