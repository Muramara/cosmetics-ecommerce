// src/api/products.ts
import { createClient } from '@supabase/supabase-js';
import { Product } from '../types';

const supabase = createClient(
  'https://ctkcjuahsszvjudllcid.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0a2NqdWFoc3N6dmp1ZGxsY2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MjU5MTMsImV4cCI6MjA2NzEwMTkxM30.MyqTYoW-45kQu-Gwh6DvFo_Av5gfeWCoU6w3Lfjkaog'
);

export const fetchProducts = async (): Promise<Product[] | null> => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('Error fetching products:', error);
    return null;
  }
  return data;
};
