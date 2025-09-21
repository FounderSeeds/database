import React from "react";
import { Search, Filter, Grid, List, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SeedProduct } from "../types";
import { useSearch } from "../hooks/useSearch";
import ProductCard from "./ProductCard";

interface ProductsPageProps {
  products: SeedProduct[];
  onViewProduct: (product: SeedProduct) => void;
  onNavigate: (page: string, category?: string) => void;
}

export default function ProductsPage({
  products,
  onViewProduct,
  onNavigate,
}: ProductsPageProps) {
  const { t } = useLanguage();
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedRegion,
    setSelectedRegion,
    inStockOnly,
    setInStockOnly,
    filteredProducts,
  } = useSearch(products);

  const categories = [
    "all",
    "corn",
    "soybean",
    "wheat",
    "cotton",
    "vegetables",
    "specialty",
  ];
  const regions = [
    "all",
    "midwest",
    "northern plains",
    "southern plains",
    "eastern corn belt",
    "cotton belt",
  ];

  const getCategoryName = (category: string) => {
    if (category === "all") return t("products.allCategories");
    return t(`category.${category}`);
  };

  const getRegionName = (region: string) => {
    if (region === "all") return t("products.allRegions");
    return region.charAt(0).toUpperCase() + region.slice(1);
  };

  const productCategories = [
    {
      name: "Castor",
      id: "castor",
      count: products.filter(
        (p) =>
          p.name.toLowerCase().includes("castor") ||
          p.name.includes("URVI") ||
          p.name.includes("TOKYO")
      ).length,
      icon: "🌿",
    },
    {
      name: "Groundnut",
      id: "groundnut",
      count: products.filter(
        (p) =>
          p.name.toLowerCase().includes("ambar") || p.name.includes("SONPARI")
      ).length,
      icon: "🥜",
    },
    {
      name: "Pigeon Pea",
      id: "pigeonpea",
      count: products.filter(
        (p) => p.name.includes("SHRIVALLI") || p.name.includes("SHILAVATI")
      ).length,
      icon: "🌱",
    },
    {
      name: "Soybean",
      id: "soybean",
      count: products.filter((p) => p.category === "soybean").length,
      icon: "🌾",
    },
    {
      name: "Wheat",
      id: "wheat",
      count: products.filter((p) => p.category === "wheat").length,
      icon: "🌾",
    },
    {
      name: "Gram",
      id: "gram",
      count: products.filter((p) => p.name.includes("OJAS")).length,
      icon: "🌰",
    },
    {
      name: "Coriander",
      id: "coriander",
      count: products.filter((p) => p.name.includes("NATRAJ")).length,
      icon: "🌿",
    },
    {
      name: "Cumin",
      id: "cumin",
      count: products.filter((p) => p.name.includes("KEVAL")).length,
      icon: "🌿",
    },
    {
      name: "Sesame",
      id: "sesame",
      count: products.filter((p) => p.name.includes("KETAKI")).length,
      icon: "🌻",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("products.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {t("products.description")}
          </p>
        </div>

        {/* Product Categories */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigate("category", category.id)}
                className="bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg p-4 text-center transition-all duration-200 group"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.count}{" "}
                  {category.count === 1 ? "variety" : "varieties"}
                </p>
                <ArrowRight className="h-4 w-4 mx-auto mt-2 text-gray-400 group-hover:text-green-600 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t("products.search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {getCategoryName(category)}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {getRegionName(region)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="inStock"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
              />
              <label
                htmlFor="inStock"
                className="text-sm font-medium text-gray-700"
              >
                {t("products.inStockOnly")}
              </label>
            </div>

            <div className="text-sm text-gray-600">
              {t("products.showing")} {filteredProducts.length}{" "}
              {t("products.of")} {products.length} {t("products.products")}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">{t("products.noResultsDesc")}</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedRegion("all");
                setInStockOnly(false);
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              {t("products.clearFilters")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
