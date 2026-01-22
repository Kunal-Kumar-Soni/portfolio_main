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
    const project = blogsCardInfo.find(
        (p) => p.name === slug
    );

    return {
        title: project
            ? `${project.name[0].toUpperCase() + project.name.slice(1)} - Blog Overview`
            : "Blog - Overview",
    };
}

// export const generateStaticParams = () => {
//   return projectsCardInfo.map((project) => ({ slug: project.name }));
// };

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const data = (await params).slug;

    return (
        <Container>
            <BlogDetails slug={data} />
        </Container>
    );
};

export default page;
