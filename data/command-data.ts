import { IconType } from "react-icons/lib";

import {
  BookOpen,
  Briefcase,
  FileText,
  Home,
  Mail,
  Sparkles,
  User,
} from "lucide-react";

type CommandData = {
  heading: string;
  items: { icon: IconType; label: string; path: string }[];
};

export const COMMAND_DATA: CommandData[] = [
  {
    heading: "Main",
    items: [
      { icon: Home, label: "Home", path: "/" },
      { icon: Briefcase, label: "Work", path: "/work" },
      { icon: FileText, label: "Blog", path: "/blog" },
    ],
  },
  {
    heading: "Connect",
    items: [
      { icon: User, label: "Resume", path: "/resume" },
      { icon: Mail, label: "Contact", path: "/contact" },
      { icon: BookOpen, label: "Books", path: "/books" },
      { icon: Sparkles, label: "Inspired By", path: "/inspiredby" },
    ],
  },
];
