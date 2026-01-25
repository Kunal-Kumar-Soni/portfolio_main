import { StaticImageData } from "next/image";

export type BookCardPropsType = {
  id: number;
  name: string;
  author: string;
  image: StaticImageData | string;
  tag?: string;
};

export type BookGroupPropsType = {
  title: string;
  data: BookCardPropsType[];
};
