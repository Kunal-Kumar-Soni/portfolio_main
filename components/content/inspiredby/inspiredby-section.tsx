import { Separator } from "../../ui/separator";
import { inspiredbyInfo } from "@/data/inspiredby-info";
import { InspiredbyGroup } from "./inspiredby-group";

const InspiredbySection = () => {
  const inspiredbyKeys = Object.keys(inspiredbyInfo);
  return (
    <div className="mx-auto px-4 max-w-3xl">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk font-bold text-4xl text-center">Inspired By</h1>
        <p className="mt-4 text-muted-foreground text-lg text-center">
          The minds and characters that have influenced my thinking, growth, and perspective.
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
