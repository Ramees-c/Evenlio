import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 md:pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 md:mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Eventlio</h3>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Your go-to platform for discovering and booking the best events in town. Join our community today!
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Browse Events</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Organizers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>123 Event Street, Tech City, TC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>support@eventlio.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-sm mb-4 text-slate-400">Subscribe to our newsletter for the latest event updates.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border border-slate-800 placeholder-slate-500"
              />
              <button className="bg-primary text-white px-4 py-3 rounded-lg font-bold hover:bg-secondary transition-colors shadow-lg shadow-primary/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Eventlio. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;