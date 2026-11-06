import { StaticImageData } from "next/image";

import storageapp from "@/assets/projectsImg/storageapp.png";
import tripping from "@/assets/projectsImg/tripping.png";

export type ProjectsInfoType = {
  id: number;
  title: string;
  name: string;
  bio: string;
  projectMeta: { Timeline: string; Role: string; Team: string; Status: string };
  description: string;
  image: StaticImageData | string;
  overview: {
    [key: string]: string[];
  };
  socialLinks: { liveDemo: string; github: string };
};
export const projectInfos: ProjectsInfoType[] = [
  {
    id: 3,
    title: "Cloud Storage App",
    name: "storageapp",
    bio: "Cloud storage platform with secure file management, subscription-based storage, and automated deployments",

    projectMeta: {
      Timeline: "Ongoing",
      Role: "Full Stack Developer",
      Team: "Solo",
      Status: "Deployed",
    },

    description:
      "A full-stack cloud storage platform that enables users to upload, organize, and manage files with AWS S3. It includes subscription-based storage plans, integrated online payments, storage quota management, and automated deployment workflows.",

    image: storageapp,

    overview: {
      "Why I Built This": [
        "Build a practical cloud storage platform with real-world file management workflows.",
        "Understand cloud object storage and production deployment architecture.",
        "Implement subscription-based access to storage resources.",
        "Gain hands-on experience with payment processing and DevOps automation.",
      ],

      Features: [
        "Upload and manage user files using AWS S3.",
        "Subscription plans with different storage capacities.",
        "Razorpay integration for subscription payments.",
        "Storage quota management based on the user's subscription.",
        "Cloud-hosted frontend with a separately deployed backend.",
      ],

      Challenges: [
        "Configuring secure cross-origin requests for frontend, backend, and S3 uploads.",
        "Handling Razorpay webhook signature verification and payment event processing.",
        "Keeping subscription status and storage quotas consistent with payment events.",
        "Configuring Nginx as a reverse proxy for the backend API.",
        "Automated frontend and backend deployment pipelines using GitHub Actions, AWS S3, and server deployment workflows.",
      ],

      Technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS S3",
        "Razorpay",
        "Cloudflare",
        "Nginx",
        "PM2",
        "GitHub Actions",
      ],
    },

    socialLinks: {
      liveDemo: "https://app.kunalkumarsoni.in/",
      github: "https://github.com/Kunal-Kumar-Soni/storageApp-backend",
    },
  },
  {
    id: 2,
    title: "Tripping App",
    name: "tripping",
    bio: "Smart trip planner with drag-and-drop timeline and map visualization",

    projectMeta: {
      Timeline: "60 days",
      Role: "Full Stack",
      Team: "3 Members",
      Status: "Completed",
    },

    description:
      "An interactive trip planning application that allows users to organize their travel itinerary using a drag-and-drop timeline, visualize routes on a map, and manage activities efficiently with real-time updates and transport integration.",

    image: tripping,

    overview: {
      "Why I Built This": [
        "Solve real-world problem of messy trip planning and scattered information.",
        "Build an intuitive drag-and-drop based UI for better user experience.",
        "Work deeply with maps, routes, and geolocation-based features.",
        "Strengthen frontend architecture and state management skills.",
        "Handle complex UI interactions and real-time updates.",
      ],

      Features: [
        "Drag & drop activities between timeline and activity panel",
        "Day-wise timeline planning with automatic time adjustments",
        "Transport integration between activities",
        "Dynamic route visualization on map",
        "Distance & duration calculation between locations",
      ],
      Challenges: [
        "Building a custom calendar view and aligning activities day by day was challenging",
        "Handling API integration for fetching distance and route data between locations",
        "Managing complex drag-and-drop interactions across multiple sections (timeline, activities, transport)",
        "Handling map issues when displaying both markers and routes together",
      ],

      Technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Google Maps API",
        "@dnd-kit",
        "Firebase",
        "Shadcn/UI",
      ],
    },

    socialLinks: {
      liveDemo: "https://tripping-rho.vercel.app",
      github: "https://github.com/Kunal-Kumar-Soni/Tripping.git",
    },
  },
];
