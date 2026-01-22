export type blogsCardInfoType = {
    id: number;
    name: string;
    description: string;
    image: string;
    type: string;
  };
  export const blogsCardInfo: blogsCardInfoType[] = [
    {
      id: 1,
      name: "Life",
      description:
        "A collection of life experiences where coding, gaming, learning, and personal growth naturally come together.",
      image: "/blogs/personal.png",
      type: "Life" 
    },
  
    {
      id: 2,
      name: "Learning",
      description:
        "My journey of learning new tools through curiosity, practice, and real-world project experience.",
      image: "/projectsImg/shopkaro2.png",
      type: "Learning",
     
    },
  ];
  