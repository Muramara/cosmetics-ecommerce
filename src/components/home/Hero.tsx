import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4 leading-tight">
              Discover Your <span className="text-pink-500">Natural</span> Beauty
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Luxurious, cruelty-free cosmetics made with clean ingredients that nourish your skin and enhance your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" as={Link} to="/products">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" as={Link} to="/our-story">
                Our Story
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Beauty products"
                className="w-full h-full object-cover"
              />
              
              {/* Floating product card */}
              <div className="absolute bottom-8 -left-4 md:-left-8 bg-white p-4 rounded-lg shadow-xl max-w-xs transition-transform duration-500 hover:translate-y-[-8px]">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                      alt="Radiance Serum"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Radiance Serum</h3>
                    <p className="text-sm text-pink-500 font-medium">$58.00</p>
                    <div className="flex text-amber-500 text-xs mt-1">
                      ★★★★★ <span className="text-gray-500 ml-1">(124)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-200 rounded-full opacity-70"></div>
              <div className="absolute top-1/4 -right-3 w-16 h-16 bg-purple-200 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features banner */}
      <div className="bg-white py-6 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">Cruelty-Free</h3>
              <p className="text-sm text-gray-500">Never tested on animals</p>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">Clean Ingredients</h3>
              <p className="text-sm text-gray-500">No harmful chemicals</p>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-500">On orders over $50</p>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">Sustainable</h3>
              <p className="text-sm text-gray-500">Eco-friendly packaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;