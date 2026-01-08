import { BsBookHalf } from "react-icons/bs";
import { BookCard } from "./book-card";
import type { BookGroupPropsType } from "@/types/books";

export const BookGroup = ({ title, data }: BookGroupPropsType) => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex justify-center items-center bg-muted rounded-lg w-10 h-10">
          <BsBookHalf className="w-5 h-5 text-indigo-600 dark:text-indigo-500" />
        </div>

        <h2 className="font-ibmPlexSans font-semibold text-2xl">{title}</h2>
      </div>

      <div className="gap-x-10 gap-y-10 md:gap-y-20 grid grid-cols-1 md:grid-cols-2 mt-6">
        {data.map((item: any) => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
