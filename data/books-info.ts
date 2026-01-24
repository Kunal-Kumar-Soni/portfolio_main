type BooksInfoType = {
  [key:string]: {
    id: number,
    name: string,
    author: string,
    image: string,
    tag?: string,
  }[]
}


export const BooksInfo:BooksInfoType = {
  "Power And Control": [
    {
      id: 1,
      name: "Bhagavad Gita",
      author: "Ved Vyasa",
      image: "/books/Bhagavad_Gita.jpg",
      tag: "Favorite",
    },
    {
      id: 2,
      name: "48 Laws of Power",
      author: "Robert Greene",
      image: "/books/48_Laws_of_Power.jpg",
    },
    {
      id: 3,
      name: "Human Nature",
      author: "Robert Greene",
      image: "/books/Human_nature.jpg",
    },
    {
      id: 4,
      name: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      image: "/books/Rich_dad_Poor_dad.jpg",
    },
  ],
};
