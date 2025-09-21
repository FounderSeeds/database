import React, { useState } from "react";
import {
  Menu,
  X,
  Leaf,
  Search,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, category?: string) => void;
  selectedCategory?: string | null;
}

export default function Header({
  currentPage,
  onNavigate,
  selectedCategory,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t("nav.home"), id: "home" },
    // { name: t("nav.products"), id: "products" },
    { name: t("nav.about"), id: "about" },
    // { name: t("nav.dealers"), id: "dealers" },
    // { name: t("nav.resources"), id: "resources" },
    // { name: t("nav.news"), id: "news" },
    { name: t("nav.contact"), id: "contact" },
  ];

  const productCategories = [
    { name: "Castor", id: "castor", category: "specialty" },
    { name: "Groundnut", id: "groundnut", category: "specialty" },
    { name: "Pigeon Pea", id: "pigeonpea", category: "specialty" },
    { name: "Soybean", id: "soybean", category: "soybean" },
    { name: "Wheat", id: "wheat", category: "wheat" },
    { name: "Gram", id: "gram", category: "specialty" },
    { name: "Coriander", id: "coriander", category: "specialty" },
    { name: "Cumin", id: "cumin", category: "specialty" },
    { name: "Sesame", id: "sesame", category: "specialty" },
    { name: "Green Gram", id: "greengram", category: "specialty" },
    { name: "Black Gram", id: "blackgram", category: "specialty" },
    { name: "Cowpea", id: "cowpea", category: "specialty" },
  ];

  const handleProductCategoryClick = (categoryId: string) => {
    onNavigate("category", categoryId);
    setIsProductsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="w-24">
              <img
                src="/founder-seeds-logo.svg"
                alt="FOUNDER SEEDS Logo"
                className="w-full h-full"
              />
            </div>
            {/* <div>
              <h1 className="text-2xl font-bold text-gray-900">
                FOUNDER SEEDS
              </h1>
              <p className="text-sm text-green-600 font-medium">
                {t("header.tagline")}
              </p>
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? "text-green-600 border-b-2 border-green-600 pb-1"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  currentPage === "products" ||
                  currentPage === "category" ||
                  selectedCategory
                    ? "text-green-600 border-b-2 border-green-600 pb-1"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                <span>{t("nav.products")}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => {
                      onNavigate("products");
                      setIsProductsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-green-50 text-gray-700 hover:text-green-600 font-medium border-b border-gray-100"
                  >
                    All Products
                  </button>

                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Categories
                    </div>
                    {productCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleProductCategoryClick(category.id)}
                        className={`w-full text-left px-4 py-2 hover:bg-green-50 transition-colors duration-200 ${
                          selectedCategory === category.id
                            ? "text-green-600 bg-green-50"
                            : "text-gray-700 hover:text-green-600"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="https://wa.me/919099196962?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20FounderSeeds%20products.%20Can%20you%20help%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">
                {t("header.whatsapp")}
              </span>
            </a>
            <div className="flex items-center space-x-1 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 90991 96962</span>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
              {t("header.getQuote")}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Products Menu */}
              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => {
                    onNavigate("products");
                    setIsMenuOpen(false);
                  }}
                  className="text-left font-medium text-gray-700 hover:text-green-600 mb-2"
                >
                  All Products
                </button>

                <div className="ml-4 space-y-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Categories
                  </div>
                  {productCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleProductCategoryClick(category.id)}
                      className={`block text-left text-sm transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? "text-green-600"
                          : "text-gray-600 hover:text-green-600"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="mb-4">
                <LanguageSwitcher />
              </div>
              <a
                href="https://wa.me/919099196962?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20FounderSeeds%20products.%20Can%20you%20help%20me%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center mb-3"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {t("header.whatsapp")} Chat
              </a>
              <div className="flex items-center space-x-1 text-gray-600 mb-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+91 90991 96962</span>
              </div>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                {t("header.getQuote")}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
