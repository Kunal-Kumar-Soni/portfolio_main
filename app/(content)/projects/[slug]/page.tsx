import Container from "@/components/common/Container";
import ProjectDetails from "@/components/content/project-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details ",
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const data = (await params).slug;

  return (
    <Container>
      <ProjectDetails slug={data} />
    </Container>
  );
};

export default page;
