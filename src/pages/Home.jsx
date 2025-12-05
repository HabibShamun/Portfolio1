import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Add data-aos attributes to sections */}
        <HeroSection data-aos="fade-up" />
        <AboutSection data-aos="fade-right" />
        <SkillsSection data-aos="zoom-in" />
        <ProjectsSection data-aos="fade-left" />
        <ContactSection data-aos="fade-up" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
