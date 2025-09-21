import React from 'react';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { NewsArticle } from '../types';

interface ArticleDetailProps {
  article: NewsArticle;
  onBack: () => void;
}

export default function ArticleDetail({ article, onBack }: ArticleDetailProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      research: 'bg-blue-100 text-blue-800',
      products: 'bg-green-100 text-green-800',
      company: 'bg-purple-100 text-purple-800',
      industry: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to News</span>
        </button>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                {getCategoryName(article.category)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-between text-gray-600 mb-4">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                {article.content}
              </p>
              
              {/* Additional content sections would go here in a real implementation */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Key Takeaways</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Advanced seed genetics deliver superior performance</li>
                  <li>• Rigorous testing ensures consistent results</li>
                  <li>• Farmer support programs maximize success</li>
                  <li>• Sustainable practices protect the environment</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Our commitment to innovation and excellence continues to drive breakthrough developments 
                in agricultural technology. We work closely with farmers, researchers, and industry 
                partners to develop solutions that meet the evolving challenges of modern agriculture.
              </p>
            </div>

            {/* Related Actions */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learn More</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                  Browse Products
                </button>
                <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200">
                  Contact Expert
                </button>
                <button className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                  View Resources
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Sustainable Farming Practices for 2025",
                summary: "Explore eco-friendly approaches to maximize yields while protecting the environment.",
                category: "industry",
                image: "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "New Soybean Varieties Launch",
                summary: "Introducing our latest high-protein soybean varieties for enhanced profitability.",
                category: "products",
                image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((relatedArticle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={relatedArticle.image}
                  alt={relatedArticle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold mb-3 inline-block ${getCategoryColor(relatedArticle.category)}`}>
                    {getCategoryName(relatedArticle.category)}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedArticle.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedArticle.summary}</p>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}