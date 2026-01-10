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
    logo: "/companyImg/meta_scifor_technologies.jpg",
    status: "working",
    duration: "Oct 2025 - Present",
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
    role: "Photo Editor & Designer",
    logo: "/companyImg/workites.jpg",
    status: "not",
    duration: "Dec 2021 - Sep 2023",
    location: "India (Remote)",
    technologies: ["photoshop"],
    points: [
      "Handled professional photo editing tasks including precise cropping, background removal, and color grading to enhance visual quality and consistency.",
      "Worked extensively on jewelry image editing, performing detailed product cropping and advanced color grading to achieve clean, studio-quality visuals.",
    ],
  },
];
