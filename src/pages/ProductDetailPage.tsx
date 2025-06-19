import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Star, Truck, RotateCcw, Shield, ShoppingCart } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductGrid from '../components/product/ProductGrid';
import { useNavigate } from 'react-router-dom';


const ProductDetailPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const navigate = useNavigate();

  
  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  useEffect(() => {
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Button onClick={() => navigate('products')}>
          Return to Shop
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert('You need to be logged in to add items to your cart.');
      navigate('/login');
      return;
    }
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="lg:w-1/2">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="capitalize text-gray-500">{product.category}</span>
              {product.featured && (
                <span className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                  Featured
                </span>
              )}
              {product.fanFavorite && (
                <span className="ml-2 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                  Fan Favorite
                </span>
              )}
              {product.new && (
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-serif font-medium text-gray-900 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>
            
            <p className="text-2xl font-medium text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>
          </div>
          
          {/* Add to cart */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="flex items-center border border-gray-300 rounded-md mr-4">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-12 text-center border-0 p-0 focus:ring-0"
                />
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart} 
                className="flex items-center gap-2"
                size="lg"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
              
              <button className="ml-3 p-2 rounded-full border border-gray-300 text-gray-500 hover:text-pink-500 hover:border-pink-300 transition-all">
                <Heart size={20} />
              </button>
            </div>
            
            {/* Product features */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Truck size={18} className="mr-2 text-gray-400" />
                Free shipping on orders over $50
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <RotateCcw size={18} className="mr-2 text-gray-400" />
                30-day return policy
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Shield size={18} className="mr-2 text-gray-400" />
                Cruelty-free and sustainable
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex border-b border-gray-200">
              <button
                className={`pb-2 mr-6 text-sm font-medium ${
                  activeTab === 'description' 
                    ? 'text-pink-500 border-b-2 border-pink-500' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`pb-2 mr-6 text-sm font-medium ${
                  activeTab === 'ingredients' 
                    ? 'text-pink-500 border-b-2 border-pink-500' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('ingredients')}
              >
                Ingredients
              </button>
              <button
                className={`pb-2 text-sm font-medium ${
                  activeTab === 'how-to-use' 
                    ? 'text-pink-500 border-b-2 border-pink-500' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('how-to-use')}
              >
                How to Use
              </button>
            </div>
            
            <div className="py-4 text-sm text-gray-600">
              {activeTab === 'description' && (
                <div>
                  <p>{product.description}</p>
                  <p className="mt-4">
                    Our formula is developed with clean, high-quality ingredients that work in harmony with your skin, not against it.
                    Every product is created with sustainability and effectiveness in mind.
                  </p>
                </div>
              )}
              
              {activeTab === 'ingredients' && (
                <div>
                  <p>
                    All ingredients are responsibly sourced and chosen for their effectiveness and compatibility with all skin types.
                  </p>
                  <ul className="list-disc pl-5 mt-3 space-y-1">
                    <li>Aqua/Water</li>
                    <li>Glycerin</li>
                    <li>Vitamin E</li>
                    <li>Niacinamide</li>
                    <li>Hyaluronic Acid</li>
                    <li>Panthenol</li>
                    <li>Natural extracts and botanicals</li>
                  </ul>
                  <p className="mt-3">
                    Free from parabens, sulfates, phthalates, and artificial fragrances.
                  </p>
                </div>
              )}
              
              {activeTab === 'how-to-use' && (
                <div>
                  <p>
                    For best results, follow these simple steps:
                  </p>
                  <ol className="list-decimal pl-5 mt-3 space-y-2">
                    <li>Start with clean, dry skin.</li>
                    <li>Apply a small amount to your fingertips.</li>
                    <li>Gently massage into skin using upward circular motions.</li>
                    <li>Allow to fully absorb before applying other products.</li>
                    <li>Use morning and evening for optimal results.</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <ProductGrid 
            products={relatedProducts}
            title="You May Also Like" 
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;