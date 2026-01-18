"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ImSun } from "react-icons/im";
import { RxMoon } from "react-icons/rx";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    const audio = new Audio("/capture/capture.wav");
    audio.volume = 0.4;
    audio.play();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
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
  );
}
