import { useState } from "react";
import { Home, User, Wrench, Briefcase, Pencil, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About me", icon: User, href: "#about" },
    { name: "Services", icon: Wrench, href: "#services" },
    { name: "Portfolio", icon: Briefcase, href: "#portfolio" },
    { name: "Edit", icon: Pencil, href: "#edit" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  const handleClick = (item) => {
    setActiveItem(item.name);
    const target = document.querySelector(item.href);
    target?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Container (hidden on large screens) */}
      <div
        className={`fixed top-4 right-4 z-50 sm:hidden transition-all duration-300 ${
          isOpen ? "" : "transform translate-x-full opacity-0"
        }`}
      >
        <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = item.name === activeItem;
              const IconComponent = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                    isActive ? "bg-blue-600" : "hover:bg-blue-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item);
                  }}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                  <span className="ml-2 text-white text-sm font-medium">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hamburger Button (fixed top-right) */}
      <button
        className="fixed top-4 right-4 z-[60] sm:hidden p-2 bg-gray-800/90 backdrop-blur-md rounded-full shadow-xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Desktop Menu Container */}
      <nav className="hidden sm:flex fixed bottom-4 sm:top-4 inset-x-4 z-50 justify-center">
        <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center h-16 px-4">
          <div className="flex space-x-2 justify-center">
            {navItems.map((item) => {
              const isActive = item.name === activeItem;
              const IconComponent = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                    isActive ? "bg-blue-600" : "hover:bg-blue-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item);
                  }}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <span className="ml-2 text-white text-sm font-medium">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}