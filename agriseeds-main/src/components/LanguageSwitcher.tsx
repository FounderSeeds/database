import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as Language, name: 'English', nativeName: 'English' },
    { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'gu' as Language, name: 'Gujarati', nativeName: 'ગુજરાતી' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage?.nativeName}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-200 ${
                language === lang.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{lang.nativeName}</span>
                <span className="text-sm text-gray-500">{lang.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}