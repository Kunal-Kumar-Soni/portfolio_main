import type { BookCardPropsType } from "@/types/books";
import Image from "next/image";

export const BookCard = ({ item }: { item: BookCardPropsType }) => {
  return (
    <div className="relative bg-card hover:shadow-lg border border-border rounded-xl overflow-hidden transition-all hover:-translate-y-1 duration-300">
      {/* Image */}
      <div className="relative bg-muted w-full aspect-2/3">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      {/* Text */}
      <div className="p-4">
        <h3 className="font-ibmPlexSans font-semibold text-lg">{item.name}</h3>
        <p className="mt-1 text-muted-foreground text-sm">{item.author}</p>
      </div>

      {/* Tag */}
      {item.tag && (
        <div className="top-0 right-0 absolute w-20 h-20 overflow-hidden">
          <span className="top-4 -right-8 absolute bg-red-600 w-28 font-semibold text-[11px] text-white text-center rotate-45">
            {item.tag}
          </span>
        </div>
      )}
    </div>
  );
};
