import Container from "@/components/common/Container";
import BlogDetails from "@/components/content/blogs/blog-details";
import { blogsCardInfo } from "@/data/blogs-card-info";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params
    const blog = blogsCardInfo.find(
        (b) => b.name === slug
    );

    return {
        title: blog
            ? `${blog.name[0].toUpperCase() + blog.name.slice(1)} - Blog Overview`
            : "Blog - Overview",
    };
}

export const generateStaticParams = () => {
    return blogsCardInfo.map((blog) => ({ slug: blog.name }));
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const data = (await params).slug;

    return (
        <Container>
            <BlogDetails slug={data} />
        </Container>
    );
};

export default page;
