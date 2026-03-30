// Real Inspiration
import { StaticImageData } from "next/image";

// Fictional Inspiration
import ayanokoji from "@/assets/inspiredby/fictional/ayanokoji.jpg";
import goku from "@/assets/inspiredby/fictional/goku.jpg";
import davidgoggins from "@/assets/inspiredby/real/DavidGoggins.jpg";
import ronaldo from "@/assets/inspiredby/real/ronaldo.jpg";

type InspiredbyInfoType = {
  [key: string]: {
    id: number;
    name: string;
    focus: string;
    image: StaticImageData | string;
    tag?: string;
  }[];
};

export const inspiredbyInfo: InspiredbyInfoType = {
  "Real Characters": [
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

  "Fictional Characters": [
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
