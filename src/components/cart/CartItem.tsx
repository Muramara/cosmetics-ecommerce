import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <Link 
            to={`/product/${product.id}`}
            className="text-sm font-medium text-gray-900 hover:text-pink-500 transition-colors"
          >
            {product.name}
          </Link>
          <p className="text-sm font-medium text-gray-900">
            ${(product.price * quantity).toFixed(2)}
          </p>
        </div>
        <p className="mt-1 text-xs text-gray-500 capitalize">{product.category}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button 
              onClick={handleDecrement}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="px-2 text-sm text-gray-900">{quantity}</span>
            <button 
              onClick={handleIncrement}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button 
            onClick={handleRemove}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;