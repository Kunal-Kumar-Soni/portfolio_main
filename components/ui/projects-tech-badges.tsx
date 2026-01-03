"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TECH_MAP, TechKey } from "@/data/projectsTechBadgeIcons";

export function ProjectTechStack({ technologies }: { technologies: string[] }) {
  const getTechDetails = (name: string) => {
    const lowerName = name.toLowerCase();
    const foundKey = Object.keys(TECH_MAP).find((key) => lowerName.includes(key)) as TechKey;

    return foundKey ? TECH_MAP[foundKey] : null;
  };

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex flex-wrap gap-3 pt-2">
        {technologies.map((tech, index) => {
          const details = getTechDetails(tech);
          if (!details) return null;

          const Icon = details.icon;

          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className="hover:scale-125 transition-transform duration-200">
                  <Icon className={`text-xl  ${details.color}`} />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="">
                {tech}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
