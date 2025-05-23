import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
          alt="Propiedad de Lujo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            ¡Encuentra tu inmueble ideal!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explora nuestra exclusiva variedad de propiedades, desde lotes urbanos hasta apartamentos accesibles.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-gold-400 font-semibold text-lg">200+</p>
              <p className="text-white text-sm">Propiedades de Lujo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-gold-400 font-semibold text-lg">15+</p>
              <p className="text-white text-sm">Años de Experiencia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-gold-400 font-semibold text-lg">95%</p>
              <p className="text-white text-sm">Satisfacción del Cliente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <button
          className="animate-bounce bg-white/20 backdrop-blur-sm p-2 w-10 h-10 ring-1 ring-white/20 rounded-full flex items-center justify-center"
          aria-label="Desplazarse hacia abajo"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
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
        </button>
        <span className="text-xs text-white mt-2 block">Desplazarse Hacia Abajo</span>
      </div>
    </section>
  );
};

export default HeroSection;