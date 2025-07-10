import React, { useEffect, useState } from 'react';
import Hero from '../components/home/Hero';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api/products';
import {
  getFeaturedProducts,
  getFanFavorites,
  getNewProducts,
  getProductsByCategory
} from '../utils/productFilters';
import { Product } from '../types';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeatured] = useState<Product[]>([]);
  const [fanFavorites, setFavorites] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      if (data) {
        setProducts(data);
        setFeatured(getFeaturedProducts(data));
        setFavorites(getFanFavorites(data));
        setNewArrivals(getNewProducts(data));
      } else if (data === null) {
        console.error('Failed to fetch products');
      }
    });
  }, []);
  
  return (
    <div>
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Products */}
        <ProductGrid 
          products={featuredProducts}
          title="Our New Collection" 
        />
        
        {/* Fan Favorites */}
        <ProductGrid 
          products={fanFavorites}
          title="Fan Favorites" 
        />
        
        {/* Banner */}
        {/* <div className="my-16 bg-pink-50 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium text-gray-900 mb-4">
                  Join Our Loyalty Program
                </h2>
                <p className="text-gray-600 mb-6">
                  Sign up today and get 10% off your first order, plus exclusive access to new product launches and special offers.
                </p>
                <Button as={Link} to="/register">
                  Sign Up Now
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4153615/pexels-photo-4153615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Beauty products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div> */}
        
        {/* Categories */}
        <div className="my-16">
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Lexy Fragrance"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="font-serif text-2xl font-medium text-white mb-2">Lexy Fragrance</h3>
                  <div className="space-y-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <Link 
                      to="/products/for-her"
                      className="block text-white text-sm hover:text-pink-200 transition-colors"
                    >
                      For Her
                    </Link>
                    <Link 
                      to="/products/for-him"
                      className="block text-white text-sm hover:text-pink-200 transition-colors"
                    >
                      For Him
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Limitless by Lexy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="font-serif text-2xl font-medium text-white mb-2">Limitless by Lexy</h3>
                  <Link 
                    to="/makeup"
                    className="inline-block text-white text-sm underline underline-offset-2 hover:text-pink-200 transition-colors"
                  >
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;