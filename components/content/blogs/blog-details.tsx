import Image from "next/image";
import { blogsInfo } from "@/data/blogs-info";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MdArrowBackIosNew } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { BlogOverview } from "./blogs-overview";
import Link from "next/link";

const BlogDetails = ({ slug }: { slug: string }) => {
    const blogsData = blogsInfo.find((data) => data.name === slug);

    if (!slug || !blogsData) return null;
    const overviewKeys = Object.keys(blogsData?.overview)

    return (
        <div className="mx-auto px-4 max-w-3xl">
            {/* back to home button */}
            <div className="mb-4 w-full">
                <Button asChild variant={"outline"} className="group cursor-pointer">
                    <Link href={"/blogs"}>
                        <MdArrowBackIosNew className="transition-all group-hover:-translate-x-1 duration-200" />
                        blogs
                    </Link>
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
                {overviewKeys.map((key, i) => <BlogOverview key={i} title={key} data={blogsData.overview[key]} />)}
            </div>
        </div>
    );
};

export default BlogDetails;
