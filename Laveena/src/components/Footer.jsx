import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="clinic" className="bg-slate-900 text-slate-300 py-16 border-t-4 border-teal-600">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Brand Info */}
        <div className="space-y-6">
          <div className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <span className="text-teal-400">LBS</span>
            <span className="font-medium text-slate-600 text-xl">|</span>
            <span>Dentofacial</span>
          </div>
          <p className="text-slate-400 leading-relaxed text-sm pr-4">
            Providing advanced dentistry and state-of-the-art cosmetology services in the heart of Jamia Nagar. Your smile and skin, perfected.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Contact Clinic</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-teal-400 shrink-0 mt-1" />
              <span className="text-sm leading-relaxed">H, 92 Muradi Road, Near PNB ATM<br/>Jamia, Batla House, Okhla<br/>New Delhi - 110025</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-teal-400 shrink-0" />
              <a href="tel:+918445247520" className="text-sm hover:text-white transition-colors">+91 84452 47520</a>
            </li>
          </ul>
        </div>

        {/* Verified Timings */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Clinic Hours</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Clock size={20} className="text-teal-400 shrink-0 mt-1" />
              <div className="text-sm w-full space-y-3">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Mon - Thu</span>
                  <span className="text-white font-medium text-right">11 AM - 2 PM<br/>4 PM - 8 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Friday</span>
                  <span className="text-rose-400 font-bold">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat - Sun</span>
                  <span className="text-white font-medium text-right">11 AM - 2 PM<br/>4 PM - 8 PM</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} LBS Dentofacial Centre. All rights reserved.</p>
      </div>
    </footer>
  );
}