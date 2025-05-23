import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Grid, List, X } from 'lucide-react';
import PropertyCard from '../components/properties/PropertyCard';
import properties from '../data/properties';

const PropertiesPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [gridView, setGridView] = useState(true);
  
  // Filter states
  const [filters, setFilters] = useState({
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  });

  // Debugging: Log initial properties to check data
  useEffect(() => {
    console.log('Propiedades iniciales:', properties);
    console.log('Número de propiedades:', properties.length);
  }, []);

  useEffect(() => {
    // Update document title
    document.title = 'Propiedades | Inmuebles Serfyneg';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  // Apply filters
  useEffect(() => {
    let result = properties;
    
    // Search term filter
    if (searchTerm) {
      result = result.filter(property => {
        const title = property.title?.toLowerCase() || '';
        const address = property.address?.toLowerCase() || '';
        const city = property.city?.toLowerCase() || '';
        const state = property.state?.toLowerCase() || '';
        return (
          title.includes(searchTerm.toLowerCase()) ||
          address.includes(searchTerm.toLowerCase()) ||
          city.includes(searchTerm.toLowerCase()) ||
          state.includes(searchTerm.toLowerCase())
        );
      });
    }
    
    // Property type filter
    if (filters.propertyType) {
      result = result.filter(property => 
        property.propertyType?.toLowerCase() === filters.propertyType.toLowerCase()
      );
    }
    
    // Price range filter
    if (filters.minPrice) {
      result = result.filter(property => 
        property.price >= Number(filters.minPrice)
      );
    }
    
    if (filters.maxPrice) {
      result = result.filter(property => 
        property.price <= Number(filters.maxPrice)
      );
    }
    
    // Bedrooms filter
    if (filters.bedrooms) {
      result = result.filter(property => 
        property.bedrooms >= Number(filters.bedrooms)
      );
    }
    
    // Bathrooms filter
    if (filters.bathrooms) {
      result = result.filter(property => 
        property.bathrooms >= Number(filters.bathrooms)
      );
    }
    
    // Debugging: Log filtered results
    console.log('Propiedades filtradas:', result);
    console.log('Filtros aplicados:', { searchTerm, ...filters });

    setFilteredProperties(result);
  }, [searchTerm, filters]);
  
  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setFilters({
      propertyType: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: ''
    });
  };
  
  return (
    <div className="pt-20 bg-gray-50">
      {/* Page Header */}
      <div className="bg-navy-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Encuentra la Propiedad de Tus Sueños
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Explora nuestra amplia colección de propiedades de lujo. Usa los filtros a continuación para encontrar la opción perfecta para tu estilo de vida y preferencias.
          </p>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 -mt-16 relative z-10 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por ubicación, nombre de propiedad o dirección"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-400"
              />
            </div>
            
            {/* Filter Toggle Button */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center text-navy-700 hover:text-navy-900"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              <span>{filtersOpen ? 'Ocultar Filtros' : 'Mostrar Filtros'}</span>
            </button>
            
            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-md p-1">
              <button
                onClick={() => setGridView(true)}
                className={`p-2 rounded-md ${
                  gridView ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <Grid className="w-5 h-5 text-navy-700" />
              </button>
              <button
                onClick={() => setGridView(false)}
                className={`p-2 rounded-md ${
                  !gridView ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5 text-navy-700" />
              </button>
            </div>
          </div>
          
          {/* Filters */}
          {filtersOpen && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 border-t border-gray-200">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Propiedad
                </label>
                <select
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-400"
                >
                  <option value="">Cualquier Tipo</option>
                  <option value="Villa">Villa</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Finca">Finca</option>
                  <option value="Condominio">Condominio</option>
                  <option value="Casa Adosada">Casa Adosada</option>
                  <option value="Chalet">Chalet</option>
                </select>
              </div>
              
              {/* Min Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Precio Mínimo
                </label>
                <select
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-400"
                >
                  <option value="">Sin Mínimo</option>
                  <option value="1000000">$1.000.000</option>
                  <option value="2000000">$2.000.000</option>
                  <option value="3000000">$3.000.000</option>
                  <option value="4000000">$4.000.000</option>
                  <option value="5000000">$5.000.000</option>
                </select>
              </div>
              
              {/* Max Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Precio Máximo
                </label>
                <select
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-400"
                >
                  <option value="">Sin Máximo</option>
                  <option value="2000000">$2.000.000</option>
                  <option value="3000000">$3.000.000</option>
                  <option value="4000000">$4.000.000</option>
                  <option value="5000000">$5.000.000</option>
                  <option value="10000000">$10.000.000</option>
                </select>
              </div>
              
              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Habitaciones
                </label>
                <select
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-400"
                >
                  <option value="">Cualquiera</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              
              {/* Bathrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Baños
                </label>
                <select
                  name="bathrooms"
                  value={filters.bathrooms}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-400"
                >
                  <option value="">Cualquiera</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              
              {/* Reset Button */}
              <div className="md:col-span-5 flex justify-end mt-4">
                <button
                  onClick={resetFilters}
                  className="flex items-center text-navy-600 hover:text-navy-800"
                >
                  <X className="w-4 h-4 mr-1" />
                  Restablecer Filtros
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Results Section */}
        <div className="mb-4">
          <p className="text-gray-600">
            Mostrando {filteredProperties.length} propiedades
          </p>
        </div>
        
        {/* Properties Grid */}
        {gridView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="property-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {property.address}, {property.city}, {property.state}
                  </p>
                  <p className="text-2xl font-bold text-navy-800 mb-4">
                    ${property.price.toLocaleString('es-CO')}
                  </p>
                  
                  <div className="flex space-x-4 mb-4">
                    <div className="flex items-center text-gray-700">
                      <span className="font-medium">{property.bedrooms}</span>
                      <span className="ml-1">Habitaciones</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="font-medium">{property.bathrooms}</span>
                      <span className="ml-1">Baños</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="font-medium">{property.squareFeet.toLocaleString('es-CO')}</span>
                      <span className="ml-1">m²</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={property.agent.image}
                        alt={property.agent.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-600">{property.agent.name}</span>
                    </div>
                    <a
                      href={`/property/${property.id}`}
                      className="bg-navy-600 hover:bg-navy-700 text-white px-4 py-2 rounded-md"
                    >
                      Ver Detalles
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">
              No se encontraron propiedades que coincidan con los filtros actuales.
            </p>
            <button
              onClick={resetFilters}
              className="bg-navy-600 hover:bg-navy-700 text-white px-4 py-2 rounded-md"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;