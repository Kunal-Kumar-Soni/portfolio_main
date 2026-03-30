import { StaticImageData } from "next/image";

import learning from "@/assets/blog/newtools.png";
import life from "@/assets/blog/personal.png";

export type blogCardInfoType = {
  id: number;
  name: string;
  title: string;
  createdAt: string;
  description: string;
  image: StaticImageData | string;
  types: string[];
};
export const blogCardInfo: blogCardInfoType[] = [
  {
    id: 1,
    name: "life",
    title: "A Glimpse Into My Life.",
    createdAt: "December 29, 2025",
    description: "Life built around coding, gaming, and continuous learning.",
    image: life,
    types: ["Life", "Personal"],
  },
  {
    id: 2,
    name: "learning",
    title: "How I Learn New Tools.",
    createdAt: "January 22, 2026",
    description: "I master new tools by building real-world projects.",
    image: learning,
    types: ["Learning", "Growth"],
  },
];
