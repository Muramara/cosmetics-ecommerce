import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Heart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFragranceDropdownOpen, setIsFragranceDropdownOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-baskerville text-2xl font-bold text-pink-500">
            LEXY COSMETICS
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-pink-500 transition-colors"
                onMouseEnter={() => setIsFragranceDropdownOpen(true)}
                onMouseLeave={() => setIsFragranceDropdownOpen(false)}
              >
                Lexy Fragrance
              </button>
              {isFragranceDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2"
                  onMouseEnter={() => setIsFragranceDropdownOpen(true)}
                  onMouseLeave={() => setIsFragranceDropdownOpen(false)}
                >
                  <Link 
                    to="/categories/for-her" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    For Her
                  </Link>
                  <Link 
                    to="/categories/for-him" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    For Him
                  </Link>
                </div>
              )}
            </div>
            <Link to="/makeup" className="text-gray-700 hover:text-pink-500 transition-colors">
              Limitless by Lexy
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-pink-500 transition-colors">
              Shop
            </Link>
            <Link to="/categories/fragrance" className="text-gray-700 hover:text-pink-500 transition-colors">
              Fragrance
            </Link>
            {/* <Link to="/categories/makeup" className="text-gray-700 hover:text-pink-500 transition-colors">
              Makeup
            </Link> */}
            {/* <Link to="/categories/skincare" className="text-gray-700 hover:text-pink-500 transition-colors">
              Skincare
            </Link> */}
            <Link to="/about-us" className="text-gray-700 hover:text-pink-500 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500 transition-colors">
              Contact Us
            </Link>
          </nav>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-pink-500 transition-colors">
              <Search size={20} />
            </button>
            
            {isAuthenticated ? (
              <div className="relative group">
                <Link to="/account" className="text-gray-700 hover:text-pink-500 transition-colors">
                  <User size={20} />
                </Link>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Account
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Orders
                  </Link>
                  <Link to="/wishlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Wishlist
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-pink-500 transition-colors">
                <User size={20} />
              </Link>
            )}
            
            <Link to="/wishlist" className="text-gray-700 hover:text-pink-500 transition-colors">
              <Heart size={20} />
            </Link>
            
            <Link to="/cart" className="relative text-gray-700 hover:text-pink-500 transition-colors">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              {/* <Link 
                to="/categories/skincare" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skincare
              </Link> */}
              <Link 
                to="/categories/fragrance" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fragrance
              </Link>
              {/* <Link 
                to="/categories/makeup" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Makeup
              </Link> */}
              <Link 
                to="/about-us" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;