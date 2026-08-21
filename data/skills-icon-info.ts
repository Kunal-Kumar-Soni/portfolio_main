import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  SiAppwrite,
  SiExpress,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type SkillIconInfoType = {
  name: string;
  label: string;
  color?: string;
  icon?: IconType;
  link: string;
  image?: string;
}[];

export const skillsIconInfo: SkillIconInfoType = [
  // =========================
  // Languages
  // =========================
  {
    name: "javascript",
    label: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "typescript",
    label: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },

  // =========================
  // Frontend
  // =========================
  {
    name: "react",
    label: "React.js",
    icon: SiReact,
    color: "#61DAFB",
    link: "https://react.dev/",
  },
  {
    name: "nextjs",
    label: "Next.js",
    icon: SiNextdotjs,
    link: "https://nextjs.org/",
  },
  {
    name: "tailwind",
    label: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    link: "https://tailwindcss.com/",
  },
  {
    name: "shadcn",
    label: "Shadcn/ui",
    icon: SiShadcnui,
    link: "https://ui.shadcn.com/",
  },
  {
    name: "redux",
    label: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
    link: "https://redux.js.org/",
  },
  {
    name: "motion",
    label: "Motion",
    link: "https://motion.dev/",
    image: "/iconsImage/motion.png",
  },

  // =========================
  // Backend
  // =========================
  {
    name: "nodejs",
    label: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
    link: "https://nodejs.org/",
  },
  {
    name: "express",
    label: "Express.js",
    icon: SiExpress,
    link: "https://expressjs.com/",
  },

  // =========================
  // Databases & ORM
  // =========================
  {
    name: "mongodb",
    label: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    link: "https://www.mongodb.com/",
  },
  {
    name: "prisma",
    label: "Prisma",
    icon: SiPrisma,
    link: "https://www.prisma.io/",
  },
  {
    name: "redis",
    label: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    link: "https://redis.io/",
  },

  // =========================
  // Backend Platforms / BaaS
  // =========================
  {
    name: "supabase",
    label: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
    link: "https://supabase.com/",
  },
  {
    name: "firebase",
    label: "Firebase",
    link: "https://firebase.google.com/",
    image: "/iconsImage/firebase.png",
  },
  {
    name: "appwrite",
    label: "Appwrite",
    icon: SiAppwrite,
    color: "#F02E65",
    link: "https://appwrite.io/",
  },

  // =========================
  // Cloud & DevOps
  // =========================
  {
    name: "aws",
    label: "AWS",
    icon: FaAws,
    color: "#FF9900",
    link: "https://aws.amazon.com/",
  },
  {
    name: "linux",
    label: "Linux",
    icon: SiLinux,
    link: "https://www.linux.org/",
  },
  {
    name: "git",
    label: "Git",
    icon: SiGit,
    color: "#F05032",
    link: "https://git-scm.com/",
  },
  {
    name: "github",
    label: "GitHub",
    icon: SiGithub,
    link: "https://github.com/",
  },

  // =========================
  // Design
  // =========================
  {
    name: "figma",
    label: "Figma",
    link: "https://www.figma.com/",
    image: "/iconsImage/figma.png",
  },
  {
    name: "photoshop",
    label: "Photoshop",
    link: "https://www.adobe.com/products/photoshop.html",
    image: "/iconsImage/photoshop.png",
  },

  // =========================
  // AI Tools
  // =========================
  {
    name: "chatgpt",
    label: "ChatGPT",
    link: "https://chatgpt.com/",
    image: "/iconsImage/chatgpt.png",
  },
  {
    name: "gemini",
    label: "Gemini",
    icon: SiGooglegemini,
    color: "#4285F4",
    link: "https://ai.google.dev/",
  },
];
