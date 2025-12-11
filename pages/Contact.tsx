
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Contact Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    const phoneNumber = '919488834020';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">We are here to help. Reach out to us 24/7.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-2xl text-purple-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-lg">Phone</p>
                    <p className="text-slate-600 dark:text-slate-400">+91 94888 34020</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-2xl text-purple-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-lg">Email</p>
                    <p className="text-slate-600 dark:text-slate-400">fastpointcab@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-2xl text-purple-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-lg">Address</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Fastpoint Cab-Taxi services<br />
                      Coimbatore, Tamil Nadu, 641007
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-80 bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44163071375!2d76.88483286780826!3d11.014203302096378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c817186f121b!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709555000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Coimbatore Map"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all" 
                  placeholder="Email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none resize-none transition-all" 
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={sent}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/30"
              >
                {sent ? 'Redirecting to WhatsApp...' : (
                  <>Send via WhatsApp <Send size={20} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
