import { BsFire } from "react-icons/bs";
import { InspirationCard } from "./inspiration-card";
import type { InspirationGroupPropsType } from "@/types/inspirations";

export const InspirationGroup = ({ title, data }: InspirationGroupPropsType) => {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="font-hankenGrotesk font-semibold text-2xl">{title}</h2>
      </div>

      <div className="gap-x-10 gap-y-10 md:gap-y-20 grid grid-cols-1 md:grid-cols-2 mt-6">
        {data.map((item: any) => (
          <InspirationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
