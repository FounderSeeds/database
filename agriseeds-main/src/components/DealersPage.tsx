import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Search } from 'lucide-react';
import { dealers } from '../data/dealers';

export default function DealersPage() {
  const [selectedState, setSelectedState] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const states = ['all', ...Array.from(new Set(dealers.map(dealer => dealer.state)))];

  const filteredDealers = dealers.filter(dealer => {
    const matchesState = selectedState === 'all' || dealer.state === selectedState;
    const matchesSearch = dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealer.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealer.state.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesState && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find Your Local Dealer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our extensive dealer network provides expert support and premium seeds 
            across 30+ states. Find your local AgriSeed Pro partner today.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by dealer name, city, or state..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {states.map(state => (
                <option key={state} value={state}>
                  {state === 'all' ? 'All States' : state}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredDealers.length} of {dealers.length} dealers
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Dealer Locations</h2>
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">View all dealer locations on an interactive map</p>
            </div>
          </div>
        </div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDealers.map((dealer) => (
            <div key={dealer.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{dealer.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                  <div className="text-gray-700">
                    <p>{dealer.address}</p>
                    <p>{dealer.city}, {dealer.state} {dealer.zipCode}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <a href={`tel:${dealer.phone}`} className="text-gray-700 hover:text-green-600 transition-colors">
                    {dealer.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-green-600" />
                  <a href={`mailto:${dealer.email}`} className="text-gray-700 hover:text-green-600 transition-colors">
                    {dealer.email}
                  </a>
                </div>

                {dealer.website && (
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    <a 
                      href={`https://${dealer.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-green-600 transition-colors"
                    >
                      {dealer.website}
                    </a>
                  </div>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Get Directions
                </button>
                <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200">
                  Contact Dealer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDealers.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No dealers found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or contact us to find a dealer near you.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedState('all');
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Become a Dealer CTA */}
        <div className="mt-16 bg-green-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Becoming a Dealer?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join our network of successful dealers and bring AgriSeed Pro's premium 
            products to farmers in your area.
          </p>
          <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300">
            Learn More About Partnership
          </button>
        </div>
      </div>
    </div>
  );
}