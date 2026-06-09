import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello, I want to book an appointment!

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}
Message: ${formData.message}`;
    window.open(`https://wa.me/918445247520?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0D9488]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-6">
            Book Your <span className="text-[#0D9488]">Appointment</span>
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            Ready to transform your smile? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Clinic Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.235937805183!2d77.2837!3d28.5635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8bcb6b8f5%3A0x1234567890abcdef!2sBatla%20House%2C%20Jamia%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1609545600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LBS Dentofacial Centre Map"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-[#0D9488]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1628] mb-1">Location</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Near Batla House, Jamia Nagar<br />
                    New Delhi, Delhi 110025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-[#C9A84C]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1628] mb-1">Phone</h4>
                  <a href="tel:+918445247520" className="text-slate-600 text-sm hover:text-[#0D9488] transition-colors">
                    +91 84452 47520
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-[#0D9488]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1628] mb-1">Working Hours</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Mon - Thu: 11:00 AM - 2:00 PM & 4:00 PM - 8:00 PM<br />
                    Fri: Closed<br />
                    Sat - Sun: 11:00 AM - 2:00 PM & 4:00 PM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={64} className="text-[#0D9488] mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-[#0A1628] mb-2">Message Sent!</h4>
                  <p className="text-slate-600">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">Service</label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="General Dentistry">General Dentistry</option>
                        <option value="Root Canal">Root Canal Treatment</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="PRP Treatment">PRP & Bio-stimulation</option>
                        <option value="Anti-aging">Anti-aging Treatment</option>
                        <option value="Acne Scar">Acne Scar Reduction</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-small font-semibold text-[#0A1628] mb-2">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A1628] mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your concerns..."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0D9488] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#0f766e] transition-all duration-300 shadow-lg shadow-[#0D9488]/20 hover:shadow-[#0D9488]/40 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Book Appointment on WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
