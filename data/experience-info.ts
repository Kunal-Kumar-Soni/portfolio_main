export type ExperienceType = {
  id: number;
  company: string;
  link: string;
  role: string;
  logo: string;
  status: string;
  duration: string;
  location: string;
  technologies: string[];
  points: string[];
};

export const experienceInfo: ExperienceType[] = [
  {
    id: 1,
    company: "Meta Scifor Technologies",
    link: "https://metascifor.com/",
    role: "Frontend Developer Intern",
    logo: "/companyImg/02meta_scifor_technologies.jpg",
    status: "not",
    duration: "Oct 2025 - Jan 2026",
    location: "India (Remote)",
    technologies: ["react", "nextjs", "typescript", "tailwind"],
    points: [
      "Built responsive and reusable UI components for an LMS platform using React and Next.js.",
      "Followed clean component architecture and modern UI practices to improve usability.",
    ],
  },
  {
    id: 2,
    company: "Workites",
    link: "https://www.linkedin.com/company/workites-technology-llp/",
    role: "Photo Editor",
    logo: "/companyImg/01workites.jpg",
    status: "not",
    duration: "Dec 2021 - Nov 2023",
    location: "India (Remote)",
    technologies: ["photoshop"],
    points: [
      "Executed professional photo editing with close attention to detail, visual balance, and consistent color presentation.",
      "Enhanced visual assets to produce premium, studio-quality results aligned with brand and design standards.",
    ]    
  },
];
