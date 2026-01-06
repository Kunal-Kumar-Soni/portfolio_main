import React from "react";
import { Separator } from "../ui/separator";

const QuotesSection = () => {
  return (
    <div className="mx-auto mt-10 px-4 max-w-3xl font-geistMono">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm tracking-widest">Reflections</p>
        <h1 className="font-ibmPlexSans font-bold text-3xl">Quotes</h1>
      </div>
      <div className="relative bg-card px-6 py-5 border border-border rounded-xl overflow-hidden">
        {/* Accent bar */}
        <div className="top-0 left-0 absolute bg-linear-to-b from-muted-foreground/40 to-transparent w-1 h-full" />

        {/* Quote */}
        <p className="font-ibmPlexSans text-muted-foreground text-base sm:text-lg italic leading-relaxed">
          "Working is in our hands but the result isn't."
        </p>

        {/* Author */}
        <div className="mt-4 text-sm text-right">— Kunal Kumar Soni</div>
      </div>
    </div>
  );
};

export default QuotesSection;
