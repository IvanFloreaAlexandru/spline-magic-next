import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    { icon: Mail, title: "Email", content: "floreaivan2003@yahoo.ro", href: "mailto:floreaivan2003@yahoo.ro" },
    { icon: Phone, title: "Telefon", content: "+40754452341", href: "tel:+40754452341" },
    { icon: MapPin, title: "Locație", content: "Botoșani, România", href: "#" }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) {
        toast.error("Formularul nu a fost găsit.");
        return;
      }

      const formData = new FormData(formRef.current);

      const templateParams = {
        from_name: `${formData.get("firstName")?.toString().trim() || ""} ${formData.get("lastName")?.toString().trim() || ""}`.trim(),
        from_email: formData.get("email")?.toString().trim() || "",
        subject: formData.get("subject")?.toString().trim() || "",
        message: formData.get("message")?.toString().trim() || "",
        to_name: "Ivan Florea",
        reply_to: formData.get("email")?.toString().trim() || "",
      };

      if (!templateParams.from_name || !templateParams.from_email || !templateParams.subject || !templateParams.message) {
        toast.error("Te rog completează toate câmpurile înainte de a trimite mesajul.");
        setIsSubmitting(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(templateParams.from_email)) {
        toast.error("Te rog introdu o adresă de email validă.");
        setIsSubmitting(false);
        return;
      }

      console.log("Trimitem următoarele date către EmailJS:", templateParams);

      // Send main email
      await Promise.race([
        emailjs.send(
          "service_pd8uldq",
          "template_gw3hbvo",
          templateParams,
          "al2dAZkEl_lFl3Bxq"
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), 10000)
        )
      ]);

      // Send auto-reply email
      const autoReplyParams = {
        to_email: templateParams.from_email,
        to_name: templateParams.from_name,
        from_name: "Ivan Florea",
        message: `Bună ${templateParams.from_name}!

Mulțumesc pentru mesajul tău! Am primit solicitarea ta și îți voi răspunde în cel mai scurt timp posibil.

Detaliile mesajului tău:
- Subiect: ${templateParams.subject}
- Email: ${templateParams.from_email}

Să ai o zi frumoasă!

Cu drag,
Ivan Florea
Web Developer`
      };

      try {
        await emailjs.send(
          "service_pd8uldq",
          "template_autoreply",
          autoReplyParams,
          "al2dAZkEl_lFl3Bxq"
        );
      } catch (autoReplyError) {
        console.log("Auto-reply failed but main email sent:", autoReplyError);
      }

      toast.success("Mesajul a fost trimis cu succes! Ai primit și un email de confirmare.");

      // Resetăm formularul în siguranță
      formRef.current.reset();

    } catch (error: any) {
      console.error("Eroare completă la trimiterea email-ului:", error);

      if (error.text && error.text.includes('quota')) {
        toast.error("Serviciul de email este temporar indisponibil. Te rog trimite-mi un email direct la floreaivan2003@yahoo.ro");
      } else if (error.text && error.text.includes('rate')) {
        toast.error("Prea multe cereri. Te rog încearcă din nou peste câteva minute.");
      } else if (error.message === 'Timeout') {
        toast.error("Conexiunea a expirat. Te rog verifică conexiunea la internet și încearcă din nou.");
      } else {
        toast.error("A apărut o eroare la trimiterea mesajului. Te rog trimite-mi un email direct la floreaivan2003@yahoo.ro");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("floreaivan2003@yahoo.ro");
      toast.success("Email-ul a fost copiat în clipboard!");
    } catch (err) {
      console.error("Nu s-a putut copia email-ul:", err);
      toast.error("Nu s-a putut copia email-ul automat. Email: floreaivan2003@yahoo.ro");
    }
  };

  return (
    <>
      {/* Bara de separare ÎNAINTE de secțiune */}
      <div className="relative w-full flex justify-center">
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

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-15"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Contactează-mă</h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-white">
              Ai un proiect în minte? Hai să discutăm cum putem colabora pentru a transforma ideile tale în realitate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Discutăm despre tot!</h3>
              <p className="text-muted-foreground mb-8 text-white">Nu-ți plac formularele? Trimite-mi un email direct! 👋</p>

              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-accent hover-lift group relative overflow-hidden cursor-pointer"
                  onClick={info.title === "Email" ? copyEmail : undefined}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                    {info.title === "Email" && (
                      <p className="text-xs text-primary mt-1">Click pentru a copia</p>
                    )}
                  </div>
                  {info.href !== "#" && info.title !== "Email" && (
                    <a href={info.href} className="absolute inset-0" aria-label={`Contact via ${info.title}`}></a>
                  )}
                </div>
              ))}

              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-sm text-blue-300">
                  💡 <strong>Alternativă:</strong> Dacă formularul nu funcționează, trimite-mi direct un email la{" "}
                  <button 
                    onClick={copyEmail}
                    className="underline hover:text-blue-200 transition-colors"
                  >
                    floreaivan2003@yahoo.ro
                  </button>
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
              <form ref={formRef} className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="firstName" placeholder="Prenume" required disabled={isSubmitting} />
                  <Input name="lastName" placeholder="Nume" required disabled={isSubmitting} />
                </div>
                <Input name="email" type="email" placeholder="Email" required disabled={isSubmitting} />
                <Input name="subject" placeholder="Subiect" required disabled={isSubmitting} />
                <Textarea name="message" placeholder="Mesaj" rows={4} required disabled={isSubmitting} />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                </Button>
              </form>

              <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <p className="text-xs text-amber-300">
                  ⚡ Pentru a evita spam-ul, se poate trimite maximum un mesaj la câteva minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bara de separare DUPĂ secțiune (opțional) */}
      <div className="relative w-full flex justify-center">
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
    </>
  );
}