import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hi" | "gu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.dealers": "Dealers",
    "nav.resources": "Resources",
    "nav.news": "News",
    "nav.contact": "Contact",
    "header.tagline": "Cultivating Prosperity Through Innovation",
    "header.whatsapp": "WhatsApp",
    "header.getQuote": "Get Quote",

    // Homepage
    "hero.title": "Welcome to",
    "hero.subtitle": "FOUNDER SEEDS",
    "hero.description":
      "At FOUNDER SEEDS, we're committed to empowering farmers across India with superior-quality seeds for better yields and sustainable agriculture.",
    "hero.shopSeeds": "Shop Seeds",
    "hero.findDealer": "Find Dealer",

    // Stats
    "stats.experience": "Years of Experience",
    "stats.farmers": "Happy Farmers",
    "stats.varieties": "Seed Varieties",
    "stats.states": "States Served",

    // Features
    "features.title": "Why Choose AgriSeed Pro?",
    "features.title": "Why Choose FOUNDER SEEDS?",
    "features.description":
      "Built on values of trust, quality, and service, we collaborate closely with growers to supply seeds that meet the diverse needs of modern agriculture.",
    "features.excellence.title": "Excellence",
    "features.excellence.description":
      "High-quality seeds that lead to improved productivity and sustainability.",
    "features.integrity.title": "Integrity",
    "features.integrity.description":
      "Built on values of trust, quality, and service with our farming partners.",
    "features.innovation.title": "Innovation",
    "features.innovation.description":
      "Leading name in the seed industry known for consistency and farmer-centric innovation.",

    // Contact Section
    "contact.title": "Let's Grow Together",
    "contact.description":
      "Get instant support from our agricultural experts. We're here to help you choose the right seeds for your farm.",
    "contact.whatsapp.title": "WhatsApp Chat",
    "contact.whatsapp.description":
      "Chat with us instantly for quick answers and personalized recommendations.",
    "contact.whatsapp.button": "Chat Now",
    "contact.phone.title": "Call Us",
    "contact.phone.description":
      "Speak directly with our seed specialists for expert guidance.",
    "contact.email.title": "Email Us",
    "contact.email.description":
      "Send us detailed questions and get comprehensive responses.",
    "contact.email.button": "Send Email",
    "contact.responseTime": "Average Response Time",
    "contact.support247": "WhatsApp Support",
    "contact.expertGuidance": "Expert Guidance",

    // Featured Products
    "featured.title": "Featured Products",
    "featured.description":
      "Discover our top-performing seed varieties trusted by thousands of farmers.",
    "featured.viewAll": "View All Products",

    // CTA
    "cta.title": "Ready to Maximize Your Harvest?",
    "cta.description":
      "Get expert advice and find the perfect seed varieties for your operation. FOUNDER SEEDS is here to help you succeed.",
    "cta.consultation": "Get Expert Consultation",
    "cta.findDealer": "Find Your Local Dealer",

    // Products
    "products.title": "Premium Seed Products",
    "products.description":
      "Discover our comprehensive selection of high-quality seeds engineered for superior performance and maximum yields across diverse growing conditions.",
    "products.search": "Search seeds by name, variety, or description...",
    "products.allCategories": "All Categories",
    "products.allRegions": "All Regions",
    "products.inStockOnly": "In Stock Only",
    "products.showing": "Showing",
    "products.of": "of",
    "products.products": "products",
    "products.viewDetails": "View Details",
    "products.outOfStock": "Out of Stock",
    "products.noResults": "No products found",
    "products.noResultsDesc":
      "Try adjusting your search criteria or browse all products.",
    "products.clearFilters": "Clear Filters",

    // Product Categories
    "category.corn": "Castor",
    "category.soybean": "Soybean",
    "category.wheat": "Wheat",
    "category.cotton": "Groundnut",
    "category.vegetables": "Pigeon Pea",
    "category.specialty": "Spices & Others",

    // Common
    "common.featured": "Featured",
    "common.backTo": "Back to",
    "common.learnMore": "Learn More",
    "common.contactUs": "Contact Us",
    "common.getStarted": "Get Started",
    "common.readMore": "Read More",
    "common.viewMore": "View More",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.products": "Products",
    "footer.contactUs": "Contact Us",
    "footer.copyright": "© 2024 FOUNDER SEEDS. All rights reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
  },
  hi: {
    // Header
    "nav.home": "होम",
    "nav.products": "उत्पाद",
    "nav.about": "हमारे बारे में",
    "nav.dealers": "डीलर",
    "nav.resources": "संसाधन",
    "nav.news": "समाचार",
    "nav.contact": "संपर्क",
    "header.tagline": "सफलता के लिए प्रीमियम बीज",
    "header.whatsapp": "व्हाट्सऐप",
    "header.getQuote": "कोटेशन पाएं",

    // Homepage
    "hero.title": "प्रीमियम बीज",
    "hero.subtitle": "अधिकतम फसल के लिए",
    "hero.description":
      "असाधारण उत्पादन, रोग प्रतिरोध और जलवायु अनुकूलन के लिए इंजीनियर किए गए हमारे श्रेष्ठ बीज किस्मों की खोज करें।",
    "hero.shopSeeds": "बीज खरीदें",
    "hero.findDealer": "डीलर खोजें",

    // Stats
    "stats.experience": "वर्षों का अनुभव",
    "stats.farmers": "खुश किसान",
    "stats.varieties": "बीज किस्में",
    "stats.states": "राज्यों में सेवा",

    // Features
    "features.title": "एग्रीसीड प्रो क्यों चुनें?",
    "features.description":
      "हम किसानों को उच्चतम गुणवत्ता के बीज और असाधारण परिणाम प्राप्त करने के लिए आवश्यक सहायता प्रदान करने के लिए प्रतिबद्ध हैं।",
    "features.excellence.title": "उत्कृष्टता",
    "features.excellence.description":
      "हम अपने द्वारा उत्पादित हर बीज और प्रदान की जाने वाली हर सेवा में उत्कृष्टता के लिए प्रयास करते हैं।",
    "features.integrity.title": "ईमानदारी",
    "features.integrity.description":
      "हमारे कृषि भागीदारों के साथ विश्वास और पारदर्शिता पर आधारित ईमानदार रिश्ते।",
    "features.innovation.title": "नवाचार",
    "features.innovation.description":
      "विकसित होती कृषि आवश्यकताओं को पूरा करने के लिए कृषि प्रौद्योगिकी को निरंतर आगे बढ़ाना।",

    // Contact Section
    "contact.title": "मदद चाहिए? अभी हमसे संपर्क करें",
    "contact.description":
      "हमारे कृषि विशेषज्ञों से तुरंत सहायता प्राप्त करें। हम आपके खेत के लिए सही बीज चुनने में आपकी मदद करने के लिए यहाँ हैं।",
    "contact.whatsapp.title": "व्हाट्सऐप चैट",
    "contact.whatsapp.description":
      "त्वरित उत्तर और व्यक्तिगत सिफारिशों के लिए हमसे तुरंत चैट करें।",
    "contact.whatsapp.button": "अभी चैट करें",
    "contact.phone.title": "हमें कॉल करें",
    "contact.phone.description":
      "विशेषज्ञ मार्गदर्शन के लिए हमारे बीज विशेषज्ञों से सीधे बात करें।",
    "contact.email.title": "हमें ईमेल करें",
    "contact.email.description":
      "हमें विस्तृत प्रश्न भेजें और व्यापक उत्तर प्राप्त करें।",
    "contact.email.button": "ईमेल भेजें",
    "contact.responseTime": "औसत प्रतिक्रिया समय",
    "contact.support247": "व्हाट्सऐप सहायता",
    "contact.expertGuidance": "विशेषज्ञ मार्गदर्शन",

    // Featured Products
    "featured.title": "विशेष उत्पाद",
    "featured.description":
      "हजारों किसानों द्वारा भरोसा की जाने वाली हमारी शीर्ष प्रदर्शन करने वाली बीज किस्मों की खोज करें।",
    "featured.viewAll": "सभी उत्पाद देखें",

    // CTA
    "cta.title": "अपनी फसल को अधिकतम करने के लिए तैयार हैं?",
    "cta.description":
      "विशेषज्ञ सलाह प्राप्त करें और अपने संचालन के लिए सही बीज किस्में खोजें। हमारी टीम आपकी सफलता में मदद करने के लिए यहाँ है।",
    "cta.consultation": "विशेषज्ञ परामर्श प्राप्त करें",
    "cta.findDealer": "अपना स्थानीय डीलर खोजें",

    // Products
    "products.title": "प्रीमियम बीज उत्पाद",
    "products.description":
      "विविध बढ़ती परिस्थितियों में बेहतर प्रदर्शन और अधिकतम उत्पादन के लिए इंजीनियर किए गए उच्च गुणवत्ता वाले बीजों के हमारे व्यापक चयन की खोज करें।",
    "products.search": "नाम, किस्म या विवरण द्वारा बीज खोजें...",
    "products.allCategories": "सभी श्रेणियां",
    "products.allRegions": "सभी क्षेत्र",
    "products.inStockOnly": "केवल स्टॉक में",
    "products.showing": "दिखा रहे हैं",
    "products.of": "में से",
    "products.products": "उत्पाद",
    "products.viewDetails": "विवरण देखें",
    "products.outOfStock": "स्टॉक में नहीं",
    "products.noResults": "कोई उत्पाद नहीं मिला",
    "products.noResultsDesc":
      "अपने खोज मानदंड को समायोजित करने का प्रयास करें या सभी उत्पादों को ब्राउज़ करें।",
    "products.clearFilters": "फिल्टर साफ़ करें",

    // Product Categories
    "category.corn": "मक्का",
    "category.soybean": "सोयाबीन",
    "category.wheat": "गेहूं",
    "category.cotton": "कपास",
    "category.vegetables": "सब्जियां",
    "category.specialty": "विशेष",

    // Common
    "common.featured": "विशेष",
    "common.backTo": "वापस जाएं",
    "common.learnMore": "और जानें",
    "common.contactUs": "हमसे संपर्क करें",
    "common.getStarted": "शुरू करें",
    "common.readMore": "और पढ़ें",
    "common.viewMore": "और देखें",
    "common.loading": "लोड हो रहा है...",
    "common.error": "त्रुटि",
    "common.success": "सफलता",

    // Footer
    "footer.quickLinks": "त्वरित लिंक",
    "footer.products": "उत्पाद",
    "footer.contactUs": "हमसे संपर्क करें",
    "footer.copyright": "© 2024 एग्रीसीड प्रो। सभी अधिकार सुरक्षित।",
    "footer.privacyPolicy": "गोपनीयता नीति",
    "footer.termsOfService": "सेवा की शर्तें",
  },
  gu: {
    // Header
    "nav.home": "હોમ",
    "nav.products": "ઉત્પાદનો",
    "nav.about": "અમારા વિશે",
    "nav.dealers": "ડીલર",
    "nav.resources": "સંસાધનો",
    "nav.news": "સમાચાર",
    "nav.contact": "સંપર્ક",
    "header.tagline": "સફળતા માટે પ્રીમિયમ બીજ",
    "header.whatsapp": "વ્હોટ્સએપ",
    "header.getQuote": "કોટેશન મેળવો",

    // Homepage
    "hero.title": "પ્રીમિયમ બીજ",
    "hero.subtitle": "મહત્તમ પાક માટે",
    "hero.description":
      "અસાધારણ ઉત્પાદન, રોગ પ્રતિકાર અને આબોહવા અનુકૂલન માટે એન્જિનિયર કરેલી અમારી શ્રેષ્ઠ બીજ જાતોની શોધ કરો.",
    "hero.shopSeeds": "બીજ ખરીદો",
    "hero.findDealer": "ડીલર શોધો",

    // Stats
    "stats.experience": "વર્ષોનો અનુભવ",
    "stats.farmers": "ખુશ ખેડૂતો",
    "stats.varieties": "બીજ જાતો",
    "stats.states": "રાજ્યોમાં સેવા",

    // Features
    "features.title": "એગ્રીસીડ પ્રો કેમ પસંદ કરો?",
    "features.description":
      "અમે ખેડૂતોને ઉચ્ચતમ ગુણવત્તાના બીજ અને અસાધારણ પરિણામો પ્રાપ્ત કરવા માટે જરૂરી સહાય પ્રદાન કરવા માટે પ્રતિબદ્ધ છીએ.",
    "features.excellence.title": "ઉત્કૃષ્ટતા",
    "features.excellence.description":
      "અમે અમારા દ્વારા ઉત્પાદિત દરેક બીજ અને પ્રદાન કરવામાં આવતી દરેક સેવામાં ઉત્કૃષ્ટતા માટે પ્રયત્ન કરીએ છીએ.",
    "features.integrity.title": "પ્રામાણિકતા",
    "features.integrity.description":
      "અમારા કૃષિ ભાગીદારો સાથે વિશ્વાસ અને પારદર્શિતા પર આધારિત પ્રામાણિક સંબંધો.",
    "features.innovation.title": "નવીનતા",
    "features.innovation.description":
      "વિકસિત થતી કૃષિ જરૂરિયાતોને પૂરી કરવા માટે કૃષિ તકનીકને સતત આગળ વધારવી.",

    // Contact Section
    "contact.title": "મદદ જોઈએ? અત્યારે અમારો સંપર્ક કરો",
    "contact.description":
      "અમારા કૃષિ નિષ્ણાતો પાસેથી તાત્કાલિક સહાય મેળવો. અમે તમારા ખેતર માટે યોગ્ય બીજ પસંદ કરવામાં તમારી મદદ કરવા માટે અહીં છીએ.",
    "contact.whatsapp.title": "વ્હોટ્સએપ ચેટ",
    "contact.whatsapp.description":
      "ઝડપી જવાબો અને વ્યક્તિગત ભલામણો માટે અમારી સાથે તાત્કાલિક ચેટ કરો.",
    "contact.whatsapp.button": "અત્યારે ચેટ કરો",
    "contact.phone.title": "અમને કૉલ કરો",
    "contact.phone.description":
      "નિષ્ણાત માર્ગદર્શન માટે અમારા બીજ નિષ્ણાતો સાથે સીધી વાત કરો.",
    "contact.email.title": "અમને ઈમેઈલ કરો",
    "contact.email.description":
      "અમને વિગતવાર પ્રશ્નો મોકલો અને વ્યાપક જવાબો મેળવો.",
    "contact.email.button": "ઈમેઈલ મોકલો",
    "contact.responseTime": "સરેરાશ પ્રતિસાદ સમય",
    "contact.support247": "વ્હોટ્સએપ સહાય",
    "contact.expertGuidance": "નિષ્ણાત માર્ગદર્શન",

    // Featured Products
    "featured.title": "વિશેષ ઉત્પાદનો",
    "featured.description":
      "હજારો ખેડૂતો દ્વારા વિશ્વાસપાત્ર અમારી ટોચની પ્રદર્શન કરતી બીજ જાતોની શોધ કરો.",
    "featured.viewAll": "બધા ઉત્પાદનો જુઓ",

    // CTA
    "cta.title": "તમારી પાકને મહત્તમ કરવા માટે તૈયાર છો?",
    "cta.description":
      "નિષ્ણાત સલાહ મેળવો અને તમારા સંચાલન માટે યોગ્ય બીજ જાતો શોધો. અમારી ટીમ તમારી સફળતામાં મદદ કરવા માટે અહીં છે.",
    "cta.consultation": "નિષ્ણાત સલાહ મેળવો",
    "cta.findDealer": "તમારા સ્થાનિક ડીલરને શોધો",

    // Products
    "products.title": "પ્રીમિયમ બીજ ઉત્પાદનો",
    "products.description":
      "વિવિધ વૃદ્ધિ પરિસ્થિતિઓમાં શ્રેષ્ઠ પ્રદર્શન અને મહત્તમ ઉત્પાદન માટે એન્જિનિયર કરેલા ઉચ્ચ ગુણવત્તાવાળા બીજોના અમારા વ્યાપક પસંદગીની શોધ કરો.",
    "products.search": "નામ, જાત અથવા વર્ણન દ્વારા બીજ શોધો...",
    "products.allCategories": "બધી શ્રેણીઓ",
    "products.allRegions": "બધા વિસ્તારો",
    "products.inStockOnly": "ફક્ત સ્ટોકમાં",
    "products.showing": "બતાવી રહ્યા છીએ",
    "products.of": "માંથી",
    "products.products": "ઉત્પાદનો",
    "products.viewDetails": "વિગતો જુઓ",
    "products.outOfStock": "સ્ટોકમાં નથી",
    "products.noResults": "કોઈ ઉત્પાદન મળ્યું નથી",
    "products.noResultsDesc":
      "તમારા શોધ માપદંડોને સમાયોજિત કરવાનો પ્રયાસ કરો અથવા બધા ઉત્પાદનો બ્રાઉઝ કરો.",
    "products.clearFilters": "ફિલ્ટર સાફ કરો",

    // Product Categories
    "category.corn": "મકાઈ",
    "category.soybean": "સોયાબીન",
    "category.wheat": "ઘઉં",
    "category.cotton": "કપાસ",
    "category.vegetables": "શાકભાજી",
    "category.specialty": "વિશેષ",

    // Common
    "common.featured": "વિશેષ",
    "common.backTo": "પાછા જાઓ",
    "common.learnMore": "વધુ જાણો",
    "common.contactUs": "અમારો સંપર્ક કરો",
    "common.getStarted": "શરૂ કરો",
    "common.readMore": "વધુ વાંચો",
    "common.viewMore": "વધુ જુઓ",
    "common.loading": "લોડ થઈ રહ્યું છે...",
    "common.error": "ભૂલ",
    "common.success": "સફળતા",

    // Footer
    "footer.quickLinks": "ઝડપી લિંક્સ",
    "footer.products": "ઉત્પાદનો",
    "footer.contactUs": "અમારો સંપર્ક કરો",
    "footer.copyright": "© 2024 એગ્રીસીડ પ્રો. બધા અધિકારો સુરક્ષિત.",
    "footer.privacyPolicy": "ગોપનીયતા નીતિ",
    "footer.termsOfService": "સેવાની શરતો",
  },
};
