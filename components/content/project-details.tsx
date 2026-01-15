"use client";
import { MdArrowBackIosNew } from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projectInfo } from "@/data/projects-info";
import { ProjectsCardInfoType } from "@/data/projects-cards-info";

const ProjectDetails = ({ slug }: { slug: string }) => {
  const [projectData, setProjectData] = useState<ProjectsCardInfoType>();
  const router = useRouter();

  useEffect(() => {
    const data = projectInfo.find((data) => data.name === slug);
    setProjectData(data);
  }, [slug]);

  if (!slug || !projectData) return null;

  return (
    <div className="mx-auto px-4 max-w-3xl">
      {/* back to home button */}
      <Button onClick={() => router.push("/")} variant="outline" className="group cursor-pointer">
        <MdArrowBackIosNew className="transition-all group-hover:-translate-x-1 duration-200" />{" "}
        Back to Home
      </Button>

      <div className="relative shadow-md mt-10 aspect-video">
        <Image
          alt={projectData.name}
          fill
          src={projectData.image}
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
