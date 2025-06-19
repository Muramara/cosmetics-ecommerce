import React, { useState, useEffect } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';
import { useParams, useNavigate } from 'react-router-dom';

const ProductListPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { categoryParam } = useParams<{ categoryParam: string }>();
  const navigate = useNavigate();
  
  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    if (categoryParam) {
      let category = "";
      switch (categoryParam) {
        case 'for-her':
          category = 'For Her';
          break;
        case 'for-him':
          category = 'For Him';
          break;
        default:
          category = ""; // No specific category
          break;
      }
      handleCategoryChange(category);
    }
  }, [categoryParam]);
  
  const handleCategoryChange = (category: string | null, updateURL: boolean = true) => {
    setCategoryFilter(category);
    filterProducts(category, priceFilter);

    // Push to URL if triggered by user
    if (updateURL && category) {
      const urlParam = category.toLowerCase().replace(/\s+/g, "-"); // e.g., "For Her" → "for-her"
      navigate(`/products/${urlParam}`);
    }

    if (updateURL && !category) {
      navigate("/products");
    }
  };
  
  const handlePriceChange = (price: string | null) => {
    setPriceFilter(price);
    filterProducts(categoryFilter, price);
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    
    let sorted = [...filteredProducts];
    
    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (featured)
        sorted = [...products];
        if (categoryFilter) {
          sorted = sorted.filter(product => product.category === categoryFilter);
        }
        if (priceFilter) {
          sorted = applyPriceFilter(sorted, priceFilter);
        }
    }
    
    setFilteredProducts(sorted);
  };
  
  const filterProducts = (category: string | null, price: string | null) => {
    let filtered = [...products];
    
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    
    if (price) {
      filtered = applyPriceFilter(filtered, price);
    }
    
    // Re-apply current sorting
    if (sortBy !== 'featured') {
      handleSortChange({ target: { value: sortBy } } as React.ChangeEvent<HTMLSelectElement>);
      return;
    }
    setFilteredProducts(filtered);
  };
  
  const applyPriceFilter = (products: any[], priceRange: string) => {
    switch (priceRange) {
      case 'under-25':
        return products.filter(product => product.price < 25);
      case '25-50':
        return products.filter(product => product.price >= 25 && product.price <= 50);
      case '50-100':
        return products.filter(product => product.price > 50 && product.price <= 100);
      case 'over-100':
        return products.filter(product => product.price > 100);
      default:
        return products;
    }
  };
  
  const resetFilters = () => {
    setCategoryFilter(null);
    setPriceFilter(null);
    setSortBy('featured');
    setFilteredProducts(products);
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-medium text-gray-900 mb-8">All Products</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile filter toggle */}
        <div className="lg:hidden mb-4">
          <Button 
            variant="outline" 
            fullWidth 
            onClick={toggleFilters}
            className="flex items-center justify-center gap-2"
          >
            <Filter size={18} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        {/* Filters sidebar */}
        <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <SlidersHorizontal size={18} />
                Filters
              </h2>
              <button 
                onClick={resetFilters}
                className="text-sm text-pink-500 hover:text-pink-600 transition-colors"
              >
                Reset
              </button>
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Lexy Fragrance</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${category}`}
                      name="category"
                      checked={categoryFilter === category}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700 capitalize">
                      {category}
                    </label>
                  </div>
                ))}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="category-all"
                    name="category"
                    checked={categoryFilter === null}
                    onChange={() => handleCategoryChange(null)}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                  />
                  <label htmlFor="category-all" className="ml-2 text-sm text-gray-700">
                    All Categories
                  </label>
                </div>
              </div>
            </div>
            
            {/* Price Range */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-under-25"
                    name="price"
                    checked={priceFilter === 'under-25'}
                    onChange={() => handlePriceChange('under-25')}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                  />
                  <label htmlFor="price-under-25" className="ml-2 text-sm text-gray-700">
                    Under $25
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-25-50"
                    name="price"
                    checked={priceFilter === '25-50'}
                    onChange={() => handlePriceChange('25-50')}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                  />
                  <label htmlFor="price-25-50" className="ml-2 text-sm text-gray-700">
                    $25 - $50
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-50-100"
                    name="price"
                    checked={priceFilter === '50-100'}
                    onChange={() => handlePriceChange('50-100')}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                  />
                  <label htmlFor="price-50-100" className="ml-2 text-sm text-gray-700">
                    $50 - $100
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-over-100"
                    name="price"
                    checked={priceFilter === 'over-100'}
                    onChange={() => handlePriceChange('over-100')}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                  />
                  <label htmlFor="price-over-100" className="ml-2 text-sm text-gray-700">
                    Over $100
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-all"
                    name="price"
                    checked={priceFilter === null}
                    onChange={() => handlePriceChange(null)}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                  />
                  <label htmlFor="price-all" className="ml-2 text-sm text-gray-700">
                    All Prices
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product grid */}
        <div className="lg:w-3/4">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-gray-500">
              Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> products
            </p>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm text-gray-700 mr-2">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={handleSortChange}
                className="bg-white border border-gray-300 rounded-md text-sm py-1 px-3 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or browse all products.</p>
              <Button onClick={resetFilters}>View All Products</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;