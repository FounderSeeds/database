import React, { useState } from 'react';
import { Download, FileText, Video, Search, Filter } from 'lucide-react';
import { resources } from '../data/resources';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'planting-guide', 'pest-management', 'harvest-tips', 'storage'];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (fileType: string) => {
    switch (fileType) {
      case 'video':
        return Video;
      default:
        return FileText;
    }
  };

  const getCategoryName = (category: string) => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Agricultural Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive guides, best practices, and expert insights to maximize 
            your agricultural success with AgriSeed Pro products.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : getCategoryName(category)}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredResources.length} of {resources.length} resources
          </div>
        </div>

        {/* Featured Resources */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '2025 Planting Calendar',
                description: 'Optimal planting dates for all major crops',
                type: 'New Release'
              },
              {
                title: 'Yield Optimization Guide',
                description: 'Maximize your harvest potential',
                type: 'Most Popular'
              },
              {
                title: 'Climate Adaptation Strategies',
                description: 'Adapt to changing weather patterns',
                type: 'Expert Recommended'
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                  {resource.type}
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-green-100 mb-4">{resource.description}</p>
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Download Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const IconComponent = getIcon(resource.fileType);
            return (
              <div key={resource.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                    {resource.fileType.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>

                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    {getCategoryName(resource.category)}
                  </span>
                </div>

                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resource
                </button>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all resources.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest agricultural insights, 
            planting guides, and exclusive resources directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}