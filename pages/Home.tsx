
import React, { useEffect } from 'react';
import { BookingForm } from '../components/BookingForm';
import { SERVICES_DATA, TESTIMONIALS_DATA } from '../constants';
import { ArrowRight, Star, Shield, Clock, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Home: React.FC = () => {
  // Split testimonials into two groups dynamically
  const midPoint = Math.ceil(TESTIMONIALS_DATA.length / 2);
  const firstRow = TESTIMONIALS_DATA.slice(0, midPoint);
  const secondRow = TESTIMONIALS_DATA.slice(midPoint);

  const { state } = useLocation();

  useEffect(() => {
    if (state && state.scrollToBook) {
      const element = document.getElementById('book');
      if (element) {
        // Small timeout to ensure render is complete
        setTimeout(() => {
          const navbarHeight = 80; // Approximate height of sticky navbar
          const extraPadding = 20;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - extraPadding;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [state]);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"></div>
          
          {/* Ambient Light Effects */}
          <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pt-10 pb-20">
          
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-purple-200 rounded-full text-sm font-semibold border border-white/10 backdrop-blur-md shadow-lg">
              <Star size={14} className="fill-purple-400 text-purple-400" />
              <span>Top Rated Cab Service in Coimbatore</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              FastPoint Taxi Service | <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Reliable Rides in Coimbatore</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Local ride ah? Outstation ah? <br/>
              FastPoint Cab dhaan — Anytime, Anywhere!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a 
                href="tel:+919488834020" 
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(124,58,237,0.7)] hover:scale-105 border border-purple-400/30 backdrop-blur-md animate-shake"
              >
                <Phone size={20} className="animate-pulse" />
                Call Now
              </a>
              <div className="flex items-center gap-6 text-slate-400 text-sm justify-center lg:justify-start mt-2 sm:mt-0">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-purple-400" /> Safe
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-purple-400" /> 24/7
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Container */}
          <div className="w-full flex justify-center" id="book">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Our Premier Services</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              We offer more than just a ride. Choose from our range of specialized transportation services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                   <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 text-sm">
                  Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Infinite Marquee */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mt-4">
            Real stories from our happy travelers.
          </p>
        </div>

        {/* Row 1 - Scroll Left */}
        <div className="relative w-full mb-8">
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {/* Original Set */}
            <div className="flex gap-6 px-3">
              {firstRow.map((t) => (
                <div key={t.id} className="w-[350px] md:w-[400px] flex-shrink-0 bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic mb-6 text-base leading-relaxed line-clamp-3">"{t.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</h4>
                      <span className="text-xs text-purple-600 dark:text-purple-400">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate Set for Loop */}
            <div className="flex gap-6 px-3">
              {firstRow.map((t) => (
                <div key={`${t.id}-dup`} className="w-[350px] md:w-[400px] flex-shrink-0 bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic mb-6 text-base leading-relaxed line-clamp-3">"{t.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</h4>
                      <span className="text-xs text-purple-600 dark:text-purple-400">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Scroll Right (Reverse) */}
        <div className="relative w-full">
          <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused]">
            {/* Original Set */}
            <div className="flex gap-6 px-3">
              {secondRow.map((t) => (
                <div key={t.id} className="w-[350px] md:w-[400px] flex-shrink-0 bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic mb-6 text-base leading-relaxed line-clamp-3">"{t.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</h4>
                      <span className="text-xs text-purple-600 dark:text-purple-400">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
             {/* Duplicate Set for Loop */}
             <div className="flex gap-6 px-3">
              {secondRow.map((t) => (
                <div key={`${t.id}-dup`} className="w-[350px] md:w-[400px] flex-shrink-0 bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic mb-6 text-base leading-relaxed line-clamp-3">"{t.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</h4>
                      <span className="text-xs text-purple-600 dark:text-purple-400">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
