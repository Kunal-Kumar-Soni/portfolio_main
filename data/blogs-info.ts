export type blogsInfoType = {
    id: number;
    title: string;
    name: string;
    bio: string;
    types: string[];
    createdAt: string
    description: string;
    image: string;
    overview: {
      [key:string]: string[];
    };
    socialLinks: { liveDemo: string; github: string };
  };
  export const blogsInfo: blogsInfoType[] = [
    {
      id: 1,
      title: "Who am i?",
      name: "life",
      bio: "Resume AI: Enhance resumes using AI",
      types: ["Life","Personal" ],
      createdAt:"December 29, 2025",
      description:
        "A Personal Journey Built Around Coding Challenges, Gaming Passion, and the Strength I Draw from Family as I Grow and Evolve.",
      image: "/blogs/personal.png",
  
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
      title: "How i learn new tools?",
      name: "learning",
      bio: "ShopKaro: Simple and fast online shopping",
      types: ["Learning","Growth"],
      createdAt:"January 22, 2026",
      description:
        "My Thoughtful and Practical Approach to Learning, Understanding, and Mastering New Tools Over Time.",
  
        image: "/blogs/newtools.png",
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
  