import { Metadata } from "next";

import Container from "@/components/common/Container";
import InspirationSection from "@/components/content/inspiredby/inspiredby-section";

export const metadata: Metadata = {
  title: "Inspired By - Discipline & Mental Strength",
};

const page = () => {
  return (
    <Container>
      <InspirationSection />
    </Container>
  );
};

export default page;
