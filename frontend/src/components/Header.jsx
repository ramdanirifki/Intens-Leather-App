import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const navigation = [
    { name: 'MEN', href: '/mens' },
    { name: 'WOMEN', href: '/womens' },
    { name: 'ACCESSORIES', href: '/accessories' },
    { name: 'LOOKBOOK', href: '/lookbook' },
    { name: 'PROVISIONS', href: '/provisions' },
    { name: 'ABOUT', href: '/about' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              <img src="/images/logo/logo.png" alt="Logo Intens.id" width="50%" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-900 hover:text-gray-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-900 hover:text-gray-600 transition-colors">
              <User size={20} />
            </button>
            <button className="relative text-gray-900 hover:text-gray-600 transition-colors">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;