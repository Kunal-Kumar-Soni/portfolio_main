"use client";
import { GitHubCalendar } from "react-github-calendar";
import { Separator } from "../ui/separator";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const GithubActivity = () => {
  const { theme } = useTheme();
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm tracking-widest">Insight</p>
        <h1 className="font-ibmPlexSans font-bold text-3xl">GitHub Activity</h1>
      </div>

      <div className="bg-background px-5.5 py-5 border border-border rounded-xl">
        <GitHubCalendar
          username="Kunal-Kumar-Soni"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={10}
          blockMargin={3}
          fontSize={12}
        />
      </div>
    </div>
  );
};

export default GithubActivity;
