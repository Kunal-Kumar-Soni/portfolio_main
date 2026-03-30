"use client";

import { BsCalendar3 } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { blogCardInfoType } from "@/data/blog-card-info";

export default function BlogCard({
  name,
  title,
  createdAt,
  description,
  image,
  types,
}: blogCardInfoType) {
  const router = useRouter();
  return (
    <div className="group bg-card border-border gap-6 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md">
      {/* Image */}
      <div
        onClick={() => router.push(`/blog/${name}`)}
        className="relative aspect-16/10 w-full cursor-pointer overflow-hidden rounded-t-xl"
        role="button"
      >
        <Image
          src={image}
          alt={name}
          fill
          priority
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 355px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex gap-3">
          {types.map((type) => (
            <span
              key={type}
              className="bg-primary/10 text-primary rounded-sm px-2 py-0.5 text-[12px] font-semibold"
            >
              {type}
            </span>
          ))}
        </div>

        <p className="font-hankenGrotesk mt-4 text-lg leading-relaxed font-semibold tracking-wider">
          {title}
        </p>
        <p className="text-muted-foreground mt-4 line-clamp-3 leading-relaxed tracking-wide">
          {description}
        </p>

        {/* Date and button*/}
        <div className="text-muted-foreground mt-6 flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <BsCalendar3 size={16} />
            <p className="tracking-tight">{createdAt}</p>
          </div>

          <button
            onClick={() => router.push(`/blog/${name}`)}
            className="hover:text-primary inline-flex cursor-pointer items-center gap-2 font-medium hover:underline"
          >
            Read more
            <FaArrowRightLong size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
