import React, { useState, useRef } from "react";
import { Code, Palette, Smartphone, Globe, Database, Zap, X, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    prenume: "",
    nume: "",
    email: "",
    subiect: "",
    mesaj: ""
  });
  const formRef = useRef<HTMLDivElement>(null);

  const services = [
  {
    id: 1,
    icon: <Globe className="w-8 h-8" />,
    title: "Soluții E-commerce",
    description: "Magazine online complete cu integrare plăți și gestionare stocuri",
    price: "Începând de la 400$",
    features: ["Gateway de Plăți", "Sistem de Inventar", "Panou Administrativ", "Analize și Statistici"]
  },
  {
    id: 2,
    icon: <Code className="w-8 h-8" />,
    title: "Dezvoltare Web",
    description: "Website-uri și aplicații web personalizate, realizate cu tehnologii moderne",
    price: "Începând de la 150$",
    features: ["Design adaptabil", "Framework Modern", "Securizare", "Încărcare Rapidă"]
  },
  {
    id: 3,
    icon: <Database className="w-8 h-8" />,
    title: "Dezvoltare Backend",
    description: "API-uri robuste și soluții server-side pentru aplicațiile tale",
    price: "Începând de la 150$",
    features: ["REST API-uri", "Design Baze de Date", "Autentificare", "Hosting în Cloud"]
  },
  {
    id: 4,
    icon: <Zap className="w-8 h-8" />,
    title: "Optimizare Performanță",
    description: "Crește viteza website-urilor și aplicațiilor existente",
    price: "Începând de la 100$",
    features: ["Analiză Viteză", "Îmbunătățire SEO", "Monitorizare Performanță"]
  },
  {
    id: 5,
    icon: <Palette className="w-8 h-8" />,
    title: "Design UI/UX",
    description: "Interfețe frumoase și intuitive care îmbunătățesc experiența utilizatorului",
    price: "Începând de la 100$",
    features: ["Interfață intuitivă", "Testare UX", "Design adaptabil"]
  }
];


  const openContactModal = (serviceTitle, servicePrice = "") => {
    let message = "";
    let subject = "";

    if (serviceTitle === "Demarare proiect") {
      subject = "Solicitare demarare proiect personalizat";
      message =
        "Salut,\n\nAș dori să discutăm despre un proiect personalizat. Sunt interesat să aflu mai multe detalii despre serviciile oferite și să stabilim cea mai bună soluție pentru nevoile mele.\n\nVă mulțumesc și aștept răspunsul dumneavoastră.";
    } else {
      subject = `Solicitare oferta: ${serviceTitle}`;
      message = `Salut,\n\nSunt interesat de serviciul: ${serviceTitle} (${servicePrice}).\n\nAș dori să primesc mai multe detalii despre:\n- Procesul de lucru\n- Timpul de livrare\n- Costurile exacte\n- Pașii următori\n\nVă mulțumesc și aștept răspunsul dumneavoastră.`;
    }

    setFormData({
      prenume: "",
      nume: "",
      email: "",
      subiect: subject,
      mesaj: message
    });
    setIsModalOpen(true);
  };

  const showError = (message: string) => {
    setErrorMessage(message);
    setShowErrorPopup(true);
    setTimeout(() => setShowErrorPopup(false), 5000);
  };

  const showSuccess = () => {
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 4000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.prenume || !formData.nume || !formData.email || !formData.mesaj) {
      showError("Te rog completează toate câmpurile înainte de a trimite mesajul.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showError("Te rog introdu o adresă de email validă.");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: `${formData.prenume} ${formData.nume}`.trim(),
        from_email: formData.email,
        subject: formData.subiect,
        message: formData.mesaj,
        to_name: "Ivan Florea",
        reply_to: formData.email
      };

      await Promise.race([
        emailjs.send("service_pd8uldq", "template_gw3hbvo", templateParams, "al2dAZkEl_lFl3Bxq"),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 10000))
      ]);

      showSuccess();

      setFormData({
        prenume: "",
        nume: "",
        email: "",
        subiect: "",
        mesaj: ""
      });
      setIsModalOpen(false);
    } catch (error: any) {
      if (error.text && error.text.includes("quota")) {
        showError("Serviciul de email este temporar indisponibil. Te rog trimite-mi un email direct la floreaivan2003@yahoo.ro");
      } else if (error.text && error.text.includes("rate")) {
        showError("Prea multe cereri. Te rog încearcă din nou peste câteva minute.");
      } else if (error.message === "Timeout") {
        showError("Conexiunea a expirat. Te rog verifică conexiunea la internet și încearcă din nou.");
      } else {
        showError("A apărut o eroare la trimiterea mesajului. Te rog trimite-mi un email direct la floreaivan2003@yahoo.ro");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Servicii oferite</h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ofer soluții digitale complete pentru a transforma ideile tale în realitate, folosind tehnologii de ultimă generație și design modern.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 
                           transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 overflow-hidden 
                           flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-lg mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-semibold text-white">{service.price}</span>
                    <Button
                      size="sm"
                      className="bg-transparent border border-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                      onClick={() => openContactModal(service.title, service.price)}
                    >
                      Solicită oferta
                    </Button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-600/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-white">Ai nevoie de o soluție personalizată?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Fiecare proiect este unic. Hai să discutăm cerințele tale specifice și să creăm o soluție personalizată care să se potrivească perfect nevoilor tale.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group text-white"
                onClick={() => openContactModal("Demarare proiect")}
              >
                <span className="relative z-10">Demarează proiectul</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-2xl max-h-[90vh] overflow-hidden border border-gray-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">Trimite mesaj</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-4" ref={formRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="prenume"
                    placeholder="Prenume *"
                    value={formData.prenume}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                  />
                  <input
                    type="text"
                    name="nume"
                    placeholder="Nume *"
                    value={formData.nume}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                />

                <input
                  type="text"
                  name="subiect"
                  placeholder="Subiect"
                  value={formData.subiect}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                />

                <textarea
                  name="mesaj"
                  placeholder="Mesaj *"
                  value={formData.mesaj}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none disabled:opacity-50"
                />

                <div className="flex items-center p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="text-yellow-400 mr-3">⚡</div>
                  <p className="text-yellow-200 text-sm">Pentru a evita spam-ul, se poate trimite maximum un mesaj la câteva minute.</p>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-sm text-blue-300">
                    💡 <strong>Alternativă:</strong> Dacă formularul nu funcționează, trimite-mi direct un email la{" "}
                    <a href="mailto:floreaivan2003@yahoo.ro" className="underline hover:text-blue-200 transition-colors">
                      floreaivan2003@yahoo.ro
                    </a>
                  </p>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
