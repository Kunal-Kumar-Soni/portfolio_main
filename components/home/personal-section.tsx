import { Separator } from "../ui/separator";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BsBookHalf, BsFire } from "react-icons/bs";

const PersonalSection = () => {
  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk font-bold text-3xl">Personal</h1>
      </div>

      {/*Books & Inspiration Buttons */}
      <div className="space-y-5">
        {/* Books */}
        <Link
          href="/books"
          className="group relative flex items-center gap-4 bg-card hover:shadow-sm px-5 py-4 border border-border rounded-xl transition-all hover:-translate-y-0.5"
        >
          <div className="flex-1">
            <h3 className="font-hankenGrotesk font-medium group-hover:text-foreground transition-colors">
              Books
            </h3>
            <p className="text-muted-foreground">Reads that shaped my thinking.</p>
          </div>

          {/* Arrow */}
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 w-4 h-4 text-muted-foreground transition-all group-hover:translate-x-1" />
        </Link>

        {/* Inspiration */}
        <Link
          href="/inspirations"
          className="group relative flex items-center gap-4 bg-card hover:shadow-sm px-5 py-4 border border-border rounded-xl transition-all hover:-translate-y-0.5"
        >
          <div className="flex-1">
            <h3 className="font-hankenGrotesk font-medium group-hover:text-foreground transition-colors">
              Inspiration
            </h3>
            <p className="text-muted-foreground">People who guide my journey.</p>
          </div>

          {/* Arrow */}
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 w-4 h-4 text-muted-foreground transition-all group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default PersonalSection;
