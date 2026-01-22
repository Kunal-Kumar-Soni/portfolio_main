"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { blogsInfo, blogsInfoType } from "@/data/blogs-info";

const BlogDetails = ({ slug }: { slug: string }) => {
    const [blogsData, setBlogsData] = useState<blogsInfoType>();
    const router = useRouter();

    useEffect(() => {
        const data = blogsInfo.find((data) => data.name === slug);
        setBlogsData(data);
        console.log(blogsInfo)
    }, [slug]);



    if (!slug || !blogsData) return null;

    return (
        <div className="mx-auto px-4 max-w-3xl">


            <div className="space-y-5">
                {/* Image section */}
                <div className="relative shadow-md rounded-md aspect-video">
                    <Image
                        alt={blogsData.name}
                        fill
                        src={blogsData.image}
                        className="rounded-md object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
