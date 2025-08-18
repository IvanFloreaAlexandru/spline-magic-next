import React, { useState } from "react";
import { ExternalLink, Github, Globe, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Platformă de comerț electronic completă cu sistem de plăți integrat și management de produse.",
      image: "/images/profil.jpg", // Placeholder - poți înlocui cu imagini reale
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Travel Booking App",
      description: "Aplicație de rezervări pentru călătorii cu integrare Google Maps și sistem de recenzii.",
      image: "/images/profil.jpg",
      tech: ["Vue.js", "Express", "PostgreSQL", "Maps API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Site web personal responsive cu animații și design modern pentru un artist.",
      image: "/images/profil.jpg",
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "Instrument de management pentru echipe cu funcții de colaborare în timp real.",
      image: "/images/profil.jpg",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Restaurant App",
      description: "Aplicație pentru restaurante cu meniu digital și sistem de comenzi online.",
      image: "/images/profil.jpg",
      tech: ["React Native", "Node.js", "MongoDB", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Learning Platform",
      description: "Platformă de învățare online cu progres tracking și quizuri interactive.",
      image: "/images/profil.jpg",
      tech: ["Next.js", "Prisma", "NextAuth", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const shouldShowToggle = projects.length > 4;

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

      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background și overlay-uri */}
        <div className="absolute inset-0 pattern-grid opacity-5"></div>
        <div className="absolute inset-0"></div>

        {/* Header */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Portofoliu</h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Iată câteva dintre proiectele mele recente care demonstrează abilitățile și creativitatea mea în dezvoltarea web.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button
                        size="sm"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 md:p-6">
                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-transparent border border-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 flex-1 md:flex-none"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">Vezi proiectul</span>
                        <span className="sm:hidden">Vezi</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Toggle Button */}
          {shouldShowToggle && (
            <div className="text-center">
              <Button
                onClick={() => setShowAll(!showAll)}
                className="bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:bg-blue-500 hover:text-white transition-all duration-300 px-6 py-2"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Afișează mai puțin
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Vezi toate proiectele
                  </>
                )}
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* Bara de separare DUPĂ secțiune */}
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
