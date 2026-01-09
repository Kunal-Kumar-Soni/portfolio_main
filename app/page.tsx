import Container from "@/components/common/Container";
import AboutSection from "@/components/home/about-section";
import ExperienceSection from "@/components/home/experience-section";
import GithubActivity from "@/components/home/github-section";
import HeroSection from "@/components/home/hero-section";
import PersonalSection from "@/components/home/personal-section";
import ProjectSection from "@/components/home/project-section";
import SkillSection from "@/components/home/skills-section";
import TechBadges from "@/components/ui/tech-bage";

const page = () => {
  return (
    <Container>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <AboutSection />
      <SkillSection />
      <GithubActivity />
      <PersonalSection />
    </Container>
  );
};

export default page;
