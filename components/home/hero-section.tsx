"use client";

import Image from "next/image";
import { BsFillFileTextFill, BsPatchCheckFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { IoIosSend } from "react-icons/io";
import TechBadge from "@/components/ui/tech-badge";
import { LinksIcon } from "../ui/link-icon";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="space-y-6 mx-auto px-4 max-w-3xl">
      <div className="flex items-center gap-5">
        <div className="relative">
          {/* Profile */}
          <Image
            priority
            src="/logo/logo.jpg"
            alt="Profile"
            width={96}
            height={96}
            className="rounded-xl"
          />
        </div>

        {/* Name */}
        <div>
          <h1 className="flex items-center gap-2 font-semibold text-xl sm:text-2xl">
            Kunal Kumar Soni
            <BsPatchCheckFill size={20} className="text-sky-400" />
          </h1>

          <p className="text-muted-foreground md:text-base">23' Engineer</p>
        </div>
      </div>

      <Separator />

      <p className="text-muted-foreground text-lg leading-9 tracking-wide line">
        Frontend developer working with <TechBadge tech="react" />, <TechBadge tech="nextjs" />, and{" "}
        <TechBadge tech="typescript" /> to build modern, responsive web applications, using{" "}
        <TechBadge tech="tailwind" /> and <TechBadge tech="shadcn" /> for clean and consistent UI.
      </p>

      <div>
        <LinksIcon />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* Resume Button */}
        <Button onClick={() => router.push("/resume")} className="group cursor-pointer">
          <div className="flex items-center">
            <BsFillFileTextFill className="text-base group-hover:-rotate-20 transition-transform duration-300" />
            <span className="ml-2">Resume / CV</span>
          </div>
        </Button>

        {/* Contact Button */}
        <Button
          variant="secondary"
          onClick={() => router.push("/contact")}
          className="group cursor-pointer"
        >
          <div className="flex items-center">
            <span className="mr-2">Get in touch</span>
            <IoIosSend className="text-base group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </Button>
      </div>
    </section>
  );
}
