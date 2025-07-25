import { Button } from "@/components/ui/button";
import { Leaf, Smartphone, TrendingUp } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/imagenst.png')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <div className="space-y-8 animate-fade-in mt-60">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                Transforma tu{" "}
                <span className="text-forest-200">agroexportadora</span> con
                tecnología sostenible
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-lg">
                Reduce pérdidas por plagas y mejorar tu acceso a mercados premium
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative">
                    <button
                      onClick={() => setShowForm(false)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                    >
                      &times;
                    </button>
                    <h2 className="text-2xl font-bold mb-4">Solicita una demo</h2>
                    <form
                      action="https://hook.us2.make.com/zj73b67tahj8nboh3riwteklaxknvjge"
                      method="POST"
                      className="flex flex-col gap-4"
                    >
                      <input
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre"
                        className="border p-2 rounded"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Tu correo"
                        className="border p-2 rounded"
                        required
                      />
                      <textarea
                        name="mensaje"
                        placeholder="Cuéntanos sobre tu cultivo o necesidades"
                        className="border p-2 rounded"
                      />
                      <button
                        type="submit"
                        className="bg-forest-600 hover:bg-forest-700 text-white px-4 py-2 rounded"
                      >
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              )}
              <Button
               size="lg"
               className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
               onClick={() => setShowForm(true)}
              >
              Solicita una demo personalizada
              </Button>

            </div>

            {/* Beneficios Rápidos */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 pb-8 max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Reduce costos
                    </h3>
                    <p className="text-sm text-white/80">Hasta 20% menos agua</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Certifica</h3>
                    <p className="text-sm text-white/80">
                      Estándares internacionales
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Monitorea</h3>
                    <p className="text-sm text-white/80">En tiempo real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Espacio para mantener el layout balanceado */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
