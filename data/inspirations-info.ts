// Real Inspirations
import ronaldo from "@/assets/inspirations/realInspirations/ronaldo.jpg"
import davidgoggins from "@/assets/inspirations/realInspirations/DavidGoggins.jpg"
// Fictional Inspirations
import ayanokoji from "@/assets/inspirations/fictionalInspirations/ayanokoji.jpg"
import goku from "@/assets/inspirations/fictionalInspirations/goku.jpg"

import { StaticImageData } from "next/image";

type InspirationsInfoType = {
  [key:string]: {
    id: number,
    name: string,
    focus: string,
    image: StaticImageData | string,
    tag?: string,
  }[]
}

export const inspirationsInfo:InspirationsInfoType = {
  "Real Inspirations": [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      focus: "Elite mindset • Consistency",
      image: ronaldo,
      tag: "Favorite",
    },
    {
      id: 2,
      name: "David Goggins",
      focus: "Mental toughness • Resilience",
      image: davidgoggins,
    },
  ],

  "Fictional Inspirations": [
    {
      id: 1,
      name: "Ayanokoji Kiyotaka",
      focus: "Calm mindset • Emotional control",
      image: ayanokoji,
      tag: "Favorite",
    },
    {
      id: 2,
      name: "Goku",
      focus: "Relentless growth • Discipline",
      image: goku,
    },
  ],
};
