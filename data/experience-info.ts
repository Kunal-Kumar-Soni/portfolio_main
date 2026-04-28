export type ExperienceType = {
  id: number;
  company: string;
  role: string;
  status: string;
  duration: string;
  location: string;
  technologies: string[];
  points: string[];
};

export const experienceInfo: ExperienceType[] = [
  {
    id: 1,
    company: "Freelance",
    role: "Frontend Developer",
    status: "working",
    duration: "Jan 2026 - Present",
    location: "Remote",
    technologies: ["react", "nextjs", "typescript", "tailwind", "firebase"],
    points: [
      "Developed 3+ responsive web applications using Next.js and React, improving UI performance and user experience.",
      "Integrated REST APIs and authentication systems, handling dynamic data and real-world application logic.",
      "Built reusable and scalable component structures, reducing development time by 25–30%.",
    ],
  },
  {
    id: 2,
    company: "MetaScifor Technologies",
    role: "Frontend Developer Intern",
    status: "not",
    duration: "Oct 2025 - Jan 2026",
    location: "Remote",
    technologies: ["react", "nextjs", "typescript", "tailwind"],
    points: [
      "Built 10+ reusable UI components for an LMS platform using React and Next.js.",
      "Improved usability by applying clean architecture and modern UI/UX practices.",
      "Collaborated on real-world features and contributed to frontend performance optimization.",
    ],
  },
  {
    id: 3,
    company: "Workites",
    role: "Photo Editor",
    status: "not",
    duration: "Dec 2021 - Nov 2023",
    location: "Remote",
    technologies: ["photoshop"],
    points: [
      "Executed professional photo editing with close attention to detail, visual balance, and consistent color presentation.",
      "Enhanced visual assets to produce premium, studio-quality results aligned with brand and design standards.",
    ],
  },
];
