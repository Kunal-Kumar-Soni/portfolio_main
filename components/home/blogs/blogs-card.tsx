"use client";

import Image from "next/image";
import Link from "next/link";
import { blogsCardInfoType } from "@/data/blogs-card-info";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

export default function BlogCard({
    name,
    title,
    createdAt,
    description,
    image,
    types,
}: blogsCardInfoType) {
    return (
        <div className="group gap-6 bg-card hover:shadow-md border border-border rounded-xl transition-all hover:-translate-y-0.5">
            {/* Image */}
            <div className="relative rounded-t-xl w-full aspect-16/10 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 355px"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 justify-between p-6">

                <div className="flex gap-3">
                    {types.map((t) => <p className="inline-block items-center gap-1 bg-primary/10 px-2 rounded-sm font-semibold text-[12px] text-primary tracking-tighter">
                        {t}
                    </p>)}
                </div>

                <p className="mt-4 font-ibmPlexSans font-semibold text-lg leading-relaxed tracking-wider">
                    {title}
                </p>
                <p className="mt-4 text-muted-foreground text-base line-clamp-3 tracking-tight">
                    {description}
                </p>


                {/* */}
                <div className="flex justify-between mt-6 text-muted-foreground">
                    <div className="flex justify-center items-center gap-2">
                        <BsCalendar3 size={16} />
                        <p className="text-sm tracking-tight">{createdAt}</p>
                    </div>

                    <Link
                        href={`/projects/${name}`}
                        className="inline-flex items-center gap-2 font-medium hover:text-primary text-sm hover:underline"
                    >
                        Read more
                        <FaArrowRightLong size={14} />
                    </Link>
                </div>


            </div>
        </div>
    );
}
