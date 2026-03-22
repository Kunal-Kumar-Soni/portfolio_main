"use client";
import { GitHubCalendar } from "react-github-calendar";
import { Separator } from "../ui/separator";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { GithubStates } from "@/types/github-activity";
import Link from "next/link";
import { Spinner } from "../ui/spinner";

//Github Username
const GITHUB_USER_NAME = "Kunal-Kumar-Soni";

const GithubActivity = () => {
  const { theme } = useTheme();
  const [totalContribution, setTotalContribution] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER_NAME}`,
      );
      const data: GithubStates = await res.json();

      setTotalContribution(
        Object.values(data?.total).reduce((acc, curr) => (acc as number) + (curr as number), 0),
      );
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
    setIsMounted(true);
  }, [getData]);

  if (!isMounted) return null;

  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk font-bold text-3xl">GitHub Activity</h1>
      </div>

      {isLoading ? (
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Loading…</span>
          <Spinner className="w-4 h-4" />
        </div>
      ) : (
        <div className="mb-2">
          <span className="mr-1 text-muted-foreground">Total contributions:</span>
          {isError ? (
            <span className="text-foreground">unavailable</span>
          ) : (
            <span className="bg-foreground/5 dark:bg-foreground/10 px-2 py-0.5 rounded font-medium text-foreground">
              {totalContribution}
            </span>
          )}
          <Link
            className="pl-2 text-muted-foreground hover:text-foreground underline"
            href="https://github.com/Kunal-Kumar-Soni"
            target="_blank"
          >
            Github
          </Link>
        </div>
      )}

      <div className="bg-background py-2">
        <GitHubCalendar
          username="Kunal-Kumar-Soni"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={10}
          blockMargin={3.9}
          blockRadius={2}
          fontSize={14}
          labels={{
            totalCount: `{{count}} contributions since 2025`,
          }}
        />
      </div>
    </div>
  );
};

export default GithubActivity;
