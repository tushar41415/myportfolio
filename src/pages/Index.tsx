import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import CursorGlow from "@/components/CursorGlow";
import Prism from "@/components/Prism";

const Index = () => {
  const [enablePrism, setEnablePrism] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px), (prefers-reduced-motion: reduce)");
    const isLowPowerDevice = (navigator.hardwareConcurrency || 8) <= 6;

    const updatePrismState = () => {
      setEnablePrism(!media.matches && !isLowPowerDevice);
    };

    updatePrismState();
    media.addEventListener("change", updatePrismState);

    return () => {
      media.removeEventListener("change", updatePrismState);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {enablePrism && (
        <div className="pointer-events-none fixed inset-0 z-0 opacity-35">
          <Prism
            animationType="rotate"
            glow={0.9}
            noise={0.18}
            transparent
            scale={3.2}
            hueShift={0.22}
            colorFrequency={0.85}
            bloom={0.9}
            timeScale={0.35}
          />
        </div>
      )}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-background/66" />

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
