import { SiNextdotjs, SiReact, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";

type IconKey = keyof typeof ICONS;

const ICONS = {
  ts: <SiTypescript className="text-[#3178C6]" />,
  react: <SiReact className="text-[#61DAFB]" />,
  next: <SiNextdotjs />,
  shadcn: <SiShadcnui />,
  tailwind: <SiTailwindcss className="text-[#38BDF8]" />,
} as const;

type TechBadgeProps = {
  label: string;
  icon: IconKey;
};

export function TechBadge({ label, icon }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-zinc-100/80 dark:bg-zinc-900 backdrop-blur px-2.5 py-1 border border-zinc-300/90 dark:border-zinc-700 border-dashed rounded-md font-medium text-foreground text-sm">
      {ICONS[icon]}
      {label}
    </span>
  );
}
