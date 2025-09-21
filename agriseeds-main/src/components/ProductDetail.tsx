import React from "react";
import {
  ArrowLeft,
  MapPin,
  Star,
  Shield,
  TrendingUp,
  Package,
  Clock,
} from "lucide-react";
import { SeedProduct } from "../types";

interface ProductDetailProps {
  product: SeedProduct;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Products</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-full object-cover"
              />
              {product.featured && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Featured Product
                </div>
              )}
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Out of Stock
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{product.variety}</p>
                {/* <div className="text-3xl font-bold text-green-600 mb-4">
                  ${product.price}
                </div> */}
              </div>

              <div className="mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Traits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Product Traits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Regions */}
              {/* <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Recommended Regions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.regions.map((region, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`flex-1 py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 ${
                    product.inStock
                      ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Request Quote" : "Out of Stock"}
                </button>
                {/* <button className="flex-1 border-2 border-green-600 text-green-600 py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-600 hover:text-white transition-all duration-200">
                  Find Dealer
                </button> */}
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-green-600" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-green-100 p-1 rounded-full mt-1">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Package className="h-6 w-6 mr-2 text-green-600" />
                  Specifications
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-gray-100"
                      >
                        <span className="text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <span className="text-gray-900 font-medium">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
