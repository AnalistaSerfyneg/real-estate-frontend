import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FilloutStandardEmbed } from '@fillout/react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Contáctanos | Inmuebles Serfyneg';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-navy-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contáctanos
          </h1>
          <p className="text-gray-300 max-w-2xl">
            ¿Tienes preguntas sobre una propiedad o necesitas ayuda con tu proceso inmobiliario? Nuestro equipo está aquí para ayudarte.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Embedded Fillout Form using @fillout/react */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-navy-900 mb-6">Ponte en Contacto</h2>
            <div style={{ width: '100%', height: '500px' }}>
              <FilloutStandardEmbed filloutId="jLQuijYVysus" />
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-navy-900 mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex">
                  <MapPin className="w-6 h-6 text-navy-600 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="font-medium text-navy-900 mb-1">Dirección de la Oficina</h3>
                    <p className="text-gray-600">
                      Avenida del Lujo 123<br />
                      Nueva York, NY 10001<br />
                      Estados Unidos
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="w-6 h-6 text-navy-600 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="font-medium text-navy-900 mb-1">Números de Teléfono</h3>
                    <p className="text-gray-600 mb-1">
                      Principal: <a href="tel:+12345678900" className="hover:text-navy-600">(123) 456-7890</a>
                    </p>
                    <p className="text-gray-600">
                      Fax: <span>(123) 456-7891</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="w-6 h-6 text-navy-600 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="font-medium text-navy-900 mb-1">Correos Electrónicos</h3>
                    <p className="text-gray-600 mb-1">
                      Consultas Generales: <a href="mailto:info@luxeestate.com" className="hover:text-navy-600">info@luxeestate.com</a>
                    </p>
                    <p className="text-gray-600">
                      Soporte: <a href="mailto:support@luxeestate.com" className="hover:text-navy-600">support@luxeestate.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="w-6 h-6 text-navy-600 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="font-medium text-navy-900 mb-1">Horario de Atención</h3>
                    <p className="text-gray-600 mb-1">
                      Lunes - Viernes: 9:00 a.m. - 6:00 p.m.
                    </p>
                    <p className="text-gray-600 mb-1">
                      Sábado: 10:00 a.m. - 4:00 p.m.
                    </p>
                    <p className="text-gray-600">
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;