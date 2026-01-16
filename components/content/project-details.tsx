"use client";
import { MdArrowBackIosNew } from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projectInfo, ProjectInfoType } from "@/data/projects-info";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Separator } from "../ui/separator";

const ProjectDetails = ({ slug }: { slug: string }) => {
  const [projectData, setProjectData] = useState<ProjectInfoType>();
  const router = useRouter();

  useEffect(() => {
    const data = projectInfo.find((data) => data.name === slug);
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
          <p>{projectData.description}</p>
        </div>

        {/* Project Meta */}
        <Card className="shadow-none">
          <CardContent className="gap-6 md:gap-4 grid grid-cols-2 md:grid-cols-4">
            {Object.entries(projectData.projectMeta).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <p className="text-muted-foreground text-sm">{key}</p>
                <p className="font-ibmPlexSans text-sm">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

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
        {/* Features*/}
        <div>
          <h1 className="font-ibmPlexSans font-semibold text-3xl">Features</h1>
          <ul className="flex flex-col mt-4 pl-10">
            {projectData?.features?.map((feature, i) => (
              <li className="text-muted-foreground leading-loose tracking-wide list-disc" key={i}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Section */}
        <div>
          <h1 className="font-ibmPlexSans font-semibold text-3xl">Tech Stack</h1>
          <ul className="flex flex-col mt-4 pl-10">
            {projectData.technologies.map((tech, i) => (
              <li className="text-muted-foreground leading-loose tracking-wide list-disc" key={i}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
