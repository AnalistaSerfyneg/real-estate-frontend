import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo izquierdo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-3GHfNmRcy6us/455589ae-de66-4d69-be7e-e4759fb7aabd-O7DOGGmp0yTs54E0ZmKiPewkgup52Qm5B09rSS5HaicYAGNQNht8IgUi5qcCBl11HfSbz8capajp9IQzjcek0Qx90sLNtxL7UMo/logoSerfyneg.png"
            alt="Logo de Inmuebles Serfyneg"
            className="w-17 h-14 mr-2 object-contain"
          />
          <span
            className={`font-playfair font-bold text-2xl ${
              isScrolled || !isHomePage ? 'text-navy-900' : 'text-white'
            }`}
          >
             Inmuebles<span className="text-color-serfy"> Serfyneg</span>
          </span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Inicio" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavLink to="/properties" label="Propiedades" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavLink to="/contact" label="Contacto" isScrolled={isScrolled} isHomePage={isHomePage} />
        </nav>

        {/* Acciones desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+1234567890" className="flex items-center btn btn-primary">
            <Phone className="w-4 h-4 mr-2" />
            <span>(601) 915-9644</span>
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-navy-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-navy-900' : 'text-white'}`} />
          )}
        </button>

        {/* Logo derecho */}
        <img
          src="https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-3GHfNmRcy6us/a1ab014d-1a91-4d8e-90d1-8d652d3f00af-YSOnC2K6r8k4KAmarGJCQe0F9VyMLH1Z2Q0g98vJSHMQjY5viuCoeNFPtFAePxpLbrp2s14yWR4zcGnbFB863SQZFsKoWN7ecSW/FNA.png"
          alt="Logo adicional"
          className="w-17 h-14 object-contain ml-4 hidden md:block"
        />
      </div>

      {/* Navegación móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <Link to="/" className="py-3 text-navy-900 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Inicio
            </Link>
            <Link to="/properties" className="py-3 text-navy-900 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Propiedades
            </Link>
            <Link to="/agents" className="py-3 text-navy-900 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Agentes
            </Link>
            <Link to="/contact" className="py-3 text-navy-900" onClick={() => setIsMobileMenuOpen(false)}>
              Contacto
            </Link>
            <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100">
              <button className="flex-1 btn btn-outline flex items-center justify-center">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </button>
              <button className="flex-1 btn btn-primary flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
  isHomePage: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled, isHomePage }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`font-medium transition-colors duration-300 hover:text-gold-500 ${
        isActive
          ? 'text-gold-500'
          : isScrolled || !isHomePage
          ? 'text-navy-900'
          : 'text-white'
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;
