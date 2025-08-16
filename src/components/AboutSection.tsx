import { Code, Monitor, Globe, User, Gamepad, GraduationCap } from "lucide-react";

export default function AboutSection() {
  const skills = [
    {
      icon: Globe,
      title: "Web Design",
      description: "Crearea de design-uri atractive și funcționale care captează atenția utilizatorilor."
    },
    {
      icon: Code,
      title: "Web Development", 
      description: "Crearea de aplicații web responsive și performante."
    },
    {
      icon: Monitor,
      title: "Backend Development",
      description: "Crearea de backend-uri robuste care asigură performanță, securitate și integrare eficientă cu aplicațiile front-end."
    }
  ];

  const aboutPoints = [
    {
      icon: User,
      title: "Cine sunt?",
      description: "Mă numesc Florea, am 22 de ani și sunt un pasionat al domeniului IT, cu un interes puternic pentru tot ce ține de digital: programare, editare video și audio, dezvoltare software și tehnologii emergente."
    },
    {
      icon: Gamepad,
      title: "Pasiuni",
      description: "Gamer înrăit și curios din fire, îmi place să explorez, să experimentez și să învăț continuu."
    },
    {
      icon: GraduationCap,
      title: "Educație & Obiective",
      description: "Sunt student în anul III la Facultatea de Inginerie Electrică și Știința Calculatoarelor și îmi propun să mă implic în cât mai multe proiecte pentru a-mi dezvolta competențele, a depăși provocările și a-mi depăși propriile așteptări. Motivat de inovație și progres, îmi doresc să contribui activ în echipe și inițiative ce au un impact real."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative overflow-hidden font-quicksand">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      <div className="absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Titlul "About Me" */}
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">Despre mine</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        {/* Grila cu conținutul principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Content - Card unic, mare */}
          <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-accent hover-lift fade-in relative overflow-hidden space-y-4 flex flex-col justify-around">
            {aboutPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary underline underline-offset-4 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-white">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-accent hover-lift fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary underline underline-offset-4 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-white">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
