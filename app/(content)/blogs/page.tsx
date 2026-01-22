import Container from "@/components/common/Container";
import Blogs from "@/components/content/blogs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Insights & Experiences"
}

const page = () => {
  return (
    <Container>
      <Blogs />
    </Container>
  )
};

export default page;
