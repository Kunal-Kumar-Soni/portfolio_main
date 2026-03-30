import type { BookCardPropsType, BookGroupPropsType } from "@/types/books";

import { BookCard } from "./book-card";

export const BookGroup = ({ title, data }: BookGroupPropsType) => {
  return (
    <div className="mt-12">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="font-hankenGrotesk text-2xl font-semibold">{title}</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 md:gap-y-20">
        {data.map((item: BookCardPropsType) => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
