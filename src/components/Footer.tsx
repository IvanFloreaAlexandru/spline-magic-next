import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "Linkedin" },
    { icon: Github, href: "#", label: "Github" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Text / Logo */}
          <div className="text-white text-lg font-semibold">Connect with me</div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-glow-accent"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 stroke-[2.5]" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm text-white">
            © {new Date().getFullYear()} Florea. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
