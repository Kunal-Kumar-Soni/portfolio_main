import { BsCalendar3 } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogsInfo } from "@/data/blog-info";

import { BlogOverview } from "./blog-overview";

const BlogDetails = ({ slug }: { slug: string }) => {
  const blogsData = blogsInfo.find((data) => data.name === slug);

  if (!slug || !blogsData) return null;
  const overviewKeys = Object.keys(blogsData?.overview);

  return (
    <div className="mx-auto max-w-3xl px-4">
      {/* back to home button */}
      <div className="mb-4 w-full">
        <Button asChild variant={"outline"} className="group cursor-pointer">
          <Link href={"/blog"}>
            <MdArrowBackIosNew className="transition-all duration-200 group-hover:-translate-x-1" />
            blog
          </Link>
        </Button>
      </div>

      <div className="space-y-5">
        {/* Image section */}
        <div className="relative aspect-video rounded-md shadow-md">
          <Image
            alt={blogsData.name}
            fill
            placeholder="blur"
            src={blogsData.image}
            className="rounded-md object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="mt-10 space-y-5">
          <div className="flex gap-3">
            {blogsData.types.map((type) => (
              <span
                key={type}
                className="bg-primary/10 text-primary rounded-sm px-2 py-1 text-[12px] font-semibold"
              >
                {type}
              </span>
            ))}
          </div>

          <h1 className="font-hankenGrotesk text-4xl font-bold md:text-5xl">
            {blogsData.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {blogsData.description}
          </p>

          <div className="text-muted-foreground flex items-center gap-2">
            <BsCalendar3 size={16} />
            <p className="text-base tracking-tight">{blogsData.createdAt}</p>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      <div className="space-y-10">
        {/* Overview Section*/}
        {overviewKeys.map((key, i) => (
          <BlogOverview key={i} title={key} data={blogsData.overview[key]} />
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
