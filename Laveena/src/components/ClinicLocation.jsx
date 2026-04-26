import React from 'react';
import { MapPin, Navigation, Car, Train } from 'lucide-react';

export default function ClinicLocation() {
  return (
    <section id="directions" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
            <MapPin size={32} />
          </div>
          <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-3">Visit Us</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Find Our Clinic</h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/40 border border-slate-100">
          
          {/* Map Image/Embed - Spans 3 columns */}
          <div className="lg:col-span-3 h-[400px] lg:h-auto rounded-[2rem] overflow-hidden relative bg-slate-100 flex items-center justify-center border border-slate-200">
            {/* Using a high-quality static map representation since iframes without API keys can sometimes break */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-slate-900/10"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <MapPin size={48} className="text-teal-600 drop-shadow-xl" fill="white" />
              <div className="bg-white px-4 py-2 rounded-xl shadow-lg mt-4 font-bold text-slate-800 text-sm">
                Dr Laveena's Dental Clinic
              </div>
            </div>
          </div>

          {/* Transit & Address Details - Spans 2 columns */}
          <div className="lg:col-span-2 p-6 lg:p-10 flex flex-col justify-center">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">LBS Dentofacial Centre</h4>
            
            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
              H, 92 Muradi Road<br />
              Near PNB ATM, Jamia, Batla House<br />
              Jamia Nagar, Okhla, New Delhi - 110025
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Navigation size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Landmark</h5>
                  <p className="text-sm text-slate-500 mt-1">Right next to the main PNB ATM on 92 Muradi Road.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  <Train size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Nearest Metro</h5>
                  <p className="text-sm text-slate-500 mt-1">Jamia Millia Islamia Metro Station (Magenta Line).</p>
                </div>
              </div>
            </div>

            <a 
              href="https://goo.gl/maps/YOUR_SHORT_LINK_HERE" 
              target="_blank" 
              rel="noreferrer"
              className="mt-10 bg-teal-600 text-white text-center py-4 rounded-xl font-bold hover:bg-teal-700 transition-colors w-full shadow-lg shadow-teal-600/20"
            >
              Open in Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}