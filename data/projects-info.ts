export type ProjectInfoType = {
  id: number;
  title: string;
  name: string;
  bio: string;
  projectMeta: { Timeline: string; Role: string; Team: string; Status: string };
  description: string;
  image: string;
  overview: {
    whyIBuiltThis: string[];
    features: string[];
    technologies: string[];
  };
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

    overview: {
      whyIBuiltThis: [
        "Enhance existing resumes instead of generating generic ones.",
        "Use AI in a practical, real-world scenario.",
        "Gain hands-on experience with AI integration.",
        "Strengthen skills in Next.js, TypeScript, Tailwind CSS, and Supabase.",
      ],
      features: [
        "Secure authentication",
        "AI-powered resume analysis",
        "ATS score evaluation",
        "Resume management",
        "Resume history tracking",
        "Voice-based feedback",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Supabase",
        "Gemini",
        "React Hook Form",
        "Shadcn/Ui",
      ],
    },
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
    overview: {
      whyIBuiltThis: [
        "Build a real-world e-commerce application using ShopKaro data.",
        "Learn and practice React and Redux through a complete product flow.",
        "Understand cart management, state handling, and UI interactions.",
        "Gain hands-on experience building scalable, feature-driven applications.",
      ],
      features: [
        "Dark / Light mode toggle",
        "Smart product search",
        "Category-based browsing",
        "Detailed product view",
        "Cart with quantity control",
        "Redux Toolkit state management",
      ],

      technologies: ["React.js", "Redux", "Tailwind", "Motion (Framer)", "React Tostify"],
    },
    socialLinks: {
      liveDemo: "https://e-commerce-website-kunal.vercel.app/",
      github: "https://github.com/Kunal-Kumar-Soni/E-commerce",
    },
  },
];
