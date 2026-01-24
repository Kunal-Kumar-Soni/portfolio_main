import { Separator } from "@/components/ui/separator";
import { BooksInfo } from "@/data/books-info";
import { BookGroup } from "./book-group";

const BooksSection = () => {
  const bookKeys = Object.keys(BooksInfo)
  return (
    <div className="mx-auto px-4 max-w-3xl">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-ibmPlexSans font-bold text-4xl text-center">Books</h1>
        <p className="mt-5 text-muted-foreground text-center tracking-wide">
          Books that have shaped my thinking, learning, and personal growth.
        </p>
      </div>

      <Separator className="mb-10" />

      {/* Books Group */}
      {bookKeys.map((key, i) => <BookGroup key={i} title={key} data={BooksInfo[key]} />)}

    </div>
  );
};

export default BooksSection;
