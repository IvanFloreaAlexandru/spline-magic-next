import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function EducationSection() {
  const education = [
    {
      id: 1,
      degree: "Calculatoare",
      institution: "Universitatea 'Ștefan cel Mare' din Suceava",
      location: "Suceava, România",
      period: "2023 - 2027",
      status: "În desfășurare",
      description:
        "Profil Matematică-Informatică, specializare intensiv informatică",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      degree: "Dual USV",
      institution: "Colegiul Tehnic 'Samuil Isopescu' - Assist Software",
      location: "Suceava, România",
      period: "2023 - 2025",
      status: "Absolvit",
      description:
        "Specializare în dezvoltare software, algoritmi și structuri de date, baze de date, programare orientată pe obiecte",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      degree: "Formare psihopedagogică",
      institution: "Universitatea 'Ștefan cel Mare' din Suceava",
      location: "Suceava, România",
      period: "2024 - 2026",
      status: "În desfășurare",
      description:
        "Profil Matematică-Informatică, specializare intensiv informatică",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      id: 4,
      degree: "Matematică-Informatică",
      institution: "Liceul Tehnologic Bucecea",
      location: "Botoșani, România",
      period: "2019 - 2023",
      status: "Absolvit",
      description:
        "Profil Matematică-Informatică, specializare intensiv informatică",
      gradient: "from-indigo-500 to-cyan-500",
    },
  ];

  // Map pentru culorile status-ului
  const statusColors = {
    "În desfășurare": {
      border: "border-orange-400",
      bg: "bg-orange-500/20",
      text: "text-orange-400",
    },
    Absolvit: {
      border: "border-green-400",
      bg: "bg-green-500/20",
      text: "text-green-400",
    },
    Planificat: {
      border: "border-blue-400",
      bg: "bg-blue-500/20",
      text: "text-blue-400",
    },
    Default: {
      border: "border-gray-400",
      bg: "bg-gray-500/20",
      text: "text-gray-400",
    },
  };

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
      if (item) observer.observe(item);
    });

    return () => {
      timelineItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section
      id="education"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-quicksand"
    >
      {/* Linie decorativă */}
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

      {/* Overlay texturi */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: "url('/images/textura.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.25,
        }}
      ></div>
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
        {/* Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Educație
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Parcursul meu educațional și formarea academică
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-primary opacity-30 z-0"></div>

          {education.map((item, index) => {
            const isEven = index % 2 === 0;
            const cardClass = isEven
              ? "sm:ml-0 sm:mr-[50%]"
              : "sm:mr-0 sm:ml-[50%]";
            const colors = statusColors[item.status] || statusColors.Default;

            return (
              <div
                key={item.id}
                ref={(el) => (timelineItemsRef.current[index] = el)}
                className={`group relative mb-8 flex items-center w-full fade-in-up transform-gpu ${
                  isEven ? "justify-start" : "justify-end"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Punct pe timeline */}
                <div
                  className={`absolute top-0 flex flex-col items-center justify-center h-full z-10 left-1/2 -translate-x-1/2`}
                >
                  <div className="relative w-full flex items-center justify-center">
                    <div className="absolute h-px bg-gradient-primary transition-all duration-500 group-hover:w-16 w-8"></div>
                    <div
                      className={`relative w-4 h-4 rounded-full border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-125 z-20 bg-gradient-to-r ${item.gradient}`}
                    ></div>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`w-full sm:w-1/2 p-4 md:p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-border/50 shadow-xl
                  hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 relative overflow-hidden z-20 ${cardClass}`}
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${item.gradient}`}
                  ></div>

                  <div className="relative z-10">
                    {/* Header card */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${item.gradient}`}
                          >
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                              {item.degree}
                            </h3>
                            <p
                              className={`text-base md:text-lg font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mt-1`}
                            >
                              {item.institution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="flex-shrink-0">
                        <span
                          className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${colors.border} ${colors.bg} ${colors.text}`}
                        >
                          <Sparkles
                            className={`w-3 h-3 mr-1 ${colors.text}`}
                          />
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Detalii */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm md:text-base font-medium">
                          {item.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm md:text-base">
                          {item.location}
                        </span>
                      </div>
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
