import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Separator } from "./ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background mx-auto px-4 pt-8 pb-30 w-full max-w-3xl font-geistMono">
      <Separator />
      <p className="mt-4 text-muted-foreground text-sm text-center">
        © {currentYear} <span className="font-medium text-foreground">Kunal Kumar Soni</span>. All
        rights reserved.
      </p>
    </footer>
  );
}
