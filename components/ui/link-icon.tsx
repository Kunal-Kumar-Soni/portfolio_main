"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const LinksIcon = () => {
  const LinksInfo = [
    { icon: FaGithub, link: "https://github.com/Kunal-Kumar-Soni", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/kunal-kumar-soni", label: "LinkedIn" },
    { icon: BsTwitterX, link: "https://x.com/KunalKumar_Soni", label: "X" },
    { icon: IoMail, link: "mailto:kunalcodes24@gmail.com", label: "Email" },
  ];

  return (
    <TooltipProvider>
      <div className="flex gap-3">
        {LinksInfo.map((linkInfo) => {
          const { icon: Icon, label, link } = linkInfo;

          return (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center items-center text-muted-foreground hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Icon
                    size={20}
                    className="group-hover:rotate-6 transition-transform duration-200"
                  />
                </Link>
              </TooltipTrigger>

              <TooltipContent>
                <p className="text-xs">{label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};
