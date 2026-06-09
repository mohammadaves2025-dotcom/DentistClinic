import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import MediaHub from '../components/MediaHub';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#0D9488]/30">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <MediaHub />
      <ContactForm />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
