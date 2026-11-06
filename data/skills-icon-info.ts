import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  SiCloudflare,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglegemini,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRazorpay,
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
    label: "shadcn/ui",
    icon: SiShadcnui,
    link: "https://ui.shadcn.com/",
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
    name: "postgresql",
    label: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    link: "https://www.postgresql.org/",
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

  // =========================
  // Cloud & Infrastructure
  // =========================
  {
    name: "aws",
    label: "AWS",
    icon: FaAws,
    color: "#FF9900",
    link: "https://aws.amazon.com/",
  },
  {
    name: "nginx",
    label: "Nginx",
    icon: SiNginx,
    color: "#009639",
    link: "https://nginx.org/",
  },
  {
    name: "cloudflare",
    label: "Cloudflare",
    icon: SiCloudflare,
    color: "#F38020",
    link: "https://www.cloudflare.com/",
  },
  {
    name: "linux",
    label: "Linux",
    icon: SiLinux,
    link: "https://www.linux.org/",
  },

  // =========================
  // Version Control & CI/CD
  // =========================
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
  {
    name: "github-actions",
    label: "GitHub Actions",
    icon: SiGithubactions,
    color: "#2088FF",
    link: "https://github.com/features/actions",
  },

  // =========================
  // Payments
  // =========================
  {
    name: "razorpay",
    label: "Razorpay",
    icon: SiRazorpay,
    color: "#3395FF",
    link: "https://razorpay.com/",
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
