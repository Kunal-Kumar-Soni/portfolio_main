import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import { BsBookHalf, BsFire } from "react-icons/bs";

const PersonalSection = () => {
  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm tracking-widest">Influences</p>
        <h1 className="font-ibmPlexSans font-bold text-3xl">Books & Inspiration</h1>
      </div>

      {/*Books & Inspiration Buttons */}
      <div className="space-y-5">
        {/* Books */}
        <Link
          href="/books"
          className="group relative flex items-center gap-4 bg-card hover:shadow-sm px-5 py-4 border border-border rounded-xl transition-all hover:-translate-y-0.5"
        >
          <div className="flex justify-center items-center bg-muted rounded-lg w-10 h-10">
            <BsBookHalf className="w-5 h-5 text-indigo-600 dark:text-indigo-500" />
          </div>

          <div className="flex-1">
            <h3 className="font-ibmPlexSans font-medium group-hover:text-foreground transition-colors">
              Books
            </h3>
            <p className="text-muted-foreground text-sm">Reads that shaped my thinking.</p>
          </div>

          {/* Arrow */}
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 w-4 h-4 text-muted-foreground transition-all group-hover:translate-x-1" />
        </Link>

        {/* Inspiration */}
        <Link
          href="/inspiration"
          className="group relative flex items-center gap-4 bg-card hover:shadow-sm px-5 py-4 border border-border rounded-xl transition-all hover:-translate-y-0.5"
        >
          <div className="flex justify-center items-center bg-muted rounded-lg w-10 h-10">
            <BsFire className="w-5 h-5 text-orange-500" />
          </div>

          <div className="flex-1">
            <h3 className="font-ibmPlexSans font-medium group-hover:text-foreground transition-colors">
              Inspiration
            </h3>
            <p className="text-muted-foreground text-sm">People and ideas that guide my journey.</p>
          </div>

          {/* Arrow */}
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 w-4 h-4 text-muted-foreground transition-all group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default PersonalSection;
