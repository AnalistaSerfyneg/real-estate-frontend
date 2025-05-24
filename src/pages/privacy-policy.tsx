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
              En Serfyneg BPO S.A.S ("nosotros", "nuestro"), nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos la información personal que nos proporcionas a través de nuestro sitio web y servicios relacionados (el "Sitio"). Al usar el Sitio, aceptas las prácticas descritas aquí.
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
              Tienes derechos sobre tus datos, como acceder, corregir o eliminar tu información personal, oponerte al procesamiento, o retirar tu consentimiento para marketing. Contáctanos en soporte@serfyneg.com.
            </p>
          </section>


          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-900 mb-4">8. Autorización para el Tratamiento de Datos Personales</h2>
            <p className="text-gray-700">
              En cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes, informamos que los datos personales que usted suministre a través de este sitio serán recolectados, almacenados, usados, circulados y tratados por Serfyneg BPO S.A.S. (NIT 901.736.564-1) y el Fondo Nacional del Ahorro S.A. (NIT 899.999.284-4), en calidad de responsables y/o encargados.
            </p>
            <p className="text-gray-700 mt-2">
              La finalidad del tratamiento de sus datos personales incluye:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Contactarlo por medios físicos y/o electrónicos para ofrecer productos y servicios relacionados con ahorro, crédito y otros servicios financieros.</li>
              <li>Enviar información publicitaria, promocional y/o comercial de Serfyneg BPO S.A.S. y el Fondo Nacional del Ahorro S.A.</li>
              <li>Realizar encuestas de satisfacción, estudios de mercado y análisis estadísticos.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Usted puede conocer, actualizar, rectificar y suprimir sus datos personales, o revocar la autorización, mediante solicitud a:
              <br />Serfyneg BPO S.A.S.: servicioalcliente@serfyneg.com
              <br />Fondo Nacional del Ahorro S.A.: protecciondedatospersonales@fna.gov.co
              <br />Al usar este sitio, usted declara haber sido informado sobre el tratamiento de sus datos y autoriza expresamente a Serfyneg BPO S.A.S. y al Fondo Nacional del Ahorro S.A. para tratarlos conforme a lo aquí establecido.
            </p>
          </section>


          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-4">9. Cambios a esta política</h2>
            <p className="text-gray-700">
              Podemos actualizar esta Política de Privacidad. Publicaremos los cambios en esta página y, si son significativos, te notificaremos por correo o mediante un aviso en el Sitio.
            </p>
            <br />
          </section>


          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-4">10. Contacto</h2>
            <p className="text-gray-700">
              Si tienes preguntas, contáctanos en:
              <br />Correo: servicioalcliente@serfyneg.com
              <br />Teléfono: [601-915 9644 Ext 3003]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
