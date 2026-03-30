import { BsBookHalf, BsFire } from "react-icons/bs";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Separator } from "../ui/separator";

const PersonalSection = () => {
  return (
    <div className="mx-auto mt-8 max-w-3xl px-4">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk text-3xl font-bold">Personal</h1>
      </div>

      {/*Books & Inspiration Buttons */}
      <div className="space-y-5">
        {/* Books */}
        <Link
          href="/books"
          className="group bg-card border-border relative flex items-center gap-4 rounded-xl border px-5 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm"
        >
          <div className="flex-1">
            <h3 className="font-hankenGrotesk group-hover:text-foreground font-medium transition-colors">
              Books
            </h3>
            <p className="text-muted-foreground">
              Reads that shaped my thinking.
            </p>
          </div>

          {/* Arrow */}
          <ArrowUpRight className="text-muted-foreground h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
        </Link>

        {/* Inspired By */}
        <Link
          href="/inspiredby"
          className="group bg-card border-border relative flex items-center gap-4 rounded-xl border px-5 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm"
        >
          <div className="flex-1">
            <h3 className="font-hankenGrotesk group-hover:text-foreground font-medium transition-colors">
              Inspired By
            </h3>
            <p className="text-muted-foreground">
              People who guide my journey.
            </p>
          </div>

          {/* Arrow */}
          <ArrowUpRight className="text-muted-foreground h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
        </Link>
      </div>
    </div>
  );
};

export default PersonalSection;
