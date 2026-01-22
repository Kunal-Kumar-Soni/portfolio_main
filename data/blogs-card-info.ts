export type blogsCardInfoType = {
    id: number;
    name: string;
    title:string
    createdAt:string;
    description: string;
    image: string;
    types: string[];
  };
  export const blogsCardInfo: blogsCardInfoType[] = [
    {
      id: 1,
      name: "life",
      title:"A Glimpse Into My Life.",
      createdAt:"December 29, 2025",
      description:
        "Life built around coding, gaming, and continuous learning.",
      image: "/blogs/personal.png",
      types: ["Life","Personal" ]
    },
    {
      id: 2,
      name: "learning",
      title:"How I Learn New Tools.",
      createdAt:"January 22, 2026",
      description:
        "I master new tools by building real-world projects.",
      image: "/blogs/howilearn.png",
      types: ["Learning","Growth"],
    },
  ];
  