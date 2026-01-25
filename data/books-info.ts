import { StaticImageData } from "next/image";
import Bhagavad_Gita from "@/assets/books/Bhagavad_Gita.jpg"
import Laws_of_Power from "@/assets/books/48_Laws_of_Power.jpg"
import Human_nature from "@/assets/books/Human_nature.jpg"
import Rich_dad_Poor_dad from "@/assets/books/Rich_dad_Poor_dad.jpg"

type BooksInfoType = {
  [key:string]: {
    id: number,
    name: string,
    author: string,
    image:StaticImageData | string,
    tag?: string,
  }[]
}


export const BooksInfo:BooksInfoType = {
  "Power And Control": [
    {
      id: 1,
      name: "Bhagavad Gita",
      author: "Ved Vyasa",
      image: Bhagavad_Gita,
      tag: "Favorite",
    },
    {
      id: 2,
      name: "48 Laws of Power",
      author: "Robert Greene",
      image: Laws_of_Power,
    },
    {
      id: 3,
      name: "Human Nature",
      author: "Robert Greene",
      image: Human_nature,
    },
    {
      id: 4,
      name: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      image: Rich_dad_Poor_dad,
    },
  ],
};
