import React, { useState, useEffect } from 'react';
import { Search, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import agents from '../data/agents';

const AgentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAgents, setFilteredAgents] = useState(agents);
  
  useEffect(() => {
    // Update document title
    document.title = 'Our Agents | LuxeEstate';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  // Filter agents based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredAgents(agents);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredAgents(
        agents.filter(
          agent =>
            agent.name.toLowerCase().includes(term) ||
            agent.title.toLowerCase().includes(term) ||
            agent.specialties.some(specialty => specialty.toLowerCase().includes(term))
        )
      );
    }
  }, [searchTerm]);
  
  return (
    <div className="pt-20 bg-gray-50">
      {/* Page Header */}
      <div className="bg-navy-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Expert Agents
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Our team of experienced real estate professionals is dedicated to helping you find the perfect property and making your real estate journey seamless.
          </p>
        </div>
      </div>
      
      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 -mt-16 relative z-10 mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search agents by name, title, or specialty"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-400"
            />
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredAgents.length} agents
          </p>
        </div>
        
        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">{agent.name}</h3>
                <p className="text-gold-600 font-medium mb-3">{agent.title}</p>
                
                <div className="flex items-center text-gray-600 mb-1">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{agent.phone}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{agent.email}</span>
                </div>
                
                <div className="flex space-x-3 mb-4">
                  {agent.socialMedia.facebook && (
                    <a
                      href={agent.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-navy-600 hover:bg-navy-600 hover:text-white transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  
                  {agent.socialMedia.instagram && (
                    <a
                      href={agent.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-navy-600 hover:bg-navy-600 hover:text-white transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  
                  {agent.socialMedia.twitter && (
                    <a
                      href={agent.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-navy-600 hover:bg-navy-600 hover:text-white transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  
                  {agent.socialMedia.linkedin && (
                    <a
                      href={agent.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-navy-600 hover:bg-navy-600 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-navy-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-navy-50 text-navy-700 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4 text-sm mb-4">
                  <div className="bg-navy-50 px-3 py-1 rounded-full text-navy-700">
                    {agent.listings} Listings
                  </div>
                  <div className="bg-navy-50 px-3 py-1 rounded-full text-navy-700">
                    {agent.experience} Years Exp.
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {agent.bio}
                  </p>
                  <Link
                    to={`/agents/${agent.id}`}
                    className="block w-full text-center py-2 rounded-md bg-navy-100 text-navy-700 hover:bg-navy-200 transition-colors font-medium"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results */}
        {filteredAgents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">
              No agents match your search criteria.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-navy-600 hover:bg-navy-700 text-white px-4 py-2 rounded-md"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentsPage;