import { SplashScreen } from "@/components/common/SplashScreen";
import { ScrollProgressBar } from "@/components/common/ScrollProgressBar";
import { CursorGlow } from "@/components/common/CursorGlow";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      <SplashScreen />
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />

      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
