"use client";
import { Separator } from "../ui/separator";
import { BsBookHalf } from "react-icons/bs";
import Image from "next/image";

const BooksSection = () => {
  const BooksInfo = [
    {
      id: 1,
      name: "Bhagavad Gita",
      author: "Ved Vyasa",
      image: "/books/Bhagavad_Gita.jpg",
      tag: "Favorite",
    },
    {
      id: 2,
      name: "48 Laws of Power",
      author: "Robert Greene",
      image: "/books/48_Laws_of_Power.jpg",
    },
    {
      id: 3,
      name: "Human Nature",
      author: "Robert Greene",
      image: "/books/Human_nature.jpg",
    },
    {
      id: 4,
      name: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      image: "/books/Rich_dad_Poor_dad.jpg",
    },
  ];

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

      {/* Books  */}
      <div className="">
        {/* Icons & Bio  */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex justify-center items-center bg-muted rounded-lg w-10 h-10">
            <BsBookHalf className="w-5 h-5 text-indigo-600 dark:text-indigo-500" />
          </div>
          <h1 className="font-ibmPlexSans font-semibold text-2xl tracking-wide">Power & Control</h1>
        </div>
        {/* Image Section */}
        <div className="gap-x-10 gap-y-10 md:gap-y-20 grid grid-cols-1 md:grid-cols-2 mt-6">
          {BooksInfo.map((book) => (
            <div
              key={book.id}
              className="relative bg-card hover:shadow-lg border border-border rounded-xl overflow-hidden transition-all hover:-translate-y-1 duration-300"
            >
              {/* Image Wrapper */}
              <div className="relative bg-muted w-full aspect-2/3">
                <Image src={book.image} alt={book.name} fill className="object-cover" />
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="font-ibmPlexSans font-semibold text-lg leading-tight">
                  {book.name}
                </h3>
                <p className="mt-1 text-muted-foreground text-sm"> {book.author}</p>
              </div>

              {/* Tag */}
              {book.tag && (
                <div className="top-0 right-0 z-10 absolute w-20 h-20 overflow-hidden">
                  <span className="top-4 -right-8 absolute bg-red-600 shadow-md w-28 font-semibold text-[11px] text-white text-center rotate-45">
                    {book.tag}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksSection;
