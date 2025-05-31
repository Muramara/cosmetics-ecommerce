import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Radiance Serum',
    description: 'A lightweight serum that brightens and evens skin tone with vitamin C and niacinamide.',
    price: 58,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'skincare',
    rating: 4.8,
    reviews: 124,
    featured: true
  },
  {
    id: '2',
    name: 'Hydrating Moisturizer',
    description: 'Rich yet non-greasy moisturizer with hyaluronic acid for 24-hour hydration.',
    price: 45,
    image: 'https://images.pexels.com/photos/3685535/pexels-photo-3685535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'skincare',
    rating: 4.7,
    reviews: 98,
    bestseller: true
  },
  {
    id: '3',
    name: 'Velvet Matte Lipstick',
    description: 'Long-lasting matte lipstick with a comfortable, non-drying formula.',
    price: 32,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'makeup',
    rating: 4.5,
    reviews: 76
  },
  {
    id: '4',
    name: 'Volumizing Mascara',
    description: 'Buildable mascara that adds volume and length without clumping.',
    price: 28,
    image: 'https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'makeup',
    rating: 4.6,
    reviews: 89,
    bestseller: true
  },
  {
    id: '5',
    name: 'Gentle Exfoliating Scrub',
    description: 'Gentle physical exfoliant that removes dead skin cells for a smoother complexion.',
    price: 36,
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'skincare',
    rating: 4.4,
    reviews: 62
  },
  {
    id: '6',
    name: 'Luxe Perfume',
    description: 'Elegant fragrance with notes of jasmine, vanilla, and sandalwood.',
    price: 120,
    image: 'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'fragrance',
    rating: 4.9,
    reviews: 45,
    featured: true
  },
  {
    id: '7',
    name: 'Rose Gold Eyeshadow Palette',
    description: 'Versatile palette with 12 highly-pigmented rose gold and neutral shades.',
    price: 52,
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'makeup',
    rating: 4.7,
    reviews: 118,
    bestseller: true
  },
  {
    id: '8',
    name: 'Overnight Repair Mask',
    description: 'Intensive overnight treatment that rejuvenates skin while you sleep.',
    price: 48,
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'skincare',
    rating: 4.8,
    reviews: 57,
    new: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestsellers = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};