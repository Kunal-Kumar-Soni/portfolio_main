import { Separator } from "../ui/separator"


const BlogSection = () => {
    return (
        <div className="mx-auto mt-8 px-4 max-w-3xl">
            <Separator className="mb-6" />

            {/* Heading */}
            <div className="mb-6">
                <p className="text-muted-foreground text-sm tracking-widest">Learnings</p>
                <h1 className="font-ibmPlexSans font-bold text-3xl">Blogs</h1>
            </div>
        </div>

    )
}

export default BlogSection