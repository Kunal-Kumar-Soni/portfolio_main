"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { skillsIcon } from "@/components/ui/skills-icon";
import { ProjectsCardInfoType } from "@/data/projects-cards-info";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectCard({
  title,
  name,
  description,
  image,
  technologies,
  socialLinks,
}: ProjectsCardInfoType) {
  const router = useRouter()
  return (
    <div className="group gap-6 bg-card hover:shadow-md border border-border rounded-xl transition-all hover:-translate-y-0.5">
      {/* Image */}
      <div onClick={() => router.push(`/projects/${name}`)} className="relative rounded-t-xl w-full aspect-16/10 overflow-hidden cursor-pointer">
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
            {/* Live Demo & Github Icons */}
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

          <p className="text-muted-foreground text-base line-clamp-3 leading-relaxed tracking-tight">
            {description}
          </p>

          {/* Tech stack */}
          <div>
            <h1 className="font-ibmPlexSans text-muted-foreground text-sm sm:text-base tracking-wide">
              Technologies
            </h1>
            <div className="mt-2">{skillsIcon(technologies, "h-6 w-6")}</div>
          </div>
        </div>


        <button
          onClick={() => router.push(`/projects/${name}`)}
          className="inline-flex items-center gap-2 mt-6 font-medium text-muted-foreground hover:text-primary text-sm hover:underline cursor-pointer"
        >
          View Details <FaArrowRightLong size={14} />
        </button>
      </div>
    </div>
  );
}
