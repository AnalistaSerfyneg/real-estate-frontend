import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection: React.FC = () => {
  // Lista de imágenes (eliminando duplicados)
  const images = [
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
  ].filter((img, index, self) => self.indexOf(img) === index);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambiar imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Animaciones simplificadas para el carrusel
  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: -50, transition: { duration: 1.2 } },
  };

  // Animación de zoom para el fondo (simplificada)
  const zoomVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  // Animaciones para el contenido
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 1, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (!images.length) {
    return <div className="text-navy-900">Error: No se cargaron imágenes.</div>;
  }

  return (
    <section className="relative min-h-screen bg-navy-950 overflow-hidden">
      {/* Carrusel de imágenes con animación */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 w-full h-full"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            variants={zoomVariants}
            animate="animate"
          >
            {/* Overlay de gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 to-navy-900/50" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Contenido del héroe */}
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <motion.div
          className="max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 leading-tight animate-fade-in"
            variants={itemVariants}
          >
            ¡Encuentra tu inmueble ideal!
          </motion.h1>
          <motion.p
            className="text-xl text-navy-200 mb-8 font-inter animate-slide-up"
            variants={itemVariants}
          >
            Descubre oportunidades únicas: lotes, casas y apartamentos a precios accesibles. ¡Tenemos la propiedad perfecta para ti!
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="flex flex-wrap gap-4 md:gap-8 justify-center"
            variants={containerVariants}
          >
            <motion.div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg" variants={itemVariants}>
              <p className="text-gold-400 font-semibold text-lg">100+</p>
              <p className="text-white text-sm">Propiedades</p>
            </motion.div>
            <motion.div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg" variants={itemVariants}>
              <p className="text-gold-400 font-semibold text-lg">8+</p>
              <p className="text-white text-sm">Años de Experiencia</p>
            </motion.div>
            <motion.div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg" variants={itemVariants}>
              <p className="text-gold-400 font-semibold text-lg">95%</p>
              <p className="text-white text-sm">Satisfacción del Cliente</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <motion.button
          className="animate-bounce bg-white/20 backdrop-blur-sm p-2 w-10 h-10 ring-1 ring-navy-200 rounded-full flex items-center justify-center"
          aria-label="Desplazarse hacia abajo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          variants={itemVariants}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.button>
        <span className="text-xs text-navy-200 mt-2 block">Desplazarse Hacia Abajo</span>
      </div>
    </section>
  );
};

export default HeroSection;