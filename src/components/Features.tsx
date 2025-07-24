
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplets, 
  Award, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Leaf 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Optimización de recursos",
      description: "Reduce hasta 20% el consumo de agua y fertilizantes mediante monitoreo inteligente",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificaciones sostenibles",
      description: "Facilita el proceso para obtener Rainforest Alliance, UTZ y otras certificaciones",
      color: "from-forest-500 to-forest-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análisis predictivo",
      description: "Logra mejorar el rendimiento de tus cultivos con datos precisos",
      color: "from-coffee-500 to-coffee-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Alertas tempranas",
      description: "Detecta a tiempo y gestiona la aparición de plagas del café para proteger tu producción.",
      color: "from-earth-500 to-earth-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Monitoreo remoto",
      description: "Supervisa tus cultivos desde cualquier lugar con nuestra aplicación móvil",
      color: "from-forest-500 to-coffee-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Funcionalidad offline",
      description: "Almacena tu información localmente y sincronízala automáticamente al recuperar tu conexión.",
      color: "from-forest-600 to-forest-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-4">
            Tecnología que impulsa la sostenibilidad
          </h2>
          <p className="text-lg text-coffee-600 max-w-3xl mx-auto">
            Sumaq Tree es un sistema digital que detecta plagas en cafetales con sensores en tiempo real
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-earth-200"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-forest-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-coffee-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estadísticas adicionales */}
        <div className="mt-20 bg-gradient-to-r from-forest-50 to-coffee-50 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-forest-600 mb-2">500+</div>
              <div className="text-coffee-600">Sensores instalados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest-600 mb-2">50+</div>
              <div className="text-coffee-600">Empresas confiando</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest-600 mb-2">25%</div>
              <div className="text-coffee-600">Ahorro promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest-600 mb-2">99%</div>
              <div className="text-coffee-600">Tiempo de actividad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
