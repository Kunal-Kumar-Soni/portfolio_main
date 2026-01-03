import AboutSection from "@/components/home/about-section";
import ExperienceSection from "@/components/home/experience-section";
import GithubActivity from "@/components/home/github-section";
import HeroSection from "@/components/home/hero-section";
import ProjectSection from "@/components/home/project-section";
import SkillSection from "@/components/home/skills-section";

const page = () => {
  return (
    <div className="bg-background fill-mode-both py-15 sm:py-20 w-full font-geistMono text-foreground animate-in duration-700 ease-linear fade-in">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <AboutSection />
      <SkillSection />
      <GithubActivity />
    </div>
  );
};

export default page;
