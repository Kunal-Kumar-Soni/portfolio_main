import Container from "@/components/common/Container";
import ResumeSection from "@/components/content/resume-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Kunal Kumar Soni",
};

const page = () => {
  return (
    <Container>
      <ResumeSection />
    </Container>
  );
};

export default page;
