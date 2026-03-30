"use client";
import { useEffect, useState } from "react";

import { QuotesData } from "@/data/quotes-info";

import { Separator } from "../ui/separator";

type QuotesInfoType = {
  quote: string;
  author: string;
};

const Quotes = () => {
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
    <div className="font-hankenGrotesk mx-auto max-w-3xl px-4">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk text-3xl font-bold">Quotes</h1>
      </div>
      <div className="bg-card border-border relative overflow-hidden rounded-xl border px-6 py-5">
        {/* Accent bar */}
        <div className="from-muted-foreground/40 absolute top-0 left-0 h-full w-1 bg-linear-to-b to-transparent" />

        {/* Quote */}
        <p className="font-hankenGrotesk text-muted-foreground text-base leading-relaxed italic sm:text-lg">
          &quot;{quotesInfo?.quote}&quot;
        </p>

        {/* Author */}
        <div className="mt-4 text-right font-semibold">
          — {quotesInfo?.author}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
