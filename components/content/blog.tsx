import { blogCardInfo } from "@/data/blog-card-info";

import BlogCard from "../home/blog/blog-card";
import { Separator } from "../ui/separator";

const Blog = () => {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="mb-10">
        <h1 className="font-hankenGrotesk text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="text-muted-foreground mt-4 text-center text-lg">
          Sharing my learnings, thoughts, and things I build along the way.
        </p>
      </div>
      <Separator className="my-10" />

      {/* Cards */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6">
        {blogCardInfo.map((blog) => (
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
    </div>
  );
};

export default Blog;
