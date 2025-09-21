import { useState, useMemo } from 'react';
import { SeedProduct } from '../types';

export function useSearch(products: SeedProduct[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.variety.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      const matchesRegion = selectedRegion === 'all' || 
                           product.regions.some(region => region.toLowerCase().includes(selectedRegion.toLowerCase()));
      
      const matchesStock = !inStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesRegion && matchesStock;
    });
  }, [products, searchTerm, selectedCategory, selectedRegion, inStockOnly]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedRegion,
    setSelectedRegion,
    inStockOnly,
    setInStockOnly,
    filteredProducts
  };
}