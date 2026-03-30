import type { InspirationGroupPropsType } from "@/types/inspirations";

import { InspiredbyCard } from "./inspiredby-card";

export const InspiredbyGroup = ({ title, data }: InspirationGroupPropsType) => {
  return (
    <div className="mt-12">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="font-hankenGrotesk text-2xl font-semibold">{title}</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 md:gap-y-20">
        {data.map((item: any) => (
          <InspiredbyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
