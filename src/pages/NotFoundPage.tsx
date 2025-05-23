import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    // Actualiza el título del documento
    document.title = 'Página no encontrada | Serfyneg BPO S.A.S';
  }, []);
  
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-9xl font-bold text-navy-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-navy-800 mb-6">Página no encontrada</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          La página que estás buscando pudo haber sido eliminada, cambiado de nombre o no estar disponible temporalmente.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="btn btn-primary flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
