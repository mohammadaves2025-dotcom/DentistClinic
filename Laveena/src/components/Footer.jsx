import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="clinic" className="bg-[#0A1628] relative overflow-hidden">
      {/* Top decorative line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0D9488] via-[#C9A84C] to-[#0D9488]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Dr<span className="text-[#0D9488]">.</span> Laveena
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing advanced dentistry and state-of-the-art cosmetology services in the heart of Jamia Nagar. Your smile and skin, perfected.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-[#0D9488] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#0D9488] mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Near Batla House, Jamia Nagar, New Delhi 110025</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#0D9488] shrink-0" />
                <a href="tel:+918445247520" className="text-slate-400 hover:text-[#0D9488] transition-colors text-sm">+91 84452 47520</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#0D9488] shrink-0" />
                <span className="text-slate-400 text-sm">info@drlaveena.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-4">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-slate-400">Mon - Thu</span>
                <span className="text-white font-medium text-right">11 AM - 2 PM<br />4 PM - 8 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-slate-400">Friday</span>
                <span className="text-rose-400 font-bold">Closed</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-slate-400">Sat - Sun</span>
                <span className="text-white font-medium text-right">11 AM - 2 PM<br />4 PM - 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#0D9488]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#0D9488] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.502A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.502 9.376.502 9.376.502s7.505 0 9.377-.502a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Dr. Laveena's Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
