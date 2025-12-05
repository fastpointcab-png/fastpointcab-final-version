
import React, { useState } from 'react';
import { BookingDetails, VehicleType } from '../types';
import { MapPin, User, Phone, Car } from 'lucide-react';
import { sendBookingEmail } from '../services/emailService';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingDetails>({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    vehicleType:'',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Send Email via Brevo (only if email is available, though field is removed now)
    await sendBookingEmail(formData);

    setSubmitted(true);
    setLoading(false);
    
    // Simulate API call/Success Reset
    setTimeout(() => {
      alert('Booking Request Received!');
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        pickup: '',
        drop: '',
        date: '',
        time: '',
        vehicleType: VehicleType.SEDAN,
      });
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl w-full max-w-md mx-auto border-t-4 border-purple-600 ring-1 ring-slate-100 dark:ring-slate-700">
      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
        Quick Booking
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Pickup - Full Width */}
        <div className="relative group">
          <MapPin className="absolute left-3 top-3.5 text-purple-600 transition-colors group-hover:text-purple-700" size={18} />
          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            required
            value={formData.pickup}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm transition-all shadow-sm"
          />
        </div>

        {/* Drop - Full Width */}
        <div className="relative group">
          <MapPin className="absolute left-3 top-3.5 text-indigo-500 transition-colors group-hover:text-indigo-600" size={18} />
          <input
            type="text"
            name="drop"
            placeholder="Drop Location"
            required
            value={formData.drop}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm transition-all shadow-sm"
          />
        </div>

        {/* Date & Time - Side by Side */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm transition-all shadow-sm"
            />
          </div>
          <div className="relative">
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Vehicle & Name - Side by Side */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
             <div className="absolute left-3 top-3.5 pointer-events-none z-10">
                <Car size={16} className="text-slate-400" />
             </div>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full pl-9 pr-2 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none text-sm relative transition-all shadow-sm"
            >
              {Object.values(VehicleType).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-slate-400" size={16} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Phone - Highlighted Style - Purple Theme */}
        <div className="relative">
          <Phone className="absolute left-3 top-3.5 text-purple-600 dark:text-purple-400" size={18} />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-purple-400 bg-purple-50 dark:bg-slate-800 dark:border-purple-500/50 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none font-medium placeholder-slate-500 shadow-sm transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading || submitted}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-70 disabled:cursor-wait mt-4"
        >
          {loading ? 'Processing...' : (submitted ? 'Booked!' : 'Confirm Booking')}
        </button>
      </form>
    </div>
  );
};
