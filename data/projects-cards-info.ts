import { StaticImageData } from "next/image";

import resumeai from "@/assets/projectsImg/resumeai.png";
import tripping from "@/assets/projectsImg/tripping.png";

export type ProjectsCardInfoType = {
  id: number;
  title: string;
  name: string;
  description: string;
  image: StaticImageData | string;
  technologies: string[];
  socialLinks: { label: string; link: string }[];
};
export const projectsCardInfo: ProjectsCardInfoType[] = [
  {
    id: 1,
    title: "Tripping App",
    name: "tripping",
    description:
      "A modern and interactive trip planning application that helps users organize activities, manage timelines, and visualize routes on a map — all in a smooth drag-and-drop experience.",

    image: tripping,
    technologies: ["nextjs", "typescript", "tailwind", "firebase", "shadcn"],
    socialLinks: [
      {
        label: "Live Demo",
        link: "https://tripping-rho.vercel.app/",
      },
      {
        label: "Github",
        link: "https://github.com/Kunal-Kumar-Soni/Tripping.git",
      },
    ],
  },
  {
    id: 2,
    title: "Resume AI",
    name: "resumeai",
    description:
      "An AI-powered resume builder that analyzes content, improves clarity, and provides ATS-friendly scoring with real-time feedback.",
    image: resumeai,
    technologies: [
      "nextjs",
      "typescript",
      "tailwind",
      "supabase",
      "gemini",
      "shadcn",
    ],

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
];
