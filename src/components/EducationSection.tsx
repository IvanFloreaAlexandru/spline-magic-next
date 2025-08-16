import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function EducationSection() {
  const education = [
    {
      id: 1,
      degree: "Licență în Inginerie Electrică și Știința Calculatoarelor",
      institution: "Universitatea Tehnică din Cluj-Napoca",
      location: "Cluj-Napoca, România",
      period: "2022 - 2025",
      status: "În desfășurare",
      description: "Specializare în dezvoltare software, algoritmi și structuri de date, baze de date, programare orientată pe obiecte",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      degree: "Diplomă de Bacalaureat",
      institution: "Liceul Teoretic Nicolae Iorga",
      location: "Brăila, România",
      period: "2018 - 2022",
      status: "Absolvit",
      description: "Profil Matematică-Informatică, specializare intensiv informatică",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  // This effect handles the fade-in animation for each timeline item
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      timelineItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <section id="education" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden font-quicksand">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Educație
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Parcursul meu educațional și formarea academică
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-primary opacity-30 z-0"></div>

          {education.map((item, index) => {
            const isEven = index % 2 === 0;
            const cardClass = isEven ? 'sm:ml-0 sm:mr-[50%]' : 'sm:mr-0 sm:ml-[50%]';
            const dotClass = isEven ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2';
            const lineClass = isEven ? 'w-8 h-px right-full mr-2' : 'w-8 h-px left-full ml-2';

            return (
              <div
                key={item.id}
                ref={(el) => (timelineItemsRef.current[index] = el)}
                className={`group relative mb-8 flex items-center w-full fade-in-up transform-gpu ${isEven ? 'justify-start' : 'justify-end'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot and Connector Line */}
                <div
                  className={`absolute top-0 flex flex-col items-center justify-center h-full z-10 ${dotClass}`}
                >
                  <div className="relative w-full flex items-center justify-center">
                    <div className={`absolute h-px bg-gradient-primary transition-all duration-500 group-hover:w-16 ${isEven ? 'w-8' : 'w-8'}`}></div>
                    <div className={`relative w-4 h-4 rounded-full border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-125 z-20 bg-gradient-to-r ${item.gradient}`}></div>
                  </div>
                </div>

                {/* Education Card */}
                <div
                  className={`w-full sm:w-1/2 p-4 md:p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-border/50 shadow-xl
                  hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 relative overflow-hidden z-20 ${cardClass}`}
                >
                  {/* Subtle background glow on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${item.gradient}`}></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${item.gradient}`}>
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                              {item.degree}
                            </h3>
                            <p className={`text-base md:text-lg font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mt-1`}>
                              {item.institution}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium border border-primary/30 backdrop-blur-sm bg-primary/20 text-primary`}>
                          <Sparkles className="w-3 h-3 mr-1 text-yellow-400" />
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      {/* Period */}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm md:text-base font-medium">{item.period}</span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm md:text-base">{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

