import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="border-t border-navy-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Inmuebles Serfyneg. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <SocialLink Icon={Facebook} href="https://www.facebook.com/p/Serfyneg-100093365205411/" />
            <SocialLink Icon={Instagram} href="https://www.instagram.com/serfynegbpo/" />
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-gold-500">
              Política de Privacidad
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-gold-500">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  Icon: React.ElementType;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ Icon, href }) => {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-gray-300 hover:bg-gold-500 hover:text-navy-900 transition-colors duration-300"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
};

export default Footer;