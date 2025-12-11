
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Modern Hero Section */}
      <div className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-slate-900"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl mix-blend-screen"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Your Journey, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Our Responsibility.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
             Coimbatore-la irundhu enga venalum — We Take You There
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Driving the Future of Transportation</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded in 2020, FastPoint Cab has grown into one of the most trusted taxi services in Coimbatore.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Our goal has always been simple — safe rides, clean cars, professional drivers, and on-time pickup anywhere in Coimbatore and Tamil Nadu.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              With years of experience in airport transfers, local rides, outstation trips, city-to-city travel, rental & hourly packages, we proudly serve families, corporate travellers, tourists, and daily commuters.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <span className="block text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</span>
                <span className="text-slate-600 dark:text-slate-400 font-medium">Years of Experience</span>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <span className="block text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50k+</span>
                <span className="text-slate-600 dark:text-slate-400 font-medium">Happy Travelers</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="images/ChatGPT Image Oct 12, 2025, 09_27_33 AM.jpg" className="rounded-2xl shadow-xl mt-12 hover:scale-105 transition-transform duration-500 border-4 border-white dark:border-slate-800" alt="Office" />
             <img src="images/taxi4-5 Verticle 1080 x 1350px.jpg" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 border-4 border-white dark:border-slate-800" alt="Driver" />
          </div>
        </div>
      </div>
    </div>
  );
};
