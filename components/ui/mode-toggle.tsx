"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ImSun } from "react-icons/im";
import { RxMoon } from "react-icons/rx";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <ImSun className="dark:hidden w-[1.2rem] h-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      <RxMoon className="hidden dark:block w-[1.2rem] h-[1.2rem] text-neutral-800 dark:text-neutral-200" />
    </Button>
  );
}
