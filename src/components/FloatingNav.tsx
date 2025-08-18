import { Button } from "@/components/ui/button";

export default function FloatingNav() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 fade-in">
      <div className="glass-card rounded-full px-6 py-3 floating-animation">
        <div className="flex items-center space-x-6">
          <div className="gradient-text font-bold text-lg">3D Portfolio</div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-accent/20">
              Acasă
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent/20">
              Despre
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent/20">
              Proiecte
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent/20">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}