import { Metadata } from "next";

import Container from "@/components/common/Container";
import Reveal from "@/components/common/Revel";
import BooksSection from "@/components/content/books/book-section";

export const metadata: Metadata = {
  title: "Books - Learning & Growth",
};

const page = () => {
  return (
    <Container>
      <Reveal>
        <BooksSection />
      </Reveal>
    </Container>
  );
};

export default page;
