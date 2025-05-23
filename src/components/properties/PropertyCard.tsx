import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Property } from '../../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Format price with commas
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-CO')}`; // Formato para moneda en español (Colombia)
  };

  // Fallback title if property.title is undefined
  const displayTitle = property.title || 'Propiedad sin título';

  return (
    <div className="property-card bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[0] || '/path/to/fallback-image.jpg'} // Fallback image
          alt={displayTitle}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        
        {/* Property Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {property.isNewListing && (
            <span className="bg-navy-600 text-white text-xs font-semibold px-2 py-1 rounded">
              NUEVO
            </span>
          )}
          {property.isFeatured && (
            <span className="bg-gold-500 text-navy-900 text-xs font-semibold px-2 py-1 rounded">
              DESTACADO
            </span>
          )}
        </div>
        
        {/* Favorite Button */}
        
        
        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md">
          <span className="text-navy-900 font-bold">{formatPrice(property.price)}</span>
        </div>
      </div>
      
      {/* Property Details */}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-navy-900 hover:text-gold-600 transition-colors">
              <Link to={`/property/${property.id}`}>{displayTitle}</Link>
            </h3>
            <div className="flex items-center mt-1 text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.city || 'Ciudad no especificada'}, {property.state || 'Estado no especificado'}</span>
            </div>
          </div>
          
          {/* Agent Thumbnail */}
          
        </div>
        
        {/* Property Features */}
        <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-700">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bedrooms || 0} Habitaciones</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bathrooms || 0} Baños</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Square className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.squareFeet ? property.squareFeet.toLocaleString('es-CO') : '0'} m²</span>
          </div>
        </div>
        
        {/* View Details Button */}
        <Link
          to={`/property/${property.id}`}
          className="block w-full mt-4 text-center py-2 rounded-md bg-navy-100 text-navy-700 hover:bg-navy-200 transition-colors font-medium"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;