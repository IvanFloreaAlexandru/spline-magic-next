import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      tags: ["React", "TypeScript", "Tailwind"],
      gradient: "from-blue-500/20 to-purple-600/20"
    },
    {
      id: 2,
      title: "Project Two", 
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      tags: ["Next.js", "Node.js", "MongoDB"],
      gradient: "from-purple-500/20 to-pink-600/20"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit", 
      image: "bg-gradient-to-br from-green-500 to-blue-600",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      gradient: "from-green-500/20 to-blue-600/20"
    },
    {
      id: 4,
      title: "Project Four",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "bg-gradient-to-br from-orange-500 to-red-600", 
      tags: ["React Native", "Firebase", "Redux"],
      gradient: "from-orange-500/20 to-red-600/20"
    },
    {
      id: 5,
      title: "Project Five",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600", 
      tags: ["Vue.js", "Laravel", "MySQL"],
      gradient: "from-cyan-500/20 to-blue-600/20"
    },
    {
      id: 6,
      title: "Project Six",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "bg-gradient-to-br from-rose-500 to-pink-600", 
      tags: ["Angular", "Express", "PostgreSQL"],
      gradient: "from-rose-500/20 to-pink-600/20"
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);
  const hasMoreProjects = projects.length > 4;

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute inset-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Proiecte</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-white">
            Descoperiți cum transform ideile în aplicații și site-uri funcționale.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-glow-intense hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black hover-lift"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 hover-lift"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-white text-sm">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Projects Button */}
        {hasMoreProjects && (
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift relative overflow-hidden group"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAllProjects ? (
                  <>
                    Ascunde proiectele
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                  Vezi toate proiectele
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}