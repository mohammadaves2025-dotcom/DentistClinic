import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-slate-800 flex items-center gap-2 z-50">
          <span className="text-teal-600">LBS</span>
          <span className="font-medium text-slate-500 text-xl">|</span>
          <span className="text-lg font-semibold">Dentofacial</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a href="#services" className="hover:text-teal-600 transition-colors">Treatments</a>
          <a href="#about" className="hover:text-teal-600 transition-colors">Meet Dr. Laveena</a>
          <a href="#clinic" className="hover:text-teal-600 transition-colors">The Clinic</a>
          
          <a href="tel:+918445247520" className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-teal-700 transition-all flex items-center gap-2 shadow-lg shadow-teal-600/20">
            <Phone size={16} /> 
            <span>Call Clinic</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-50"
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
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#services" onClick={toggleMenu} className="text-lg font-bold text-slate-800 hover:text-teal-600">Treatments</a>
            <a href="#about" onClick={toggleMenu} className="text-lg font-bold text-slate-800 hover:text-teal-600">Meet Dr. Laveena</a>
            <a href="#clinic" onClick={toggleMenu} className="text-lg font-bold text-slate-800 hover:text-teal-600">The Clinic</a>
            
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a href="tel:+918445247520" className="bg-slate-900 text-white text-center py-3.5 rounded-xl font-bold flex items-center justify-center gap-2">
                <Phone size={18} /> Call +91 84452 47520
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}