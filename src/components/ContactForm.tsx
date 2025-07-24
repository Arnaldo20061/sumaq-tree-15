
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });
    
    setFormData({ name: "", email: "", company: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-forest-900 via-forest-800 to-coffee-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido informativo */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Comienza tu transformación digital hoy
            </h2>
            <p className="text-xl text-forest-100">
              Únete a las empresas que ya están optimizando sus operaciones y
              reduciendo su impacto ambiental con tecnología inteligente.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-forest-100">Demo personalizada gratuita</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-forest-100">Análisis de tu situación actual</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-forest-100">Plan de implementación personalizado</span>
              </div>
            </div>

            <div className="pt-8">
              <Button
                size="lg"
                className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Conoce cómo optimizar en solo 5 minutos
              </Button>
            </div>
          </div>

          {/* Formulario */}
          <Card className="bg-white shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-forest-800 flex items-center justify-center gap-3">
                <Download className="w-6 h-6" />
                Recibe una guía gratuita
              </CardTitle>
              <p className="text-coffee-600">
                Aprende cómo certificar tu finca con tecnología
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-forest-800 font-medium">
                    Nombre completo
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-coffee-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 py-3 border-earth-300 focus:border-forest-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-forest-800 font-medium">
                    Email corporativo
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-coffee-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 py-3 border-earth-300 focus:border-forest-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-forest-800 font-medium">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="py-3 border-earth-300 focus:border-forest-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Descargar guía gratuita
                </Button>

                <p className="text-sm text-coffee-500 text-center">
                  Al enviar este formulario, aceptas recibir comunicaciones de Sumaq Tree.
                  Puedes cancelar la suscripción en cualquier momento.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
