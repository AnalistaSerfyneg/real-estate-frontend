import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jonathan Parker',
    role: 'Inversionista Inmobiliario',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    content: 'El equipo de Inmuebles Serfyneg hizo que encontrar mi propiedad ideal frente al mar fuera una experiencia sin complicaciones. Su atención al detalle y conocimiento del mercado son inigualables. No podría estar más satisfecho con mi inversión.',
    rating: 5,
    location: 'Miami, FL'
  },
  {
    id: '2',
    name: 'Sophia Williams',
    role: 'Propietaria',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    content: 'Después de meses buscando por nuestra cuenta, contactamos a Inmuebles Serfyneg y encontramos nuestro hogar perfecto en semanas. Su enfoque personalizado y comprensión de nuestras necesidades marcaron la diferencia.',
    rating: 5,
    location: 'Nueva York, NY'
  },
  {
    id: '3',
    name: 'Daniel Thompson',
    role: 'Desarrollador Inmobiliario',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    content: 'Como desarrollador, dependo de información del mercado y conexiones valiosas. Inmuebles Serfyneg cumple consistentemente en ambos aspectos, convirtiéndolos en mi agencia preferida para transacciones inmobiliarias de alto nivel.',
    rating: 5,
    location: 'Los Ángeles, CA'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para sus decisiones e inversiones inmobiliarias más importantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-navy-100">
                <Quote className="w-12 h-12" aria-hidden="true" />
              </div>
              
              {/* Client Information */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-navy-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'
                    }`}
                    aria-label={i < testimonial.rating ? 'Estrella llena' : 'Estrella vacía'}
                  />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-700 italic relative z-10">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;