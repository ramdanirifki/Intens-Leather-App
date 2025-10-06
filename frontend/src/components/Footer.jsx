import React, { useState } from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Add actual newsletter subscription logic here
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mens" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/womens" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Help
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="https://api.whatsapp.com/send/?phone=6281222788133&text&type=phone_number&app_absent=0" target="_blank" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="https://api.whatsapp.com/send/?phone=6281222788133&text&type=phone_number&app_absent=0" target="_blank" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping & return" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://api.whatsapp.com/send/?phone=6281222788133&text&type=phone_number&app_absent=0" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.instagram.com/intens.id?igsh=MWR0bzBnZHZjaXc4bg%3D%3D" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/16nz56moGv/" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.youtube.com/@intensleather" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © 2025 Intens.id. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;