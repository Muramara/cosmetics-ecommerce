import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-medium text-gray-900 mb-4">LexiFragrance</h3>
            <p className="text-gray-600 mb-4">
              Premium cosmetics for the modern, conscious consumer. Ethically sourced, cruelty-free, and made with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/skincare" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Skincare
                </Link>
              </li>
              <li>
                <Link to="/categories/makeup" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Makeup
                </Link>
              </li>
              <li>
                <Link to="/categories/fragrance" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Fragrance
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-600 hover:text-pink-500 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-pink-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/our-story" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/ingredients" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LexiFragrance. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-700 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-gray-700 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;