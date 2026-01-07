import InspirationsSection from "@/components/main/inspirations-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspirations - Discipline & Mental Strength",
};

const page = () => {
  return (
    <div className="bg-background fill-mode-both pt-15 sm:pt-20 w-full font-geistMono text-foreground animate-in duration-700 ease-linear fade-in">
      <InspirationsSection />
    </div>
  );
};

export default page;
