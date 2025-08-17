import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const templateParams = {
        from_name: `${formData.get("firstName")?.toString().trim() || ""} ${formData.get("lastName")?.toString().trim() || ""}`,
        from_email: formData.get("email")?.toString().trim() || "",
        subject: formData.get("subject")?.toString().trim() || "",
        message: formData.get("message")?.toString().trim() || "",
        to_email: "floreaivan2003@yahoo.ro",
      };

      // Validare câmpuri
      if (!templateParams.from_name || !templateParams.from_email || !templateParams.subject || !templateParams.message) {
        toast.error("Te rog completează toate câmpurile înainte de a trimite mesajul.");
        setIsSubmitting(false);
        return;
      }

      console.log("Trimitem următoarele date către EmailJS:", templateParams);

      await emailjs.send(
        "service_rey3qdj",        // ID serviciu EmailJS
        "template_gw3hbvo",       // ID template
        templateParams,
        "al2dAZkEl_lFl3Bxq"       // Public Key EmailJS
      );

      toast.success("Mesajul a fost trimis cu succes!");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Eroare completă la trimiterea email-ului:", error);
      toast.error("A apărut o eroare la trimiterea mesajului. Te rog încearcă din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-15"></div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <h3 className="text-2xl font-semibold mb-6">Discutăm despre tot!</h3>
            <p className="text-muted-foreground mb-8 text-white">Nu-ți plac formularele? Trimite-mi un email. 👋</p>

            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-accent hover-lift group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{info.title}</h4>
                  <p className="text-muted-foreground">{info.content}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="firstName" placeholder="Prenume" />
                <Input name="lastName" placeholder="Nume" />
              </div>
              <Input name="email" type="email" placeholder="Email" />
              <Input name="subject" placeholder="Subiect" />
              <Textarea name="message" placeholder="Mesaj" rows={4} />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Se trimite..." : "Trimite"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
