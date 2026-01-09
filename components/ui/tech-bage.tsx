import { skillsIconInfo } from "@/data/skills-icon-info";
import Image from "next/image";
import Link from "next/link";

const TechBadge = ({ tech }: { tech: string }) => {
  const techInfo = skillsIconInfo.find((icon) => icon.name === tech);

  if (!techInfo) return null;
  const { label, link, color, icon: Icon, image, name } = techInfo;

  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="inline-flex items-center gap-1.5 bg-zinc-100/80 dark:bg-zinc-800/90 backdrop-blur px-2.5 py-1 border border-zinc-300/90 dark:border-zinc-700 border-dashed rounded-md font-medium text-foreground text-sm"
    >
      {image ? (
        <Image src={image} alt={name} width={14} height={14} className="object-contain" />
      ) : (
        Icon && <Icon style={{ color }} />
      )}
      {label}
    </Link>
  );
};

export default TechBadge;
