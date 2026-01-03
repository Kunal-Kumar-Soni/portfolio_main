"use client";
import { GitHubCalendar } from "react-github-calendar";
import { Separator } from "../ui/separator";
import { useTheme } from "next-themes";

const GithubActivity = () => {
  const { theme } = useTheme();

  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl font-geistMono">
      <Separator className="my-6" />

      <h2 className="mb-6 font-ibmPlexSans font-bold text-3xl">GitHub Activity</h2>

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
