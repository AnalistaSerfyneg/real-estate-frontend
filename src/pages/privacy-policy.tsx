import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
              Política de Privacidad
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
            <h2 className="text-xl font-semibold text-navy-900 mb-4">1. Introducción</h2>
            <p className="text-gray-700">
              En Inmuebles Serfyneg ("nosotros", "nuestro"), nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos la información personal que nos proporcionas a través de nuestro sitio web y servicios relacionados (el "Sitio"). Al usar el Sitio, aceptas las prácticas descritas aquí.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">2. Información que recopilamos</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Información personal:</strong> Nombre, correo electrónico, número de teléfono, dirección, y cualquier otra información que proporciones al contactarnos o registrarte.</li>
              <li><strong>Información sobre propiedades:</strong> Detalles de búsquedas de propiedades, preferencias de inmuebles, o consultas enviadas a través del Sitio.</li>
              <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, y tiempo de navegación, recopilados mediante cookies y tecnologías similares.</li>
              <li><strong>Información de terceros:</strong> Datos obtenidos de socios comerciales o plataformas de redes sociales, si interactúas con nosotros a través de ellas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">3. Uso de la información</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Proporcionar y mejorar nuestros servicios, como mostrar propiedades relevantes.</li>
              <li>Responder a tus consultas y enviarte información sobre inmuebles.</li>
              <li>Personalizar tu experiencia en el Sitio.</li>
              <li>Enviar comunicaciones de marketing (con tu consentimiento).</li>
              <li>Cumplir con obligaciones legales y proteger nuestros derechos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">4. Compartir información</h2>
            <p className="text-gray-700">
              No vendemos ni alquilamos tu información personal. Podemos compartirla con:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Agentes inmobiliarios:</strong> Para facilitar la compra, venta o alquiler de propiedades.</li>
              <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan con hosting, análisis de datos, o marketing, bajo estrictos acuerdos de confidencialidad.</li>
              <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">5. Cookies y tecnologías similares</h2>
            <p className="text-gray-700">
              Usamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar contenido. Puedes gestionar tus preferencias de cookies en tu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">6. Seguridad</h2>
            <p className="text-gray-700">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información, como cifrado y controles de acceso. Sin embargo, ningún sistema es completamente seguro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">7. Tus derechos</h2>
            <p className="text-gray-700">
              Tienes derechos sobre tus datos, como acceder, corregir o eliminar tu información personal, oponerte al procesamiento, o retirar tu consentimiento para marketing. Contáctanos en [correo de contacto, ej., soporte@serfyneg.com].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">8. Transferencias internacionales</h2>
            <p className="text-gray-700">
              Tu información puede transferirse a servidores fuera de Colombia, con estrictas medidas de protección de datos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">9. Cambios a esta política</h2>
            <p className="text-gray-700">
              Podemos actualizar esta Política de Privacidad. Publicaremos los cambios en esta página y, si son significativos, te notificaremos por correo o mediante un aviso en el Sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-4">10. Contacto</h2>
            <p className="text-gray-700">
              Si tienes preguntas, contáctanos en:
              <br />
              Inmuebles Serfyneg
              <br />
              Correo: soporte@serfyneg.com
              <br />
              Teléfono: [número de contacto]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;