import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SeedProduct } from '../types';
import { Star, MapPin, DollarSign } from 'lucide-react';

interface ProductCardProps {
  product: SeedProduct;
  onViewDetails: (product: SeedProduct) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
            <Star className="h-3 w-3 inline mr-1" />
            {t('common.featured')}
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {t('products.outOfStock')}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
            {product.name}
          </h3>
          {/* <span className="text-green-600 font-semibold text-lg">
            ${product.price}
          </span> */}
        </div>

        <p className="text-gray-600 text-sm mb-3">{product.variety}</p>
        
        {/* <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {product.description}
        </p> */}

        {/* <div className="flex items-center mb-4 text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{product.regions.slice(0, 2).join(', ')}</span>
          {product.regions.length > 2 && <span className="ml-1">+{product.regions.length - 2}</span>}
        </div> */}

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.traits.slice(0, 2).map((trait, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
              >
                {trait}
              </span>
            ))}
            {product.traits.length > 2 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                +{product.traits.length - 2}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onViewDetails(product)}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
            product.inStock
              ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!product.inStock}
        >
          {product.inStock ? t('products.viewDetails') : t('products.outOfStock')}
        </button>
      </div>
    </div>
  );
}