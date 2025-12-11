
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/fleet', label: 'Fleet' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Text Only */}
          <Link to="/" className="flex items-center gap-2 group">
             <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
               FastPoint
             </span>
             <span className="text-2xl font-extrabold tracking-tight text-purple-600 transition-colors">
               Cab
             </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-purple-600 ${
                  isActive(link.path) 
                    ? 'text-purple-600 dark:text-purple-400' 
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-purple-400"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link 
              to="/" 
              state={{ scrollToBook: true }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-purple-400"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-10 fade-in duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/"
                state={{ scrollToBook: true }}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3.5 rounded-full font-bold shadow-lg shadow-purple-500/20"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
