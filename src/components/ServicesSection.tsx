import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
  {
    id: 1,
    icon: <Code className="w-8 h-8" />,
    title: "Dezvoltare Web",
    description: "Website-uri și aplicații web personalizate, realizate cu tehnologii moderne",
    price: "Începând de la 1.200$",
    features: ["Design Responsive", "Framework Modern", "Optimizare SEO", "Încărcare Rapidă"]
  },

  {
    id: 2,
    icon: <Palette className="w-8 h-8" />,
    title: "Design UI/UX",
    description: "Interfețe frumoase și intuitive care îmbunătățesc experiența utilizatorului",
    price: "Începând de la 800$",
    features: ["Cercetare Utilizatori", "Wireframing", "Prototipare", "Sistem de Design"]
  },

  {
    id: 3,
    icon: <Globe className="w-8 h-8" />,
    title: "Soluții E-commerce",
    description: "Magazine online complete cu integrare plăți și gestionare stocuri",
    price: "Începând de la 2.000$",
    features: ["Gateway de Plăți", "Sistem de Inventar", "Panou Administrativ", "Analize și Statistici"]
  },

  {
    id: 4,
    icon: <Database className="w-8 h-8" />,
    title: "Dezvoltare Backend",
    description: "API-uri robuste și soluții server-side pentru aplicațiile tale",
    price: "Începând de la 1.500$",
    features: ["REST API-uri", "Design Baze de Date", "Autentificare", "Hosting în Cloud"]
  },

  {
    id: 5,
    icon: <Zap className="w-8 h-8" />,
    title: "Optimizare Performanță",
    description: "Crește viteza website-urilor și aplicațiilor existente",
    price: "Începând de la 600$",
    features: ["Analiză Viteză", "Optimizare Cod", "Îmbunătățire SEO", "Monitorizare Performanță"]
  }
];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-5"></div>
      <div className="absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Servicii oferite</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-white">
            Ofer soluții digitale complete pentru a transforma ideile tale în realitate, folosind tehnologie de ultimă generație și design modern.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-intense hover-lift fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-white">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground text-white">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.price}</span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                  >
                    Solicită oferta
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 backdrop-blur-sm border border-border">
            <h3 className="text-2xl font-bold mb-4">Ai nevoie de o soluție personalizată?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Fiecare proiect este unic. Hai să discutăm cerințele tale specifice și să creăm o soluție personalizată care să se potrivească perfect nevoilor tale.            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 transition-all duration-300 hover-lift relative overflow-hidden group"
            >
              <span className="relative z-10">Demarează proiectul</span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}