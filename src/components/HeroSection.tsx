import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SiGmail } from "react-icons/si";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  const handleOpenLink = (url: string) => {
    window.open(url, "_blank");
  };

  const handleMailto = () => {
    window.location.href = "mailto:floreaivan2003@yahoo.ro";
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/20 pointer-events-none"></div>

      {/* Overlay grain */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: "url('/images/textura.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.25,
        }}
      ></div>

      {/* Overlay sidefat */}
      <div
        className="absolute inset-0 z-15 pointer-events-none"
        style={{
          backgroundImage: "url('/images/overlay.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          opacity: 0.05,
        }}
      ></div>

      {/* Conținut */}
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stânga */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hi, I'm{" "}
                <span className="bg-blue-600 bg-clip-text text-transparent">
                  Florea
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold">Web Developer</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group relative overflow-hidden"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10 text-white">View Work</span>
                <ArrowRight className="text-white ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border border-primary text-white hover:bg-primary hover:text-white transition-all duration-300 group relative overflow-hidden"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform text-white" />
                  <span>Download CV</span>
                </Button>
            </div>

            {/* Desktop Additional Info */}
            <div className="mt-8 hidden sm:flex flex-col sm:flex-row gap-8 justify-center lg:justify-start bg-card/30 backdrop-blur-sm border border-border rounded-2xl px-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground text-white">
                  Ani de experiență
                </div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground text-white">
                  Proiecte realizate
                </div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground text-white">
                  Clienți mulțumiți
                </div>
              </div>
            </div>
          </div>

          {/* Dreapta - Imaginea de profil */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 h-[550px] bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 overflow-hidden p-6">
              <div className="flex justify-center">
                <div className="w-80 h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/profil.jpg"
                    alt="Florea profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Social & CTA */}
              <div className="mt-1 text-center space-y-3">
                <div className="flex w-full justify-between max-w-[320px] mx-auto mt-4">
                  <a
                    href="https://www.facebook.com/ivanfloreaalexandru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center bg-transparent text-white transition-colors duration-300 hover:text-blue-500"
                  >
                    <Facebook className="h-5 w-5 stroke-current" />
                  </a>

                  <a
                    href="https://www.instagram.com/florea001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center bg-transparent text-white transition-colors duration-300 hover:text-blue-500"
                  >
                    <Instagram className="h-5 w-5 stroke-current" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/florea-alexandru-ivan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center bg-transparent text-white transition-colors duration-300 hover:text-blue-500"
                  >
                    <Linkedin className="h-5 w-5 stroke-current" />
                  </a>

<Button
  onClick={() => setOpen(true)}
  className="flex-1 flex justify-center items-center bg-transparent hover:bg-transparent text-white transition-colors duration-300 hover:text-blue-500"
>
  <Mail className="h-5 w-5 stroke-current transition-colors duration-300" />
</Button>
                </div>

                <Button
                  onClick={() => setOpen(true)}
                  className="mt-4 w-full bg-transparent text-white border border-white font-medium py-2 px-4 rounded-xl transition-colors duration-300 hover:bg-blue-500 hover:text-white flex items-center justify-center gap-2"
                >
                  Let’s Talk
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Additional Info */}
          <div className="mt-8 sm:hidden flex flex-col gap-4 justify-center bg-card/30 backdrop-blur-sm border border-border rounded-2xl px-4 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground text-white">
                Ani de experiență
              </div>
            </div>
            <div className="h-px w-2/3 bg-border mx-auto"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground text-white">
                Proiecte realizate
              </div>
            </div>
            <div className="h-px w-2/3 bg-border mx-auto"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground text-white">
                Clienți mulțumiți
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Dialog Mail */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <SiGmail className="h-5 w-5 text-red-500" />
              Mail
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground mt-2">
            Click the button below to contact me via email.
          </p>
          <Button
            variant="outline"
            className="mt-4 w-full"
            onClick={handleMailto}
          >
            Send Email
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
