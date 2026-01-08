import Container from "@/components/common/Container";
import InspirationsSection from "@/components/content/inspirations/inspiration-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspirations - Discipline & Mental Strength",
};

const page = () => {
  return (
    <Container>
      <InspirationsSection />
    </Container>
  );
};

export default page;
