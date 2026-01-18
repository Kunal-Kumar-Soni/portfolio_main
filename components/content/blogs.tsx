import { Separator } from '../ui/separator'

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

            <p className='text-muted-foreground leading-loose tracking-wide'>I’m a frontend developer who believes that learning happens best by building and sharing.
                My journey hasn’t been perfect or linear, but every project and mistake has taught me something valuable.
                This blog is a place where I document what I’m learning, the things I build, and the challenges I face while growing as a developer.Sometimes it’s about code, sometimes about problem-solving, and sometimes about mindset and consistency.I write these posts mainly for myself, to track progress and reflect on my journey, but I hope they also help or inspire someone who is walking a similar path.

            </p>
        </div>
    )
}

export default Blogs