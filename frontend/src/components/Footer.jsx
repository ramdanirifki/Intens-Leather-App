import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
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
              <li>
                <Link to="/new-arrivals" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  New Arrivals
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
                <Link to="/faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Size Guide
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
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © 2025 P&Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;