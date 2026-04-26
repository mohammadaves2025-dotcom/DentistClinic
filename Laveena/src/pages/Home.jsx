import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import MediaHub from '../components/MediaHub';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ClinicLocation from '../components/ClinicLocation';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-200">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <MediaHub />
      <ClinicLocation />
      <FAQ />
      <Footer />

      {/* Floating Elements */}
      <WhatsAppWidget/> {/* <-- Place it here */}
    </div>
  );
}