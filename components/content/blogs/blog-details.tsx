"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { blogsInfo, blogsInfoType } from "@/data/blogs-info";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MdArrowBackIosNew } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { BlogOverview } from "./blogs-overview";

const BlogDetails = ({ slug }: { slug: string }) => {
    const [blogsData, setBlogsData] = useState<blogsInfoType>();
    const router = useRouter()

    useEffect(() => {
        const data = blogsInfo.find((data) => data.name === slug);
        setBlogsData(data);
    }, [slug]);



    if (!slug || !blogsData) return null;

    return (
        <div className="mx-auto px-4 max-w-3xl">
            {/* back to home button */}
            <div className="mb-4 w-full">
                <Button variant={"outline"} onClick={() => router.push("/blogs")} className="group cursor-pointer">
                    <MdArrowBackIosNew className="transition-all group-hover:-translate-x-1 duration-200" />{" "}
                    blogs
                </Button>
            </div>


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
                {/* Content Section */}
                <div className="space-y-5 mt-10">
                    <div className="flex gap-3">
                        {blogsData.types.map((type) => (
                            <span
                                key={type}
                                className="bg-primary/10 px-2 py-1 rounded-sm font-semibold text-[12px] text-primary"
                            >
                                {type}
                            </span>
                        ))}
                    </div>

                    <h1 className="font-ibmPlexSans font-bold text-4xl md:text-5xl">{blogsData.title}</h1>
                    <p className="text-muted-foreground text-lg">{blogsData.description}</p>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <BsCalendar3 size={16} />
                        <p className="text-base tracking-tight">{blogsData.createdAt}</p>
                    </div>
                </div>

            </div>

            <Separator className="my-10" />

            <div className="space-y-10">
                {/* Overview Section*/}
                <BlogOverview title={"Personal Life"} data={blogsData?.overview?.whyIBuiltThis} />
                <BlogOverview title={"Coding Journey"} data={blogsData?.overview?.features} />
                <BlogOverview title={"Gaming"} data={blogsData?.overview?.technologies} />
            </div>
        </div>
    );
};

export default BlogDetails;
