import { RiArrowRightSLine } from "react-icons/ri";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { blogCardInfo } from "@/data/blog-card-info";

import { Separator } from "../../ui/separator";
import BlogCard from "./blog-card";

const blogCardInfoTwoData = blogCardInfo.slice(0, 2);

const BlogsSection = () => {
  return (
    <div className="mx-auto mt-6 max-w-3xl px-4">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk text-3xl font-bold">Blogs</h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6">
        {blogCardInfoTwoData.map((blog) => (
          <BlogCard
            key={blog?.id}
            id={blog.id}
            name={blog.name}
            title={blog.title}
            createdAt={blog.createdAt}
            description={blog.description}
            image={blog.image}
            types={blog?.types}
          />
        ))}
      </div>

      {/* button */}
      <div className="mt-8 flex items-center justify-center">
        <Button variant="secondary" asChild>
          <Link href="/blog" className="flex items-center gap-2">
            Show all blogs
            <RiArrowRightSLine />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogsSection;
