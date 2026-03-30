import Image from "next/image";

import type { InspirationCardPropsType } from "@/types/inspirations";

export const InspiredbyCard = ({
  item,
}: {
  item: InspirationCardPropsType;
}) => {
  return (
    <div className="bg-card border-border relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="bg-muted relative aspect-2/3 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="p-4">
        <h3 className="font-hankenGrotesk text-lg font-semibold">
          {item.name}
        </h3>
        <p className="text-muted-foreground mt-1">{item.focus}</p>
      </div>

      {/* Tag */}
      {item.tag && (
        <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden">
          <span className="absolute top-4 -right-8 w-28 rotate-45 bg-red-600 text-center text-[11px] font-semibold text-white">
            {item.tag}
          </span>
        </div>
      )}
    </div>
  );
};
