import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div 
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/general/logo.jpg')` }}
    >
      {/* Optional: Add a soft overlay for contrast */}
      <div className="absolute inset-0 bg-orange-500/40 backdrop-blur-sm"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-black drop-shadow">
          Lexy Fragrance
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black max-w-xl">
          A tropical scent journey, bold and unforgettable.
        </p>
        <Link 
          to="/products"
          className="mt-6 inline-block bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;