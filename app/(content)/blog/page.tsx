import { Metadata } from "next";

import Container from "@/components/common/Container";
import Blog from "@/components/content/blog";

export const metadata: Metadata = {
  title: "Blog - Insights & Experiences",
};

const page = () => {
  return (
    <Container>
      <Blog />
    </Container>
  );
};

export default page;
