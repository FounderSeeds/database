import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16">
                <img
                  src="/founder-seeds-logo.svg"
                  alt="FOUNDER SEEDS Logo"
                  className="w-full h-full"
                />
              </div>
              {/* <div>
                <h3 className="text-xl font-bold">FOUNDER SEEDS</h3>
                <p className="text-sm text-green-400">Cultivating Prosperity Through Innovation</p>
              </div> */}
            </div>
            <p className="text-gray-400 mb-4">
              Located in Junagadh, Gujarat, FounderSeeds is an agri-seed company
              devoted to helping farmers thrive with dependable, high-performing
              seed varieties.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Company Info */}
          <div></div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.products")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.dealers")}
                </a>
              </li> 
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.resources")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.news")}
                </a>
              </li>*/}
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("common.contactUs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.products")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("category.corn")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("category.soybean")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("category.wheat")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("category.cotton")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("category.vegetables")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("category.specialty")}
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contactUs")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <div className="text-gray-400">
                  <p>Plot no. 1726, Near Vastu Shilp & Castech Foundry,</p>
                  <p>Road-J, GIDC-2, Sabalpur, Junagadh – 362037, Gujarat</p>
                  <p className="text-sm text-green-400">
                    {t("header.tagline")}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">+91 90991 96962</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">contact@founderseeds.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {t("footer.copyright")} | Visit us at www.founderseeds.in
          </p>
        </div>
      </div>
    </footer>
  );
}
