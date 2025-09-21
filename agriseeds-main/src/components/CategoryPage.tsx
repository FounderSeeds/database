import React from "react";
import { ArrowLeft, Leaf } from "lucide-react";
import { SeedProduct } from "../types";
import ProductCard from "./ProductCard";

interface CategoryPageProps {
  category: string;
  products: SeedProduct[];
  onViewProduct: (product: SeedProduct) => void;
  onBack: () => void;
}

export default function CategoryPage({
  category,
  products,
  onViewProduct,
  onBack,
}: CategoryPageProps) {
  const getCategoryInfo = (categoryId: string) => {
    const categoryMap: Record<
      string,
      { name: string; description: string; icon: string }
    > = {
      castor: {
        name: "Hybrid Castor Seeds",
        description:
          "High-yielding hybrid castor varieties with excellent oil content and disease resistance.",
        icon: "🌿",
      },
      groundnut: {
        name: "Groundnut Seeds",
        description:
          "Improved groundnut varieties with high kernel content and good market acceptance.",
        icon: "🥜",
      },
      pigeonpea: {
        name: "Pigeon Pea Seeds",
        description:
          "High-yielding pigeon pea varieties with excellent cooking quality and disease resistance.",
        icon: "🌱",
      },
      soybean: {
        name: "Soybean Seeds",
        description:
          "Premium soybean varieties with high protein content and excellent yield potential.",
        icon: "🌾",
      },
      wheat: {
        name: "Wheat Seeds",
        description:
          "High-yielding wheat varieties with excellent grain quality and disease resistance.",
        icon: "🌾",
      },
      gram: {
        name: "Gram Seeds",
        description:
          "High-yielding gram varieties with excellent cooking quality and market acceptance.",
        icon: "🌰",
      },
      coriander: {
        name: "Coriander Seeds",
        description:
          "Premium coriander varieties with high essential oil content and excellent aroma.",
        icon: "🌿",
      },
      cumin: {
        name: "Cumin Seeds",
        description:
          "High-quality cumin varieties with excellent flavor and market demand.",
        icon: "🌿",
      },
      sesame: {
        name: "Sesame Seeds",
        description:
          "High-yielding sesame varieties with excellent oil content and quality.",
        icon: "🌻",
      },
      greengram: {
        name: "Green Gram Seeds",
        description:
          "High-yielding green gram varieties with excellent cooking quality.",
        icon: "🌱",
      },
      blackgram: {
        name: "Black Gram Seeds",
        description:
          "Premium black gram varieties with high protein content and market acceptance.",
        icon: "🌑",
      },
      cowpea: {
        name: "Cowpea Seeds",
        description:
          "High-yielding cowpea varieties with excellent nutritional value.",
        icon: "🌰",
      },
    };

    return (
      categoryMap[categoryId] || {
        name: "Seeds",
        description: "High-quality seed varieties for optimal farming results.",
        icon: "🌱",
      }
    );
  };

  const categoryInfo = getCategoryInfo(category);

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

        {/* Category Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl">{categoryInfo.icon}</div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {categoryInfo.name}
              </h1>
              <p className="text-xl text-gray-600">
                {categoryInfo.description}
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">
                  Quality Assured
                </span>
              </div>
              <p className="text-green-700 text-sm">
                All varieties undergo rigorous quality testing for purity and
                performance.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-800">
                  High Yielding
                </span>
              </div>
              <p className="text-blue-700 text-sm">
                Developed for maximum productivity and consistent performance.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-purple-800">
                  Expert Support
                </span>
              </div>
              <p className="text-purple-700 text-sm">
                Get guidance from our agricultural experts for best results.
              </p>
            </div>
          </div> */}
        </div>

        {/* Products Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {products.length}{" "}
            {products.length === 1 ? "variety" : "varieties"} in{" "}
            {categoryInfo.name}
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6">
              <img
                src="/founder-seeds-logo.svg"
                alt="FOUNDER SEEDS Logo"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products available
            </h3>
            <p className="text-gray-600 mb-6">
              We're working on adding more varieties to this category.
            </p>
            <button
              onClick={onBack}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Browse All Products
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-green-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our agricultural experts are here to help you select the best{" "}
            {categoryInfo.name.toLowerCase()}
            for your specific growing conditions and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919099196962?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20FounderSeeds%20products.%20Can%20you%20help%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
            >
              Chat with Expert
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors duration-200">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
