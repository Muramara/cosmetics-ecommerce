import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Allegiance',
    description: 'Candied lemon middle notes orange blossom and rum base noted Vanilla portrays you as sensual and warm',
    price: 1300,
    image: '/images/products/allegiance.png',
    category: 'For Her',
    rating: 4.8,
    reviews: 124,
    featured: true
  },
  {
    id: '2',
    name: 'Guilty',
    description: 'Has some lemon, jupiter , lavender at the top in the middle nutmeg orange blossom and at the bottom patchouli musk and some dry wood',
    price: 1500,
    image: '/images/products/guilty-for-him.png',
    category: 'For Him',
    rating: 4.7,
    reviews: 98,
    fanFavorite: true
  },
  {
    id: '3',
    name: 'Lexy Vanilla',
    description: 'A sweet delicious blend of Brown sugar tonka bean vanilla patchouli and amber',
    price: 950,
    image: '/images/products/lexy-vanilla.png',
    category: 'For Her',
    rating: 4.5,
    reviews: 76
  },
  {
    id: '4',
    name: 'Power',
    description: 'Cardamom grapefruit bergamot giving it a fresh sparkling spicy opening',
    price: 1600,
    image: '/images/products/power.png',
    category: 'For Him',
    rating: 4.6,
    reviews: 89,
    fanFavorite: true
  },
  {
    id: '5',
    name: 'Tough Oud',
    description: 'Aromatic and woody fragrance ..with vanilla oud and lavender',
    price: 2100,
    image: '/images/products/tough-oud.png',
    category: 'For Her',
    rating: 4.4,
    reviews: 62
  },
  {
    id: '6',
    name: 'Scent',
    description: 'Floral fruity fragrance with roasted cocoa orange blossom jasmine sandalwood and vanilla accords',
    price: 1000,
    image: '/images/products/scent-for-her.png',
    category: 'For Her',
    rating: 4.9,
    reviews: 45,
    featured: true
  },
  {
    id: '7',
    name: 'Spice Extreme',
    description: 'Lavender heart of tobacco Cummin bottom rich amber and vanilla',
    price: 2000,
    image: '/images/products/spice-extreme-for-him.png',
    category: 'For Him',
    rating: 4.7,
    reviews: 118,
    fanFavorite: true
  },
  {
    id: '8',
    name: 'Angels',
    description: 'Warm, boozy, spicy, fragrance with notes of cognac, cinnamon, and praline',
    price: 1600,
    image: '/images/products/angels-for-her.png',
    category: 'For Her',
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

export const getFanFavorites = (): Product[] => {
  return products.filter(product => product.fanFavorite);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};