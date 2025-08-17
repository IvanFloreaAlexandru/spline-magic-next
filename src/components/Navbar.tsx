  import { useState, useEffect } from "react";
  import { Home, User, Wrench, Briefcase, Pencil, Mail, Menu, X } from "lucide-react";

  export default function Navbar() {
    const [activeItem, setActiveItem] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
      { name: "Home", icon: Home, href: "#home" },
      { name: "About me", icon: User, href: "#about" },
      { name: "Services", icon: Wrench, href: "#services" },
      { name: "Portfolio", icon: Briefcase, href: "#portfolio" },
      { name: "Educatie", icon: Pencil, href: "#education" },
      { name: "Contact", icon: Mail, href: "#contact" },
    ];

    const handleClick = (item) => {
      setActiveItem(item.name);
      const target = document.querySelector(item.href);
      target?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    };

    // Detectare secțiune activă la scroll
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              const foundItem = navItems.find((item) => item.href === `#${id}`);
              if (foundItem) {
                setActiveItem(foundItem.name);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.3, // 60% din secțiune vizibilă => activă
        }
      );

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    }, []);

    return (
      <>
        {/* Hamburger Button */}
        <button
          className="fixed top-4 right-4 z-50 sm:hidden p-2 bg-gray-800/80 backdrop-blur-md rounded-full shadow-xl transition-transform hover:scale-110 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-16 right-4 z-40 sm:hidden flex flex-col gap-2 transition-all duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {navItems.map((item) => {
            const isActive = item.name === activeItem;
            const IconComponent = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
                className={`flex items-center p-3 rounded-xl text-white font-medium text-sm transition-all duration-300 transform ${
                  isActive
                    ? "bg-blue-600 scale-105"
                    : "hover:bg-blue-600 hover:scale-105"
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-30 bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl px-4 py-2">
          <div className="flex space-x-2">
            {navItems.map((item) => {
              const isActive = item.name === activeItem;
              const IconComponent = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item);
                  }}
                  className={`flex items-center p-3 rounded-xl text-white font-medium text-sm transition-all duration-300 transform ${
                    isActive
                      ? "bg-blue-600 scale-105"
                      : "hover:bg-blue-600 hover:scale-105"
                  }`}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  {item.name}
                </a>
              );
            })}
          </div>
        </nav>
      </>
    );
  }
