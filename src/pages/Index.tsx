import VerticalNav from "@/components/VerticalNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative">
      <VerticalNav />
      <main className="mr-20 lg:mr-24">
        <HeroSection />
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
