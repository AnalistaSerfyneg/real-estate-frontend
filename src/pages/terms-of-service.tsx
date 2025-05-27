import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsService: React.FC = () => {
  return (
    <div className="pt-20 bg-gray-50 pb-16">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center text-navy-600 hover:text-navy-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <FileText className="w-8 h-8 text-navy-600 mr-3" />
            <h1 className="text-2xl md:text-3xl font-bold text-navy-900">
              Términos de Servicio
            </h1>
          </div>
          <p className="text-gray-600 mt-2">
            Última actualización: 23 de mayo de 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">1. Aceptación de los términos</h2>
            <p className="text-gray-700">
              Bienvenido a Inmuebles Serfyneg (el "Sitio"). Estos Términos de Servicio ("Términos") rigen el uso de nuestro sitio web y los servicios relacionados (los "Servicios"). Al acceder o usar el Sitio, aceptas estos Términos. Si no estás de acuerdo, no uses el Sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">2. Uso del Sitio</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Proporcionar información veraz y precisa al registrarte o enviar consultas.</li>
              <li>No usar el Sitio para fines ilegales, fraudulentos o no autorizados.</li>
              <li>No interferir con el funcionamiento del Sitio, como introducir virus o intentar acceder sin autorización.</li>
              <li>Respetar los derechos de propiedad intelectual de Inmuebles Serfyneg y terceros.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">3. Servicios ofrecidos</h2>
            <p className="text-gray-700">
              El Sitio permite buscar, explorar y contactar agentes para la compra, venta o alquiler de propiedades. No garantizamos la exactitud de la información sobre propiedades ni la disponibilidad de las mismas. Los contratos de compraventa o alquiler se realizan directamente entre usuarios y agentes, y Inmuebles Serfyneg no es parte de dichos acuerdos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">4. Propiedad intelectual</h2>
            <p className="text-gray-700">
              Todo el contenido del Sitio, incluyendo textos, imágenes, logotipos y software, es propiedad de Inmuebles Serfyneg o sus licenciantes y está protegido por leyes de propiedad intelectual. No puedes copiar, modificar o distribuir contenido sin nuestro consentimiento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">5. Limitación de responsabilidad</h2>
            <p className="text-gray-700">
              El Sitio se proporciona "tal cual". Inmuebles Serfyneg no garantiza que el Sitio esté libre de errores o interrupciones. No somos responsables por:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Errores en la información de propiedades o servicios.</li>
              <li>Pérdidas o daños derivados del uso del Sitio.</li>
              <li>Acciones de terceros, como agentes inmobiliarios o usuarios.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">6. Enlaces a terceros</h2>
            <p className="text-gray-700">
              El Sitio puede contener enlaces a sitios web de terceros. No controlamos ni asumimos responsabilidad por el contenido o prácticas de estos sitios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">7. Terminación</h2>
            <p className="text-gray-700">
              Podemos suspender o terminar tu acceso al Sitio si violas estos Términos o por cualquier motivo, sin previo aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">8. Ley aplicable</h2>
            <p className="text-gray-700">
              Estos Términos se rigen por las leyes de Colombia. Cualquier disputa será resuelta en los tribunales de Bogotá, Colombia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">9. Cambios a los Términos</h2>
            <p className="text-gray-700">
              Podemos modificar estos Términos en cualquier momento. Los cambios se publicarán en esta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-4">10. Contacto</h2>
            <p className="text-gray-700">
              Para preguntas sobre estos Términos, contáctanos en:
              <br />
              Inmuebles Serfyneg
              <br />
              Correo: soporte@serfyneg.com
              <br />
              Teléfono: [601-915 9644 Ext 3003]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsService;