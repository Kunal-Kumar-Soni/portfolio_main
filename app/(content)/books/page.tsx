import { Metadata } from "next";

import Container from "@/components/common/Container";
import BooksSection from "@/components/content/books/book-section";

export const metadata: Metadata = {
  title: "Books - Learning & Growth",
};

const page = () => {
  return (
    <Container>
      <BooksSection />
    </Container>
  );
};

export default page;
