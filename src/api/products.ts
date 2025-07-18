// src/api/products.ts
import { createClient } from '@supabase/supabase-js';
import { Product } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchProducts = async (): Promise<Product[] | null> => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('Error fetching products:', error);
    return null;
  }
  return data;
};
