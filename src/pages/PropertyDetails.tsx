import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, ArrowLeft, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import properties from '../data/properties';
import PropertyCard from '../components/properties/PropertyCard';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const property = properties.find(p => p.id === id);
  const similarProperties = properties
    .filter(p => p.id !== id && (p.city === property?.city || p.propertyType === property?.propertyType))
    .slice(0, 3);

  useEffect(() => {
    if (property) {
      document.title = `${property.title} | Inmuebles Serfyneg`;
    }
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [property]);

  useEffect(() => {
    if (!property || !isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveImage(prev => (prev === property.images.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [property, isAutoPlaying]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-CO')}`;
  };

  const handlePrevImage = () => {
    setIsAutoPlaying(false);
    setActiveImage(prev => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setIsAutoPlaying(false);
    setActiveImage(prev => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveImage(index);
  };

  // Animaciones con Framer Motion
  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-20 bg-gray-50 pb-16">
      {/* Property Navigation */}
      <div className="bg-navy-900 text-white">
        <div className="container mx-auto px-4 py-3">
          <Link to="/properties" className="flex items-center text-gold-200 hover:text-gold-400 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a Propiedades
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative h-[70vh] mb-4 bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            className="absolute inset-0 w-full h-full"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <img
              src={property.images[activeImage]}
              alt={`${property.title} - Imagen ${activeImage + 1}`}
              className="w-full h-full object-cover rounded-b-lg"
            />
            {/* Overlay mínimo para controles */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button
          onClick={handlePrevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition-all focus:outline-none"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition-all focus:outline-none"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {property.images.map((image, index) => (
            <div
              key={index}
              className={`w-16 h-10 rounded-md overflow-hidden cursor-pointer transition-all ${
                index === activeImage ? 'ring-2 ring-gold-400' : 'opacity-60 hover:opacity-90'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={image} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Property Header */}
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <div>
              <motion.h1
                className="text-3xl md:text-4xl font-playfair font-bold text-navy-900 mb-2"
                variants={itemVariants}
              >
                {property.title}
              </motion.h1>
              <motion.div
                className="flex items-center text-gray-600 mb-2"
                variants={itemVariants}
              >
                <MapPin className="w-5 h-5 mr-2 text-navy-600" />
                <span>{property.address}, {property.city}, {property.state} {property.zipCode}</span>
              </motion.div>
              <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
                {property.isFeatured && (
                  <span className="bg-gold-100 text-gold-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    DESTACADO
                  </span>
                )}
                {property.isNewListing && (
                  <span className="bg-navy-100 text-navy-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    NUEVO LISTADO
                  </span>
                )}
                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {property.propertyType}
                </span>
              </motion.div>
            </div>
            <motion.div className="mt-4 md:mt-0" variants={itemVariants}>
              <div className="text-3xl font-bold text-navy-900">
                {formatPrice(property.price)}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Property Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-navy-900 mb-6">Detalles de la Propiedad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center p-4 bg-gradient-to-br from-navy-50 to-navy-100 rounded-lg shadow-sm">
              <Bed className="w-8 h-8 text-navy-600 mb-2" />
              <span className="font-bold text-navy-900 text-lg">{property.bedrooms}</span>
              <span className="text-sm text-gray-600">Habitaciones</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gradient-to-br from-navy-50 to-navy-100 rounded-lg shadow-sm">
              <Bath className="w-8 h-8 text-navy-600 mb-2" />
              <span className="font-bold text-navy-900 text-lg">{property.bathrooms}</span>
              <span className="text-sm text-gray-600">Baños</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gradient-to-br from-navy-50 to-navy-100 rounded-lg shadow-sm">
              <Square className="w-8 h-8 text-navy-600 mb-2" />
              <span className="font-bold text-navy-900 text-lg">{(property.squareFeet / 1).toFixed(0)}</span>
              <span className="text-sm text-gray-600">Metros Cuadrados</span>
            </div>
          </div>
          <p className="text-gray-700 mb-6 font-inter leading-relaxed">{property.description}</p>
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-lg font-playfair font-semibold text-navy-900 mb-4">Características de la Propiedad</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(showAllFeatures ? property.features : property.features.slice(0, 6)).map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-gold-500 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            {property.features.length > 6 && (
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="mt-4 text-gold-600 hover:text-gold-800 font-medium transition-colors"
              >
                {showAllFeatures ? 'Mostrar Menos' : 'Mostrar Todas las Características'}
              </button>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-navy-900 mb-6">Ubicación</h2>
          <div className="relative rounded-lg overflow-hidden mb-4 shadow-md">
            {property.mapIframe ? (
              <iframe
                src={property.mapIframe.match(/src="([^"]+)"/)?.[1]}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${property.title}`}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-lg">
                <div className="flex items-center justify-center h-full">
                  <MapPin className="w-8 h-8 text-navy-600 mr-2" />
                  <span className="text-gray-600">Vista de Mapa No Disponible</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-navy-600 mt-0.5 mr-2" />
            <span className="text-gray-700">
              {property.address}, {property.city}, {property.state} {property.zipCode}
            </span>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-playfair font-semibold text-navy-900 mb-6">Propiedades Similares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProperties.map((property) => (
                <motion.div
                  key={property.id}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="transform transition-all"
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fillout Slider Form */}
      <div
        data-fillout-id="ipnpFKzFA4us"
        data-fillout-embed-type="slider"
        data-fillout-button-text="Enviar Solicitud"
        data-fillout-button-color="#396FC9"
        data-fillout-button-size="large"
        data-fillout-button-float="bottom-right"
        data-fillout-slider-direction="right"
        data-fillout-inherit-parameters
        data-fillout-popup-size="medium"
      ></div>
    </div>
  );
};

export default PropertyDetails;