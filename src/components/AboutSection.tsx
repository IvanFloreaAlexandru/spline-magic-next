import { Code, Monitor, Globe } from "lucide-react";

export default function AboutSection() {
  const skills = [
    {
      icon: Globe,
      title: "Web Design",
      description: "Crearea de design-uri atractive și funcționale care captează atenția utilizatorilor"
    },
    {
      icon: Code,
      title: "Web Development", 
      description: "Crearea de aplicații web responsive și performante"
    },
    {
      icon: Monitor,
      title: "Backend Development",
      description: "Crearea de backend-uri robuste care asigură performanță, securitate și integrare eficientă cu aplicațiile front-end"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative overflow-hidden font-quicksand">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      <div className="absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>
            
            <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed text-white">
            <span className="block indent-8">
              Mă numesc <span className="text-primary font-semibold">Florea</span>, am <span className="text-primary font-semibold">22 de ani</span> și sunt un pasionat dedicat domeniului IT, cu un interes puternic pentru tot ce ține de digital: 
              <span className="text-primary"> programare</span>, <span className="text-primary">editare video</span> și <span className="text-primary">audio</span>, dezvoltare software și tehnologii emergente.
            </span>

            <span className="block indent-8">
              Gamer înrăit și curios din fire, îmi place să explorez, să experimentez și să învăț continuu.
            </span>

            <span className="block indent-8">
              Sunt student în anul III la <span className="font-semibold text-white">Facultatea de Inginerie Electrică și Știința Calculatoarelor</span> și îmi propun să mă implic în cât mai multe proiecte pentru a-mi dezvolta competențele, a depăși provocările și a-mi depăși propriile așteptări.
            </span>

            <span className="block indent-8">
              Motivat de <span className="text-primary font-semibold">inovație</span> și <span className="text-primary font-semibold">progres</span>, îmi doresc să contribui activ în echipe și inițiative ce au un impact real.
            </span>
          </p>

          </div>

          {/* Right Content - Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group p-6  rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-accent hover-lift fade-in relative overflow-hidden"
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
