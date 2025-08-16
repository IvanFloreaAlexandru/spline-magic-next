import { useState } from "react";
// Importă pictogramele necesare din lucide-react
import { Home, User, Wrench, Briefcase, Pencil, Mail } from "lucide-react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home"); // Starea pentru elementul activ

  // Obiectul cu elementele de navigare, fiecare având o pictogramă și un link
  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About me", icon: User, href: "#about" },
    { name: "Services", icon: Wrench, href: "#services" },
    { name: "Portfolio", icon: Briefcase, href: "#portfolio" },
    { name: "Edit", icon: Pencil, href: "#edit" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
<nav className="fixed top-4 left-4 right-4 z-50 flex justify-center">
      {/* Bara de navigare cu fundalul și colțurile rotunjite */}
    <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center h-16 px-2 space-x-2">
        {navItems.map((item) => {
          const isActive = item.name === activeItem;
          const IconComponent = item.icon; // Am extras componenta pictogramă

          return (
            <a
              key={item.name}
              href={item.href}
              className={`p-3 rounded-xl transition-all duration-300
                ${isActive ? "bg-blue-600" : "hover:bg-blue-600"}
              `}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.name);
                const target = document.querySelector(item.href);
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <IconComponent
                className={`w-6 h-6 stroke-2 ${
                  isActive ? "text-white" : "text-white group-hover:text-white"
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}