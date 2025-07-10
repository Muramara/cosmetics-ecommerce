import { Product } from '../types';

export const getProductById = (products: Product[], id: string): Product | undefined => {
  return products.find(product => product.product_id === Number(id));
};

export const getProductsByCategory = (products: Product[], category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (products: Product[]): Product[] => {
  return products.filter(product => product.featured);
};

export const getFanFavorites = (products: Product[]): Product[] => {
  return products.filter(product => product.fan_favorite);
};

export const getNewProducts = (products: Product[]): Product[] => {
  return products.filter(product => product.new);
};
