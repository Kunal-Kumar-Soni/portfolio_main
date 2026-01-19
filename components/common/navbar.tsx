"use client";

import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuNotebookTabs } from "react-icons/lu";
import { ModeToggle } from "../ui/mode-toggle";
import { usePathname } from "next/navigation";
import { MdMail } from "react-icons/md";

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: LuNotebookTabs, label: "Blogs" },
  ],
  contact: {
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/Kunal-Kumar-Soni", icon: FaGithub },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kunal-kumar-soni/",
        icon: FaLinkedin,
      },
      X: { name: "X", url: "https://x.com/KunalKumar_Soni", icon: FaXTwitter },
    },
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bottom-0 z-30 fixed inset-x-0 flex mx-auto mb-4 h-full max-h-14 origin-bottom pointer-events-none">
      <div className="bottom-0 fixed inset-x-0 bg-background/5 backdrop-blur-xl w-full h-16 [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />

      <TooltipProvider>
        <Dock
          className="z-50 relative flex items-center bg-background mx-auto px-1 h-full min-h-full transform-gpu pointer-events-auto [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
          direction="middle"
        >
          {DATA.navbar.map((item) => {
            const active = pathname === item.href;
            return (
              // Data Section
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "relative size-9 rounded-full",
                        active
                          ? "bg-accent text-accent-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-accent/50"
                      )}
                    >
                      <item.icon
                        className={cn("size-4 transition-transform", active && "scale-110")}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}

          <Separator orientation="vertical" className="mx-1 my-auto h-8" />

          {/* Social Section */}
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-9 rounded-full text-muted-foreground hover:bg-accent/50"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="mx-1 my-auto h-8" />

          {/* Contact Section */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "relative size-9 rounded-full",
                    pathname === "/contact"
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent/50"
                  )}
                >
                  <MdMail
                    className={cn(
                      "size-4 transition-transform",
                      pathname === "/contact" && "scale-110"
                    )}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          {/* Theme Section */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  {" "}
                  <ModeToggle />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="dark:hidden block">Dark Mode</p>
                <p className="hidden dark:block">Light Mode</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
