import { inspiredbyInfo } from "@/data/inspiredby-info";

import { Separator } from "../../ui/separator";
import { InspiredbyGroup } from "./inspiredby-group";

const InspiredbySection = () => {
  const inspiredbyKeys = Object.keys(inspiredbyInfo);
  return (
    <div className="mx-auto max-w-3xl px-4">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk text-center text-4xl font-bold">
          Inspired By
        </h1>
        <p className="text-muted-foreground mt-4 text-center text-lg">
          The minds and characters that have influenced my thinking, growth, and
          perspective.
        </p>
      </div>

      <Separator className="mb-10" />
      {/* Inspirations Group */}
      {inspiredbyKeys.map((key, i) => (
        <InspiredbyGroup key={i} title={key} data={inspiredbyInfo[key]} />
      ))}
    </div>
  );
};

export default InspiredbySection;
