"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ImSun } from "react-icons/im";
import { RxMoon } from "react-icons/rx";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { useEffect } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "d") {
        e.preventDefault();
        handleMode();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [theme]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            type="button"
            size="icon"
            className="group hover:bg-accent/50 hover:shadow-none rounded-full size-9 cursor-pointer"
            onClick={handleMode}
          >
            <ImSun className="hidden dark:block size-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <RxMoon className="dark:hidden size-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="py-2">
          Toggle Mode{" "}
          <span className="bg-background/20 px-1.5 py-0.5 rounded font-medium text-[12px]">D</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
