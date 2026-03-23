import {
  Home,
  Briefcase,
  FileText,
  User,
  FolderKanban,
  Code,
  Github,
  Mail,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { IconType } from "react-icons/lib";

type CommandData = { heading: string; items: { icon: IconType; label: string; path: string }[] };

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
      { icon: Sparkles, label: "Inspirations", path: "/inspirations" },
    ],
  },
];
