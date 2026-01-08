import Container from "@/components/common/Container";
import BooksSection from "@/components/content/books/book-section";
import { Metadata } from "next";

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
