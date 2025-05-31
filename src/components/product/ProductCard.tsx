import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Quick actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="bg-white rounded-full shadow-md flex items-center space-x-2 p-1">
            <button 
              onClick={handleAddToCart}
              className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} />
            </button>
            <button 
              className="bg-gray-100 text-gray-700 p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.new && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">New</span>
          )}
          {product.bestseller && (
            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded">Bestseller</span>
          )}
          {product.featured && (
            <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded">Featured</span>
          )}
        </div>
      </div>
      
      <div className="mt-4 space-y-1">
        <div className="flex items-center justify-between">
          <Link to={`/product/${product.id}`} className="font-medium text-gray-900 hover:text-pink-500 transition-colors">
            {product.name}
          </Link>
          <span className="font-medium">${product.price}</span>
        </div>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <div className="flex items-center space-x-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;