"use client";
import { Separator } from "../ui/separator";
import { BsBookHalf, BsFire } from "react-icons/bs";
import Image from "next/image";

const InspirationsSection = () => {
  const realInspirations = [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      focus: "Elite mindset • Consistency ",
      image: "/inspirations/realInspirations/ronaldo.jpg",
      tag: "Favorite",
    },
    {
      id: 2,
      name: "David Goggins",
      focus: "Mental toughness • resilience",
      image: "/inspirations/realInspirations/DavidGoggins.jpg",
    },
  ];

  const fictionalInspirations = [
    {
      id: 1,
      name: "Ayanokoji Kiyotaka",
      focus: "Calm mindset • Emotional control",
      image: "/inspirations/fictionalInspirations/ayanokoji.jpg",
      tag: "Favorite",
    },
    {
      id: 2,
      name: "Goku",
      focus: "Relentless growth • Discipline",
      image: "/inspirations/fictionalInspirations/goku.jpg",
    },
    {
      id: 3,
      name: "Itachi Uchiha",
      focus: "Sacrifice • Emotional restraint",
      image: "/inspirations/fictionalInspirations/itachi.jpg",
    },
    {
      id: 4,
      name: "Sung Jin-Woo",
      focus: "Self-made strength • Consistency",
      image: "/inspirations/fictionalInspirations/sungjinwoo.jpg",
    },
  ];

  return (
    <div className="mx-auto px-4 max-w-3xl">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-ibmPlexSans font-bold text-4xl text-center">Inspirations</h1>
        <p className="mt-5 text-muted-foreground text-center tracking-wide">
          A collection of real and fictional inspirations I learn from.
        </p>
      </div>

      <Separator className="mb-10" />

      {/* Real Inspirations*/}
      <div>
        {/* Icons & Bio  */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex justify-center items-center bg-muted rounded-lg w-10 h-10">
            <BsFire className="w-5 h-5 text-orange-500" />
          </div>

          <h1 className="font-ibmPlexSans font-semibold text-2xl tracking-wide">
            Discipline & Mental Strength
          </h1>
        </div>
        <div className="gap-x-10 gap-y-10 md:gap-y-20 grid grid-cols-1 md:grid-cols-2 mt-6">
          {realInspirations.map((book) => (
            <div
              key={book.id}
              className="relative bg-card hover:shadow-lg border border-border rounded-xl overflow-hidden transition-all hover:-translate-y-1 duration-300"
            >
              {/* Image Wrapper */}
              <div className="relative bg-muted w-full aspect-2/3">
                <Image src={book.image} alt={book.name} fill className="object-cover" />
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="font-ibmPlexSans font-semibold text-lg leading-tight">
                  {book.name}
                </h3>
                <p className="mt-1 text-muted-foreground text-sm"> {book.focus}</p>
              </div>

              {/* Tag */}
              {book.tag && (
                <div className="top-0 right-0 z-10 absolute w-20 h-20 overflow-hidden">
                  <span className="top-4 -right-8 absolute bg-red-600 shadow-md w-28 font-semibold text-[11px] text-white text-center rotate-45">
                    {book.tag}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fictional Inspirations*/}
      <div className="mt-10">
        {/* Icons & Bio  */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex justify-center items-center bg-muted rounded-lg w-10 h-10">
            <BsFire className="w-5 h-5 text-orange-500" />
          </div>

          <h1 className="font-ibmPlexSans font-semibold text-2xl tracking-wide">
            Fictional Mindset
          </h1>
        </div>
        <div className="gap-x-10 gap-y-10 md:gap-y-20 grid grid-cols-1 md:grid-cols-2 mt-6">
          {fictionalInspirations.map((book) => (
            <div
              key={book.id}
              className="relative bg-card hover:shadow-lg border border-border rounded-xl overflow-hidden transition-all hover:-translate-y-1 duration-300"
            >
              {/* Image Wrapper */}
              <div className="relative bg-muted w-full aspect-2/3">
                <Image src={book.image} alt={book.name} fill className="object-cover" />
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="font-ibmPlexSans font-semibold text-lg leading-tight">
                  {book.name}
                </h3>
                <p className="mt-1 text-muted-foreground text-sm"> {book.focus}</p>
              </div>

              {/* Tag */}
              {book.tag && (
                <div className="top-0 right-0 z-10 absolute w-20 h-20 overflow-hidden">
                  <span className="top-4 -right-8 absolute bg-red-600 shadow-md w-28 font-semibold text-[11px] text-white text-center rotate-45">
                    {book.tag}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationsSection;
