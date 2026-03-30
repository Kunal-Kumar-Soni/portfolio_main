import { Separator } from "@/components/ui/separator";
import { BooksInfo } from "@/data/books-info";

import { BookGroup } from "./book-group";

const BooksSection = () => {
  const bookKeys = Object.keys(BooksInfo);
  return (
    <div className="mx-auto max-w-3xl px-4">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk text-center text-4xl font-bold">
          Books
        </h1>
        <p className="text-muted-foreground mt-4 text-center text-lg">
          Books that have shaped my thinking, learning, and personal growth.
        </p>
      </div>

      <Separator className="mb-10" />

      {/* Books Group */}
      {bookKeys.map((key, i) => (
        <BookGroup key={i} title={key} data={BooksInfo[key]} />
      ))}
    </div>
  );
};

export default BooksSection;
