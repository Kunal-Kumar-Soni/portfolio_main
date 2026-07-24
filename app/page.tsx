import Container from "@/components/common/Container";
import Reveal from "@/components/common/Revel";
import BlogSection from "@/components/home/blog/blog-section";
import ExperienceSection from "@/components/home/experience/experience-section";
import Feedback from "@/components/home/feedback";
import GithubActivity from "@/components/home/github-section";
import HeroSection from "@/components/home/hero-section";
import PersonalSection from "@/components/home/personal-section";
import ProjectSection from "@/components/home/project/project-section";
import SkillSection from "@/components/home/skills-section";

const page = () => {
  return (
    <Container>
      <HeroSection />

      <Reveal>
        <ExperienceSection />
      </Reveal>

      <Reveal>
        <ProjectSection />
      </Reveal>

      <Reveal>
        <Feedback />
      </Reveal>

      <Reveal>
        <SkillSection />
      </Reveal>

      <Reveal>
        <GithubActivity />
      </Reveal>

      <Reveal>
        <BlogSection />
      </Reveal>

      <Reveal>
        <PersonalSection />
      </Reveal>
    </Container>
  );
};

export default page;
