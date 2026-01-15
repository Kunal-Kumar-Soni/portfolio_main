export type ProjectsCardInfoType = {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  socialLinks: { label: string; link: string }[];
};
export const projectsCardInfo: ProjectsCardInfoType[] = [
  {
    id: 1,
    title: "Resume AI",
    name: "resumeai",
    description:
      "An AI-powered resume builder that analyzes content, improves clarity, and provides ATS-friendly scoring with real-time feedback.",
    image: "/projectsImg/resumeai1.png",
    technologies: ["nextjs", "typescript", "tailwind", "supabase", "gemini", "shadcn"],

    socialLinks: [
      {
        label: "Live Demo",
        link: "https://resume-ai-kunal.vercel.app",
      },
      {
        label: "Github",
        link: "https://github.com/Kunal-Kumar-Soni/ai_resume_analyser",
      },
    ],
  },

  {
    id: 2,
    title: "Shop Karo",
    name: "shopkaro",
    description:
      "A scalable e-commerce application featuring product browsing, cart state management with Redux, responsive design, and optimized UI interactions for a smooth user shopping experience.",

    image: "/projectsImg/shopkaro2.png",
    technologies: ["react", "javascript", "tailwind", "redux"],
    socialLinks: [
      {
        label: "Live Demo",
        link: "https://e-commerce-website-kunal.vercel.app/",
      },
      {
        label: "Github",
        link: "https://github.com/Kunal-Kumar-Soni/E-commerce",
      },
    ],
  },
];
