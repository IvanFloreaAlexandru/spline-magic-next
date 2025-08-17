import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "floreaivan2003@yahoo.ro",
      href: "mailto:floreaivan2003@yahoo.ro"
    },
    {
      icon: Phone,
      title: "Telefon", 
      content: "+40754452341",
      href: "tel:+40754452341"
    },
    {
      icon: MapPin,
      title: "Locație",
      content: "Botoșani, România",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-15"></div>
      <div className="absolute inset-0"></div>
      <div className="relative w-full flex justify-center my-20">
        <div
          className="h-[2px] w-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,1) 70%, rgba(59,130,246,0) 100%)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        ></div>
      </div>
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: "url('/images/textura.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.25,
        }}
      ></div>

      {/* Overlay textură sidefat */}
      <div
        className="absolute inset-0 z-15 pointer-events-none"
        style={{
          backgroundImage: "url('/images/overlay.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          opacity: 0.05,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contactează-mă</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-white">
            Ai un proiect în minte? Hai să discutăm cum putem colabora pentru a transforma ideile tale în realitate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Discutăm despre tot!</h3>
              <p className="text-muted-foreground mb-8 text-white">
                Nu-ți plac formularele? Trimite-mi un email. 👋
              </p>
            </div>

            {/* Mobile-specific layout */}
            <div className="sm:hidden space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.slice(0, 2).map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-accent hover-lift group relative overflow-hidden"
                  >
                    <div className="flex-shrink-0 relative z-10 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="relative z-10 text-center">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
              {(() => {
                const LocationIcon = contactInfo[2].icon;
                return (
                  <a
                    key={contactInfo[2].title}
                    href={contactInfo[2].href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-accent hover-lift group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <LocationIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {contactInfo[2].title}
                      </h4>
                      <p className="text-muted-foreground">{contactInfo[2].content}</p>
                    </div>
                  </a>
                );
              })()}
            </div>

            {/* Desktop-specific layout */}
            <div className="hidden sm:block space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-accent hover-lift group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 gradient-mesh opacity-20"></div>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    Prenume
                  </label>
                  <Input id="firstName" placeholder="John" className="bg-background border-border focus:border-primary transition-colors duration-300" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Nume
                  </label>
                  <Input id="lastName" placeholder="Doe" className="bg-background border-border focus:border-primary transition-colors duration-300" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border focus:border-primary transition-colors duration-300" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subiect
                </label>
                <Input id="subject" placeholder="Titlul proiectului" className="bg-background border-border focus:border-primary transition-colors duration-300" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesaj
                </label>
                <Textarea id="message" placeholder="Spune-ne despre proiectul tău..." rows={4} className="bg-background border-border focus:border-primary transition-colors duration-300 resize-none" />
              </div>

              <Button
                type="button"
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 hover-lift group relative overflow-hidden"
                onClick={(e) => {
                  e.preventDefault();
                  const firstName = (document.getElementById("firstName") as HTMLInputElement)?.value || "";
                  const lastName = (document.getElementById("lastName") as HTMLInputElement)?.value || "";
                  const email = (document.getElementById("email") as HTMLInputElement)?.value || "";
                  const subject = (document.getElementById("subject") as HTMLInputElement)?.value || "";
                  const message = (document.getElementById("message") as HTMLTextAreaElement)?.value || "";

                  const mailtoLink = `mailto:floreaivan2003@yahoo.ro?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                    `Prenume: ${firstName}\nNume: ${lastName}\nEmail: ${email}\n\nMesaj:\n${message}`
                  )}`;

                  window.location.href = mailtoLink;
                }}
              >
                <span className="relative z-10">Trimite email</span>
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
