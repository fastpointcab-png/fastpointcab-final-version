
import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white dark:bg-slate-950 pt-10 pb-6 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
          {/* Brand Text Only - Compact Left */}
          <Link to="/" className="flex items-center gap-2 group">
             <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
               FastPoint
             </span>
             <span className="text-xl font-extrabold tracking-tight text-purple-600 transition-colors">
               Cab
             </span>
          </Link>

          {/* Navigation - Center Row */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['Home', 'Fleet', 'Services', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Empty div for spacing balance if needed, or just remove right section entirely */}
          <div className="hidden md:block w-[120px]"></div>
        </div>

        {/* Separator */}
        <div className="mt-8 mb-6 h-px w-full bg-slate-100 dark:bg-slate-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} FastPoint Cab. All rights reserved.</p>
          <div className="flex items-center gap-1">
             <span>Partner:</span>
             <a 
               href="https://www.trustyyellowcabs.in/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium flex items-center gap-1"
             >
               www.trustyyellowcabs.in
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
