import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import Link from "next/link";

type SkillIconProps = {
  name: string;
  link?: string;
  icon?: React.ElementType;
  image?: string;
  color?: string;
  size?: number;
};

const SkillIcon = ({ name, link, icon: Icon, image, color, size = 32 }: SkillIconProps) => {
  const linkData = link ? link : "/";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={linkData}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center bg-background rounded-lg w-10 h-10 transition-colors shrink-0"
        >
          {image ? (
            <Image src={image} alt={name} width={size} height={size} className="rounded-sm" />
          ) : (
            Icon && <Icon className="w-8 h-8" style={{ color }} />
          )}
        </Link>
      </TooltipTrigger>

      <TooltipContent className="text-xs">{name}</TooltipContent>
    </Tooltip>
  );
};

export default SkillIcon;
