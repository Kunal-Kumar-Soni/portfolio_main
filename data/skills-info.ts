import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiSupabase,
  SiAppwrite,
  SiGit,
  SiGithub,
  SiPrisma,
  SiShadcnui,
} from "react-icons/si";

export const STACKS = [
  // Most used daily
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    link: "https://nextjs.org/",
  },

  // Language
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  // Styling / UI
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    link: "https://tailwindcss.com/",
  },
  {
    name: "shadcn/ui",
    icon: SiShadcnui,
    link: "https://ui.shadcn.com/",
  },

  // State
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    link: "https://redux.js.org/",
  },

  // Backend / DB (used when needed)
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
    link: "https://supabase.com/",
  },
  {
    name: "Appwrite",
    icon: SiAppwrite,
    color: "#F02E65",
    link: "https://appwrite.io/",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    link: "https://www.prisma.io/",
  },

  // Tools (not every minute, but daily)
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    link: "https://github.com/",
  },

  // Extras
  {
    name: "Motion",
    link: "https://motion.dev/",
    image: "/icons/motion.png",
  },
  {
    name: "Photoshop",
    link: "https://www.adobe.com/products/photoshop.html",
    image: "/icons/photoshop.png",
  },
];
