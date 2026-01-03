import React from "react";
import { Separator } from "../ui/separator";
import ProjectCard from "./project-card";
import { projects } from "@/data/projectsData";

const ProjectSection = () => {
  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl font-geistMono">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm tracking-widest">Insight</p>
        <h1 className="font-ibmPlexSans font-bold text-3xl">Projects</h1>
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
