"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TECH_MAP, TechKey } from "@/data/projectsTechBadgeIcons";
import Link from "next/link";

export function ProjectTechStack({
  technologies,
}: {
  technologies: { icon: string; link: string }[];
}) {
  const getTechDetails = (name: string) => {
    const lowerName = name.toLowerCase();
    const foundKey = Object.keys(TECH_MAP).find((key) => lowerName.includes(key)) as TechKey;

    return foundKey ? TECH_MAP[foundKey] : null;
  };

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex flex-wrap gap-3 pt-2">
        {technologies.map((tech, index) => {
          const details = getTechDetails(tech?.icon);
          if (!details) return null;

          const Icon = details.icon;

          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  href={tech?.link}
                  target="_blank"
                  className="hover:scale-120 transition cursor-pointer"
                >
                  <Icon className={`text-2xl  ${details.color}`} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" className="">
                {tech?.icon}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
