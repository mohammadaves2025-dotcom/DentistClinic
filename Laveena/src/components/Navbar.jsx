import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="flex items-center gap-2 z-50">
          <span className="text-3xl font-display font-bold tracking-tight text-[#0A1628]">
            Dr<span className="text-[#0D9488]">.</span> Laveena
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-1 text-sm font-medium text-slate-600 uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="px-4 py-2 rounded-full hover:text-[#0D9488] hover:bg-[#0D9488]/5 transition-all duration-300 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+918445247520"
            className="flex items-center gap-2 text-slate-700 hover:text-[#0D9488] transition-colors text-sm font-medium"
          >
            <Phone size={16} />
            +91 84452 47520
          </a>
          <a
            href="https://wa.me/918445247520"
            target="_blank"
            rel="noreferrer"
            className="bg-[#0D9488] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#0f766e] transition-all duration-300 shadow-lg shadow-[#0D9488]/20 hover:shadow-[#0D9488]/40 hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl py-8 px-6 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-lg font-semibold text-slate-800 hover:text-[#0D9488] transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+918445247520"
                className="flex items-center justify-center gap-2 text-slate-700 py-2"
              >
                <Phone size={18} />
                +91 84452 47520
              </a>
              <a
                href="https://wa.me/918445247520"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0D9488] text-white text-center py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone size={18} /> Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
