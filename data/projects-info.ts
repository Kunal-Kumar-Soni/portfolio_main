export const projects = [
  {
    id: "resume-ai",
    title: "Resume AI",
    description:
      "An AI-powered resume builder that analyzes content, improves clarity, and provides ATS-friendly scoring with real-time feedback.",
    image: "/projectsImg/resume_ai.png",
    status: "live", // "live" | "building" | "concept"
    technologies: [
      {
        icon: "Next.js",
        link: "https://nextjs.org",
      },
      {
        icon: "TypeScript",
        link: "https://www.typescriptlang.org",
      },
      {
        icon: "Tailwind CSS",
        link: "https://tailwindcss.com",
      },
      {
        icon: "Supabase",
        link: "https://supabase.com",
      },
      {
        icon: "Gemini",
        link: "https://ai.google.dev",
      },
      {
        icon: "Shadcn UI",
        link: "https://ui.shadcn.com",
      },
    ],

    SocialLinks: [
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
    id: "shop-karo",
    title: "Shop Karo",
    description:
      "A scalable e-commerce application featuring product browsing, cart state management with Redux, responsive design, and optimized UI interactions for a smooth user shopping experience.",

    image: "/projectsImg/shop_karo.png",
    status: "building",
    technologies: [
      {
        icon: "React",
        link: "https://react.dev",
      },
      {
        icon: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        icon: "Tailwind CSS",
        link: "https://tailwindcss.com",
      },
      {
        icon: "redux",
        link: "https://redux.js.org",
      },
    ],
    SocialLinks: [
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
