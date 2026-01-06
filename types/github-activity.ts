type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type GithubStates = {
  contributions: ContributionDay[];
  total: {
    [year: string]: number;
  };
};
