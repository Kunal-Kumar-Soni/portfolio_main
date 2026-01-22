import Container from "@/components/common/Container";
import AboutSection from "@/components/home/about-section";
import BlogsSection from "@/components/home/blogs/blogs-section";
import ExperienceSection from "@/components/home/experience/experience-section";
import GithubActivity from "@/components/home/github-section";
import HeroSection from "@/components/home/hero-section";
import PersonalSection from "@/components/home/personal-section";
import ProjectSection from "@/components/home/project/project-section";
import SkillSection from "@/components/home/skills-section";

const page = () => {
  return (
    <Container>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <AboutSection />
      <SkillSection />
      <GithubActivity />
      <BlogsSection />
      <PersonalSection />
    </Container>
  );
};

export default page;
