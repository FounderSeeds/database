import React from "react";
import {
  ArrowRight,
  Award,
  Users,
  Leaf,
  TrendingUp,
  Shield,
  Globe,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SeedProduct } from "../types";
import ProductCard from "./ProductCard";

interface HomePageProps {
  featuredProducts: SeedProduct[];
  onNavigate: (page: string) => void;
  onViewProduct: (product: SeedProduct) => void;
}

export default function HomePage({
  featuredProducts,
  onNavigate,
  onViewProduct,
}: HomePageProps) {
  const { t } = useLanguage();

  const stats = [
    { label: t("stats.experience"), value: "50+", icon: Award },
    { label: t("stats.farmers"), value: "10K+", icon: Users },
    { label: t("stats.varieties"), value: "200+", icon: Leaf },
    { label: t("stats.states"), value: "30+", icon: Globe },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: t("features.excellence.title"),
      description: t("features.excellence.description"),
    },
    {
      icon: Shield,
      title: t("features.integrity.title"),
      description: t("features.integrity.description"),
    },
    {
      icon: Globe,
      title: t("features.innovation.title"),
      description: t("features.innovation.description"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-700/80 to-green-600/90"></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {t("hero.title")}
              <span className="block text-yellow-400">
                {t("hero.subtitle")}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100">
              {t("hero.description")}
            </p>
            <p className="text-lg mb-8 text-green-200">
              With a robust selection of improved and hybrid varieties developed
              through rigorous selection and quality control processes, we're
              here to be your trusted partner in farming success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate("products")}
                className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center"
              >
                {t("hero.shopSeeds")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              {/* <button
                onClick={() => onNavigate("dealers")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                {t("hero.findDealer")}
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-600 p-4 rounded-full">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("features.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp Contact */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("contact.whatsapp.title")}
                </h3>
                <p className="text-green-100 mb-4">
                  {t("contact.whatsapp.description")}
                </p>
                <a
                  href="https://wa.me/919099196962?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20FounderSeeds%20products.%20Can%20you%20help%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  {t("contact.whatsapp.button")}
                </a>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("contact.phone.title")}
                </h3>
                <p className="text-blue-100 mb-4">
                  {t("contact.phone.description")}
                </p>
                <a
                  href="tel:+919099196962"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +91 90991 96962
                </a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("contact.email.title")}
                </h3>
                <p className="text-purple-100 mb-4">
                  {t("contact.email.description")}
                </p>
                <button
                  onClick={() => onNavigate("contact")}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {t("contact.email.button")}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          {/* <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {"< 2 min"}
                </div>
                <div className="text-gray-600">{t("contact.responseTime")}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600">{t("contact.support247")}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">
                  {t("contact.expertGuidance")}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Featured Products */}
      {/* <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("featured.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("featured.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProduct}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("products")}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all duration-300 inline-flex items-center"
            >
              {t("featured.viewAll")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300"
            >
              {t("cta.consultation")}
            </button>
            {/* <button
              onClick={() => onNavigate("dealers")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              {t("cta.findDealer")}
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
