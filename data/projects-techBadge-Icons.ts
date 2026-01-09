import {
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiSupabase,
  SiPrisma,
  SiClerk,
  SiAxios,
  SiGooglegemini,
  SiRedux,
} from "react-icons/si";

export const TECH_MAP = {
  next: { icon: SiNextdotjs, color: "text-foreground", label: "Next.js" },
  react: { icon: SiReact, color: "text-[#61DAFB]", label: "React" },
  tailwind: { icon: SiTailwindcss, color: "text-[#38BDF8]", label: "Tailwind CSS" },
  typescript: { icon: SiTypescript, color: "text-[#3178C6]", label: "TypeScript" },
  javascript: { icon: SiJavascript, color: "text-[#F7DF1E]", label: "JavaScript" },
  shadcn: { icon: SiShadcnui, color: "text-foreground", label: "Shadcn UI" },
  framer: { icon: SiFramer, color: "text-foreground", label: "Framer Motion" },
  supabase: { icon: SiSupabase, color: "text-[#3ECF8E]", label: "Supabase" },
  prisma: { icon: SiPrisma, color: "text-[#2D3748]", label: "Prisma" },
  clerk: { icon: SiClerk, color: "text-[#6C47FF]", label: "Clerk" },
  html: { icon: SiHtml5, color: "text-[#E34F26]", label: "HTML5" },
  css: { icon: SiCss3, color: "text-[#1572B6]", label: "CSS3" },
  axios: { icon: SiAxios, color: "text-[#5A29E4]", label: "Axios" },
  gemini: { icon: SiGooglegemini, color: "text-[#4285F4]", label: "Gemini AI" },
  redux: {
    icon: SiRedux,
    color: "text-[#764ABC]",
    label: "Redux",
  },
} as const;

export type TechKey = keyof typeof TECH_MAP;
