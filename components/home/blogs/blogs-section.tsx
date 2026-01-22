import { Separator } from "../../ui/separator";
import { blogsCardInfo } from "@/data/blogs-card-info";
import BlogCard from "./blogs-card";

const BlogsSection = () => {
    return (
        <div className="mx-auto mt-6 px-4 max-w-3xl">
            <Separator className="mb-6" />

            {/* Heading */}
            <div className="mb-6">
                <p className="text-muted-foreground text-sm tracking-widest">Learnings</p>
                <h1 className="font-ibmPlexSans font-bold text-3xl">Blogs</h1>
            </div>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                {blogsCardInfo.map((blog) => (
                    <BlogCard
                        key={blog.id}
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

export default BlogsSection;
