
import React from 'react';
import { FLEET_DATA } from '../constants';
import { Users, Briefcase, Zap, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Fleet: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Fleet</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose from our diverse range of modern, well-maintained vehicles. From economical sedans to luxury coaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_DATA.map((car) => (
            <div key={car.id} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group border border-slate-100 dark:border-slate-700">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-purple-600 dark:text-purple-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-purple-200 dark:border-purple-800">
                  {car.type}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{car.name}</h3>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-purple-600 dark:text-purple-400">{}</span>
                    <span className="text-xs text-slate-500"></span>
                  </div>
                </div>

                <div className="flex gap-4 mb-8 text-slate-600 dark:text-slate-400 text-sm">
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-lg">
                    <Users size={16} className="text-purple-500" />
                    <span>{car.capacity} Seats</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-lg">
                    <Briefcase size={16} className="text-purple-500" />
                    <span>{car.luggage} Bags</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                         <Check size={10} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  to="/" 
                  state={{ scrollToBook: true }}
                  className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3.5 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white dark:hover:text-white transition-all shadow-md hover:shadow-lg"
                >
                  Book This Ride
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
