"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ProjectTechStack } from "../ui/projects-tech-badges";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: { icon: string; link: string }[];
  socialLinks?: {
    label: string;
    link: string;
  }[];
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  socialLinks,
}: ProjectCardProps) {
  return (
    <div className="group gap-6 bg-card hover:shadow-md border border-border rounded-xl transition-all hover:-translate-y-0.5">
      {/* Image */}
      <div className="relative rounded-t-xl w-full aspect-16/10 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, 355px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 justify-between p-6">
        <div className="space-y-5">
          <div className="flex justify-between">
            <h3 className="font-ibmPlexSans font-semibold text-xl">{title}</h3>
            <div className="flex gap-3">
              {socialLinks?.map((social, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger
                    className="text-muted-foreground hover:text-foreground text-2xl transition cursor-pointer"
                    asChild
                  >
                    <Link target="_blank" rel="noopener noreferrer" href={social.link}>
                      {social.label === "Github" ? <FaGithub /> : <CiGlobe />}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social?.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base line-clamp-3 leading-relaxed tracking-tight">
            {description}
          </p>

          {/* Tech stack */}

          <div>
            <h1 className="font-ibmPlexSans text-muted-foreground text-sm sm:text-base tracking-wide">
              Technologies
            </h1>
            <ProjectTechStack technologies={technologies} />
          </div>
        </div>

        {/*  */}
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-6 font-medium text-primary text-sm hover:underline"
        >
          View Details <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
}
