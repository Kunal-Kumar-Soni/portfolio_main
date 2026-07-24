import { Metadata } from "next";

import Container from "@/components/common/Container";
import Reveal from "@/components/common/Revel";
import InspirationSection from "@/components/content/inspiredby/inspiredby-section";

export const metadata: Metadata = {
  title: "Inspired By - Discipline & Mental Strength",
};

const page = () => {
  return (
    <Container>
      <Reveal>
        <InspirationSection />
      </Reveal>
    </Container>
  );
};

export default page;
