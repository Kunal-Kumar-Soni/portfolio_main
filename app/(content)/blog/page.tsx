import { Metadata } from "next";

import Container from "@/components/common/Container";
import Reveal from "@/components/common/Revel";
import Blog from "@/components/content/blog";

export const metadata: Metadata = {
  title: "Blog - Insights & Experiences",
};

const page = () => {
  return (
    <Container>
      <Reveal>
        <Blog />
      </Reveal>
    </Container>
  );
};

export default page;
