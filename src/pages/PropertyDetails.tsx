import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Calendar, ArrowLeft, Check } from 'lucide-react';
import properties from '../data/properties';
import PropertyCard from '../components/properties/PropertyCard';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  
  // Find the property with matching id
  const property = properties.find(p => p.id === id);
  
  // Find similar properties (same city or property type)
  const similarProperties = properties
    .filter(p => p.id !== id && (p.city === property?.city || p.propertyType === property?.propertyType))
    .slice(0, 3);
  
  useEffect(() => {
    // Update document title
    if (property) {
      document.title = `${property.title} | Inmuebles Serfyneg`;
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Reset active image when property changes
    setActiveImage(0);
  }, [property]);
  
  // If property not found
  if (!property) {
    return (
      <div className="pt-20 py-16 text-center">
        <h2 className="text-2xl font-semibold text-navy-900 mb-4">Propiedad No Encontrada</h2>
        <p className="text-gray-600 mb-6">La propiedad que buscas no existe.</p>
        <Link to="/properties" className="btn btn-primary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Propiedades
        </Link>
      </div>
    );
  }
  
  // Format price with commas
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-CO')}`; // Formato para moneda en español (Colombia)
  };
  
  return (
    <div className="pt-20 bg-gray-50 pb-16">
      {/* Property Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/properties" className="flex items-center text-navy-600 hover:text-navy-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Propiedades
            </Link>
            <div className="flex space-x-4">
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Property Header */}
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.address}, {property.city}, {property.state} {property.zipCode}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {property.isFeatured && (
                  <span className="bg-gold-100 text-gold-700 text-xs font-semibold px-2 py-1 rounded">
                    DESTACADO
                  </span>
                )}
                {property.isNewListing && (
                  <span className="bg-navy-100 text-navy-700 text-xs font-semibold px-2 py-1 rounded">
                    NUEVO LISTADO
                  </span>
                )}
                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  {property.propertyType === 'Apartment' ? 'Apartamento' :
                   property.propertyType === 'House' ? 'Casa' :
                   property.propertyType === 'Condo' ? 'Condominio' :
                   property.propertyType} {/* Traduce según los tipos de propiedad */}
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-navy-900">
                {formatPrice(property.price)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="relative h-[600px]">
                <img
                  src={property.images[activeImage]}
                  alt={`${property.title} - Imagen ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-40 h-30 cursor-pointer ${
                      index === activeImage ? 'ring-2 ring-navy-600' : 'opacity-70'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">Detalles de la Propiedad</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="w-6 h-6 text-navy-600 mb-2" />
                  <span className="font-bold text-navy-900">{property.bedrooms}</span>
                  <span className="text-sm text-gray-600">Habitaciones</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Bath className="w-6 h-6 text-navy-600 mb-2" />
                  <span className="font-bold text-navy-900">{property.bathrooms}</span>
                  <span className="text-sm text-gray-600">Baños</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Square className="w-6 h-6 text-navy-600 mb-2" />
                  <span className="font-bold text-navy-900">{property.squareFeet.toLocaleString('es-CO')}</span>
                  <span className="text-sm text-gray-600">Metros Cuadrados</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-navy-600 mb-2" />
                  <span className="font-bold text-navy-900">{property.yearBuilt}</span>
                  <span className="text-sm text-gray-600">Año de Construcción</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                {property.description} {/* Asegúrate de traducir la descripción en el archivo properties si es necesario */}
              </p>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Características de la Propiedad</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {(showAllFeatures ? property.features : property.features.slice(0, 6)).map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-navy-600 mr-2" />
                      <span>{feature}</span> {/* Traduce las características en el archivo properties si es necesario */}
                    </div>
                  ))}
                </div>
                {property.features.length > 6 && (
                  <button
                    onClick={() => setShowAllFeatures(!showAllFeatures)}
                    className="mt-4 text-navy-600 hover:text-navy-800 font-medium"
                  >
                    {showAllFeatures ? 'Mostrar Menos' : 'Mostrar Todas las Características'}
                  </button>
                )}
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">Ubicación</h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg">
                  <div className="flex items-center justify-center h-full">
                    <MapPin className="w-8 h-8 text-navy-600 mr-2" />
                    <span className="text-gray-600">Vista de Mapa</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-navy-600 mt-0.5 mr-2" />
                <span className="text-gray-700">
                  {property.address}, {property.city}, {property.state} {property.zipCode}
                </span>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          
              
        </div>
        
        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-navy-900 mb-6">Propiedades Similares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;