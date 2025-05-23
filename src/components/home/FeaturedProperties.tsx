import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../properties/PropertyCard';
import properties from '../../data/properties';

const FeaturedProperties: React.FC = () => {
  // Filter featured properties
  const featuredProperties = properties.filter(property => property.isFeatured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="section-title">Propiedades Destacadas</h2>
            <p className="text-gray-600 max-w-2xl">
              Descubre nuestra selección cuidadosamente elegida de propiedades excepcionales, cada una con características de lujo únicas y ubicaciones privilegiadas.
            </p>
          </div>
          <Link to="/properties" className="hidden md:flex items-center text-navy-600 hover:text-navy-800 font-medium">
            Ver Todas las Propiedades
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/properties"
            className="inline-block px-6 py-3 bg-navy-600 text-white rounded-md hover:bg-navy-700 transition-colors"
          >
            Ver Todas las Propiedades
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;