"use client";
import { Separator } from "../../ui/separator";
import { inspirationsInfo } from "@/data/inspirations-info";
import { InspirationGroup } from "./inspiration-group";

const InspirationsSection = () => {
  return (
    <div className="mx-auto px-4 max-w-3xl">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-ibmPlexSans font-bold text-4xl text-center">Inspirations</h1>
        <p className="mt-5 text-muted-foreground text-center tracking-wide">
          A collection of real and fictional inspirations I learn from.
        </p>
      </div>

      <Separator className="mb-10" />
      {/* Real inspirations */}
      <InspirationGroup title="Real Inspirations" data={inspirationsInfo.real} />

      {/* Fictional inspirations */}
      <InspirationGroup title="Fictional Inspirations" data={inspirationsInfo.fictional} />
    </div>
  );
};

export default InspirationsSection;
