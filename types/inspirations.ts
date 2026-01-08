export type InspirationCardPropsType = {
  id: number;
  name: string;
  focus: string;
  image: string;
  tag?: string;
};

export type InspirationGroupPropsType = {
  title: string;
  data: InspirationCardPropsType[];
};
