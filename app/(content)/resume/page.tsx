import { Metadata } from "next";

import Container from "@/components/common/Container";
import Reveal from "@/components/common/Revel";
import ResumeSection from "@/components/content/resume-section";

export const metadata: Metadata = {
  title: "Resume - Kunal Kumar Soni",
};

const page = () => {
  return (
    <Container>
      <Reveal>
        <ResumeSection />
      </Reveal>
    </Container>
  );
};

export default page;
