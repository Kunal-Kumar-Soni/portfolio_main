export type BookCardPropsType = {
  id: number;
  name: string;
  author: string;
  image: string;
  tag?: string;
};

export type BookGroupPropsType = {
  title: string;
  data: BookCardPropsType[];
};
