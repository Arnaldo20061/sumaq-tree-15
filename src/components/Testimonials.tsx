import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      rating: 5,
      quote: "Antes teníamos que anotar todo en cuadernos y era imposible rastrear el uso real de recursos. Ahora el sistema nos avisa automáticamente si hay variaciones y podemos mostrar los reportes a los certificadores de manera instantánea. Es una tranquilidad enorme saber que todo está documentado correctamente.",
      name: "Luis Peña",
      position: "Administrador",
      company: "Finca Rosenheim",
      initials: "LP",
      stats: {
        water: "20%",
        productivity: "15%",
        accuracy: "95%"
      }
    },
    {
      rating: 5,
      quote: "Perdíamos mucho tiempo generando reportes manualmente y siempre había errores humanos. Con Sumaq Tree, los datos se capturan automáticamente y los reportes salen perfectos. Nuestros clientes internacionales ahora confían completamente en nuestra operación.",
      name: "Rosa Gutiérrez",
      position: "Gerente de Producción",
      company: "Agroexportadora El Bosque",
      initials: "RG",
      stats: {
        water: "22%",
        productivity: "18%",
        accuracy: "97%"
      }
    },
    {
      rating: 5,
      quote: "No teníamos visibilidad real de lo que pasaba en el campo hasta el final del día. Ahora recibimos alertas en tiempo real y podemos actuar inmediatamente si algo no está bien. La diferencia en productividad es increíble.",
      name: "Carlos Mendoza",
      position: "Director de Operaciones",
      company: "FreshFruit Export S.A.",
      initials: "CM",
      stats: {
        water: "18%",
        productivity: "25%",
        accuracy: "96%"
      }
    },
    {
      rating: 5,
      quote: "El proceso de certificación orgánica era una pesadilla de documentos y verificaciones. Sumaq Tree automatizó todo el proceso de trazabilidad y obtuvimos la certificación en tiempo récord. Los auditores quedaron impresionados con la precisión de nuestros datos.",
      name: "María Elena Vargas",
      position: "Gerente de Calidad",
      company: "Organic Valley Peru",
      initials: "MV",
      stats: {
        water: "25%",
        productivity: "19%",
        accuracy: "99%"
      }
    },
    {
      rating: 5,
      quote: "Antes gastábamos semanas preparando informes de sostenibilidad y nunca estábamos seguros de su exactitud. Ahora todo se genera automáticamente con datos verificables. Es como tener un equipo de analistas trabajando 24/7 para nosotros.",
      name: "Jorge Ramírez",
      position: "Jefe de Sostenibilidad",
      company: "EcoFarms International",
      initials: "JR",
      stats: {
        water: "16%",
        productivity: "20%",
        accuracy: "98%"
      }
    },
    {
      rating: 5,
      quote: "Nuestros costos operativos eran demasiado altos y no sabíamos exactamente dónde optimizar. Con Sumaq Tree identificamos todas las ineficiencias y la inversión se pagó sola en menos de 8 meses. Ahora somos el benchmark en agricultura sostenible.",
      name: "Ana Sofía Torres",
      position: "CEO",
      company: "Green Harvest Corp",
      initials: "AT",
      stats: {
        water: "23%",
        productivity: "28%",
        accuracy: "94%"
      }
    },
    {
      rating: 5,
      quote: "Teníamos procesos completamente analógicos y perdíamos competitividad frente a empresas más tecnificadas. Sumaq Tree nos digitalizó completamente y ahora tenemos una ventaja competitiva enorme en mercados internacionales. La transformación fue total.",
      name: "Fernando López",
      position: "Director Técnico",
      company: "AgriTech Solutions",
      initials: "FL",
      stats: {
        water: "21%",
        productivity: "17%",
        accuracy: "99%"
      }
    },
    {
      rating: 5,
      quote: "Constantemente teníamos problemas con el desperdicio de agua y no podíamos cumplir estándares ambientales. Ahora tenemos control total del consumo y hemos reducido el desperdicio significativamente. Sentimos que finalmente somos una empresa responsable.",
      name: "Patricia Herrera",
      position: "Coordinadora Ambiental",
      company: "Valle Verde Exports",
      initials: "PH",
      stats: {
        water: "30%",
        productivity: "16%",
        accuracy: "95%"
      }
    },
    {
      rating: 5,
      quote: "Los trabajadores perdían mucho tiempo llenando formatos y reportes a mano. Con Sumaq Tree, todo se registra automáticamente desde el campo y el equipo puede enfocarse en lo que realmente importa: cuidar los cultivos. La moral del equipo mejoró notablemente.",
      name: "Roberto Silva",
      position: "Jefe de Campo",
      company: "Campos del Norte",
      initials: "RS",
      stats: {
        water: "19%",
        productivity: "24%",
        accuracy: "96%"
      }
    },
    {
      rating: 5,
      quote: "Teníamos problemas graves de comunicación entre el campo y la oficina, lo que causaba retrasos y errores costosos. Sumaq Tree conectó toda la operación en tiempo real. Ahora tomamos decisiones basadas en datos precisos y actuales.",
      name: "Isabella Morales",
      position: "Gerente General",
      company: "Frutas Premium del Sur",
      initials: "IM",
      stats: {
        water: "17%",
        productivity: "21%",
        accuracy: "97%"
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-earth-50 to-forest-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Empresas líderes ya están transformando sus operaciones con Sumaq Tree
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-forest-100 hover:bg-forest-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-forest-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-forest-100 hover:bg-forest-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-forest-600" />
              </button>
            </div>

            <div className="pt-6">
              <div className="flex items-center mb-6">
                {[...Array(currentData.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-coffee-800 leading-relaxed mb-8 italic">
                "{currentData.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-forest-200 to-coffee-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-forest-700">{currentData.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-forest-800 text-lg">
                    {currentData.name}
                  </div>
                  <div className="text-coffee-600">
                    {currentData.position}
                  </div>
                  <div className="text-coffee-500 text-sm">
                    {currentData.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas de impacto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-earth-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">{currentData.stats.water}</div>
                <div className="text-coffee-600">Reducción uso de agua</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">{currentData.stats.productivity}</div>
                <div className="text-coffee-600">Aumento productividad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">{currentData.stats.accuracy}</div>
                <div className="text-coffee-600">Precisión en datos</div>
              </div>
            </div>

            {/* Indicadores de testimonial */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-forest-600' : 'bg-forest-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
