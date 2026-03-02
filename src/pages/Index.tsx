import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import CursorGlow from "@/components/CursorGlow";
import { Vortex } from "@/components/ui/vortex";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-45">
        <Vortex
          particleCount={220}
          rangeY={700}
          baseHue={28}
          baseSpeed={0.03}
          rangeSpeed={0.45}
          baseRadius={0.7}
          rangeRadius={1.8}
          backgroundColor="transparent"
          containerClassName="h-full w-full"
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-background/62" />

      <CursorGlow />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
