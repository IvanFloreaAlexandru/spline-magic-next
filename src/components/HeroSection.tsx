import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black"
    >
      {/* Overlay grain */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/textura.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.35,
        }}
      ></div>

      {/* Overlay textură sidefat (opțional) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
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
          <div className="space-y-8 text-center lg:text-center">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hi, I'm{" "}
                <span className="bg-blue-600 bg-clip-text text-transparent">
                  Florea
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold">Web Developer</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-primary transition-all duration-300 group hover-lift relative overflow-hidden"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">View Work</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift group relative overflow-hidden"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                <span>Download CV</span>
              </Button>
            </div>
            
            {/* Desktop-specific Additional Info */}
            <div className="mt-8 hidden sm:flex flex-col sm:flex-row gap-8 justify-center lg:justify-start bg-card/30 backdrop-blur-sm border border-border rounded-2xl px-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground text-white">Ani de experiență</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground text-white">Proiecte realizate</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground text-white">Clienți mulțumiți</div>
              </div>
            </div>
          </div>
          
          {/* Dreapta - Imaginea de profil */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-2 border-gray-300">
                <img
                  src="/images/profil.jpg"
                  alt="Florea profile picture"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile-specific Additional Info */}
          <div className="mt-8 sm:hidden flex flex-col gap-4 justify-center bg-card/30 backdrop-blur-sm border border-border rounded-2xl px-4 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground text-white">Ani de experiență</div>
            </div>
            <div className="h-px w-2/3 bg-border mx-auto"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground text-white">Proiecte realizate</div>
            </div>
            <div className="h-px w-2/3 bg-border mx-auto"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground text-white">Clienți mulțumiți</div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}
