import { IconType } from "react-icons/lib";
import {
  SiAppwrite,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiReact,
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
  // Frameworks and Libraries
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

  // Languages
  {
    name: "typescript",
    label: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "javascript",
    label: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  // Styling / UI
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

  // States
  {
    name: "redux",
    label: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    link: "https://redux.js.org/",
  },

  // Backends / DB
  {
    name: "firebase",
    label: "Firebase",
    link: "https://firebase.google.com/",
    image: "/iconsImage/firebase.png",
  },
  {
    name: "supabase",
    label: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
    link: "https://supabase.com/",
  },
  {
    name: "appwrite",
    label: "Appwrite",
    icon: SiAppwrite,
    color: "#F02E65",
    link: "https://appwrite.io/",
  },
  {
    name: "prisma",
    label: "Prisma",
    icon: SiPrisma,
    link: "https://www.prisma.io/",
  },

  // Tools
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

  // Animations / Designs
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
  {
    name: "motion",
    label: "Motion",
    link: "https://motion.dev/",
    image: "/iconsImage/motion.png",
  },

  //Models
  {
    name: "chatgpt",
    label: "Chatgpt",
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
