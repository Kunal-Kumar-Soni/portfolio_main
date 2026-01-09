import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { skillsIconInfo } from "@/data/skills-icon-info";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const skillsIcon = (
  iconsData: string[],
  className: string = cn("inline-flex justify-center items-center w-8 h-8")
) => {
  const skillData = skillsIconInfo.filter((skillInfo) => iconsData.includes(skillInfo.name));

  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-4">
        {skillData.map((data) => {
          const { link, color, name, icon: Icon, image, label } = data;

          return (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <Link target="_blank" rel="noopener noreferrer" className={className} href={link}>
                  {image ? (
                    <Image
                      width={48}
                      height={48}
                      alt={name}
                      src={image}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    Icon && <Icon className="w-full h-full" style={{ color }} />
                  )}
                </Link>
              </TooltipTrigger>

              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};
