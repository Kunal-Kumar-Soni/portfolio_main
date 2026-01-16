"use client";
import { MdArrowBackIosNew } from "react-icons/md";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Separator } from "../../ui/separator";
import { Overview } from "./project-overview";
import { projectInfos, ProjectsInfoType } from "@/data/projects-info";

const ProjectDetails = ({ slug }: { slug: string }) => {
  const [projectData, setProjectData] = useState<ProjectsInfoType>();
  const router = useRouter();

  useEffect(() => {
    const data = projectInfos.find((data) => data.name === slug);
    setProjectData(data);
  }, [slug]);

  if (!slug || !projectData) return null;

  return (
    <div className="mx-auto px-4 max-w-3xl">
      {/* back to home button */}
      {/* <Button onClick={() => router.push("/")} variant="outline" className="group cursor-pointer">
        <MdArrowBackIosNew className="transition-all group-hover:-translate-x-1 duration-200" />{" "}
        Back to Home
      </Button> */}

      <div className="space-y-5">
        {/* Image section */}
        <div className="relative shadow-md rounded-md aspect-video">
          <Image
            alt={projectData.name}
            fill
            src={projectData.image}
            className="rounded-md object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="space-y-5 mt-10">
          <h1 className="font-ibmPlexSans font-bold text-4xl md:text-5xl">{projectData.title}</h1>
          <p className="text-muted-foreground text-lg">{projectData.description}</p>
        </div>

        {/* Project Meta */}
        <div className="gap-5 grid grid-cols-2 md:grid-cols-4">
          {Object.entries(projectData.projectMeta).map(([key, value]) => (
            <div
              key={key}
              className="bg-card hover:shadow-lg backdrop-blur p-4 border rounded-xl transition-all hover:-translate-y-1 duration-300"
            >
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest">{key}</p>
              <p className="mt-1 font-ibmPlexSans font-semibold text-base">{value}</p>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          <Button asChild>
            <Link
              href={projectData.socialLinks.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-sm hover:shadow-lg text-sm active:scale-95 transition-all hover:-translate-y-1 duration-300"
            >
              <CiGlobe size={16} />
              Live Demo
            </Link>
          </Button>

          <Button variant={"secondary"} asChild>
            <Link
              href={projectData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-sm hover:shadow-lg text-sm active:scale-95 transition-all hover:-translate-y-1 duration-300"
            >
              <FaGithub size={16} />
              Source Code
            </Link>
          </Button>
        </div>
      </div>

      <Separator className="my-10" />

      <h1 className="mb-10 font-ibmPlexSans font-bold text-3xl md:text-4xl">{projectData?.bio}</h1>

      <div className="space-y-10">
        {/* Overview Section*/}

        <Overview title={"Why I Built This"} data={projectData?.overview?.whyIBuiltThis} />
        <Overview title={"Features"} data={projectData?.overview?.features} />
        <Overview title={"Tech Stack"} data={projectData?.overview?.technologies} />
      </div>
    </div>
  );
};

export default ProjectDetails;
