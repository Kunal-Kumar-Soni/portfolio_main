import Container from "@/components/common/Container";
import Work from "@/components/content/experience/experience-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
};

const page = () => {
  return (
    <Container>
      <Work />
    </Container>
  );
};

export default page;
