export type ProjectInfoType = {
  id: number;
  title: string;
  name: string;
  bio: string;
  projectMeta: { Timeline: string; Role: string; Team: string; Status: string };
  description: string;
  image: string;
  features?: string[];
  technologies: string[];
  socialLinks: { liveDemo: string; github: string };
};
export const projectInfo: ProjectInfoType[] = [
  {
    id: 1,
    title: "Resume AI",
    name: "resumeai",
    bio: "Resume AI: Enhance resumes using AI",
    projectMeta: { Timeline: "25 days", Role: "Full Stack", Team: "Solo", Status: "completed" },

    description:
      "An AI-powered resume builder that analyzes content, improves clarity, and provides ATS-friendly scoring with real-time feedback.",
    image: "/projectsImg/resumeai1.png",

    features: [
      "Secure authentication",
      "AI resume analysis",
      "ATS scoring",
      "resume management",
      "voice feedback",
      "modern responsive UI",
      "friendly error handling",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Gemini",
      "Groq",
      "Shadcn/Ui",
      "Magic/Ui",
    ],
    socialLinks: {
      liveDemo: "https://resume-ai-kunal.vercel.app",
      github: "https://github.com/Kunal-Kumar-Soni/ai_resume_analyser",
    },
  },
  {
    id: 2,
    title: "Shop Karo",
    name: "shopkaro",
    bio: "ShopKaro: Simple and fast online shopping",
    projectMeta: { Timeline: "15 days", Role: "Front End", Team: "Solo", Status: "completed" },

    description:
      "A scalable e-commerce application featuring product browsing, cart state management with Redux, responsive design, and optimized UI interactions for a smooth user shopping experience.",

    image: "/projectsImg/shopkaro2.png",
    technologies: ["React.js", "JavaScript", "Tailwind", "Redux", "Motion (Framer)"],
    socialLinks: {
      liveDemo: "https://e-commerce-website-kunal.vercel.app/",
      github: "https://github.com/Kunal-Kumar-Soni/E-commerce",
    },
  },
];
