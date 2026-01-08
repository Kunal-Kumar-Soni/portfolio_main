"use client";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { QuotesData } from "@/data/quotes";

type QuotesInfoType = {
  quote: string;
  author: string;
};

const QuotesSection = () => {
  const [quotesInfo, setQuotesInfo] = useState<QuotesInfoType | null>(null);

  const getQuotesData = () => {
    const randomIndex = Math.floor(Math.random() * QuotesData.length);
    const data = QuotesData[randomIndex];
    setQuotesInfo(data);
  };

  useEffect(() => {
    getQuotesData();
  }, []);

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
          "{quotesInfo?.quote}"
        </p>

        {/* Author */}
        <div className="mt-4 font-semibold text-sm text-right">— {quotesInfo?.author}</div>
      </div>
    </div>
  );
};

export default QuotesSection;
