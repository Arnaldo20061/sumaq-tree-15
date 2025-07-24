
import { Heart, Leaf } from "lucide-react";

const FounderNote = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-earth-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-forest-100 rounded-full opacity-30 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-coffee-100 rounded-full opacity-30 translate-x-12 translate-y-12"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-4">
            Nota del fundador
          </h2>
          <div className="w-16 h-1 bg-forest-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
          {/* Quote decoration */}
          <div className="absolute -top-4 left-8">
            <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">"</span>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-coffee-800">
            <h3 className="text-2xl lg:text-3xl font-bold text-forest-800 mb-6">
              "Un día, todo cambió con una taza de café"
            </h3>

            <p>
              Recuerdo que fue en una feria agrícola cuando escuché a una productora decir: 
              <em className="text-forest-700 font-medium">
                "Tenemos un café increíble, pero nadie nos compra porque no tenemos cómo probar que somos sostenibles"
              </em>.
            </p>

            <p className="font-semibold text-forest-700">
              Esa frase se me quedó grabada.
            </p>

            <p>
              Me puse a investigar. Hablé con ingenieros agrónomos, productores de café y expertos en certificaciones. 
              Todos coincidían en lo mismo: el problema no era la calidad, era la falta de datos confiables y visibles.
            </p>

            <p>
              Así nació nuestra misión: crear una herramienta tecnológica que facilitara la gestión sostenible 
              para quienes realmente están en el campo, día a día.
            </p>

            <p>
              Hoy, con <span className="font-semibold text-forest-700">Sumaq Tree</span>, ayudamos a cooperativas 
              y agroexportadoras a tomar decisiones basadas en datos reales. Les damos lo que necesitan para 
              mejorar su producción, ahorrar recursos y abrirse paso a mercados internacionales que exigen sostenibilidad.
            </p>

            <p className="font-semibold text-forest-800 text-xl">
              No se trata solo de sensores. Se trata de empoderar a quienes alimentan al mundo.
            </p>

            <p className="font-bold text-coffee-700 text-xl">
              Esto recién empieza.
            </p>

            <div className="pt-8 border-t border-earth-200 mt-8">
              <p className="text-coffee-600 mb-4">Con mucho cariño,</p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-200 to-coffee-200 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-forest-700" />
                </div>
                <div>
                  <div className="font-bold text-forest-800 text-xl">Sumaq Tree</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-forest-700 font-medium">
                <Leaf className="w-5 h-5" />
                <span>Tecnología hecha para cuidar la tierra y a quienes la trabajan</span>
                <Heart className="w-5 h-5 text-coffee-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
