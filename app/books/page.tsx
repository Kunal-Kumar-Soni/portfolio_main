import BooksSection from "@/components/main/books-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books - Kunal Kumar Soni",
};

const page = () => {
  return (
    <div className="bg-background fill-mode-both pt-15 sm:pt-20 w-full font-geistMono text-foreground animate-in duration-700 ease-linear fade-in">
      <BooksSection />
    </div>
  );
};

export default page;
