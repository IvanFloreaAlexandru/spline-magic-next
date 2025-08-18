import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import PortfolioSection from "@/components/PortfolioSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* Background global */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/20 pointer-events-none"></div>

      {/* Conținutul site-ului */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <PortfolioSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
