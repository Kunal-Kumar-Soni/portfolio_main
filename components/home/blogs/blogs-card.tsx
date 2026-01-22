"use client";

import Image from "next/image";
import { blogsCardInfoType } from "@/data/blogs-card-info";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsCalendar3 } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function BlogCard({
    name,
    title,
    createdAt,
    description,
    image,
    types,
}: blogsCardInfoType) {

    const router = useRouter()
    return (
        <div className="group gap-6 bg-card hover:shadow-md border border-border rounded-xl transition-all hover:-translate-y-0.5">
            {/* Image */}
            <div onClick={() => router.push(`/blogs/${name}`)} className="relative rounded-t-xl w-full aspect-16/10 overflow-hidden cursor-pointer">
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
                    {types.map((type) => (
                        <span
                            key={type}
                            className="bg-primary/10 px-2 rounded-sm font-semibold text-[12px] text-primary tracking-tighter"
                        >
                            {type}
                        </span>
                    ))}
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

                    <button
                        onClick={() => router.push(`/blogs/${name}`)}
                        className="inline-flex items-center gap-2 font-medium hover:text-primary text-sm hover:underline cursor-pointer"
                    >
                        Read more
                        <FaArrowRightLong size={14} />
                    </button>
                </div>


            </div>
        </div>
    );
}
