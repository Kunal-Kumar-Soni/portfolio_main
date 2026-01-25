import { blogsCardInfo } from '@/data/blogs-card-info'
import { Separator } from '../ui/separator'
import BlogCard from '../home/blogs/blogs-card'

const Blogs = () => {
    return (
        <div className='mx-auto px-4 max-w-3xl'>
            <div className="mb-10">
                <h1 className="font-ibmPlexSans font-semibold text-4xl sm:text-5xl text-center tracking-tight">
                    Blogs
                </h1>
                <p className="mt-4 text-muted-foreground text-lg text-center">
                    Sharing my learnings, thoughts, and things I build along the way.
                </p>
            </div>
            <Separator className='my-10' />

            {/* Cards */}
            <div className="gap-10 md:gap-6 grid grid-cols-1 md:grid-cols-2">
                {blogsCardInfo.map((blog) => (
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
    )
}

export default Blogs