"use client";

import { BsFillFileTextFill, BsPatchCheckFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import TechBadge from "@/components/ui/tech-badge";

import { Button } from "../ui/button";
import { LinksIcon } from "../ui/link-icon";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-3xl space-y-6 px-4">
      <div className="w-full">
        {/* Cover */}
        <div className="relative h-40 overflow-hidden rounded-3xl sm:h-60">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/logo/itachi.mp4" type="video/mp4" />
          </video>

          {/* Subtle overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/5" />
        </div>

        {/* Bottom content */}
        <div className="relative">
          {/* Profile - doesn't take layout space */}
          <div className="absolute -top-15 left-5 sm:left-8">
            <div className="border-background bg-background rounded-full border-2 shadow-lg">
              <Image
                priority
                src="/logo/logo.jpg"
                alt="Kunal Kumar Soni"
                width={105}
                height={105}
                className="size-24 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name + Title */}
          <div className="flex justify-between pt-16 sm:justify-between">
            <div>
              <h1 className="flex items-center gap-2 text-xl font-semibold sm:text-2xl">
                Kunal Kumar Soni
                <BsPatchCheckFill size={20} className="text-sky-400" />
              </h1>

              <p className="text-muted-foreground mt-0.5 text-sm sm:text-base">
                Full Stack Developer
              </p>
            </div>
            <div>
              <LinksIcon />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex gap-4">
            {/* Resume Button */}
            <Button
              onClick={() => router.push("/resume")}
              className="group cursor-pointer"
            >
              <div className="flex items-center">
                <BsFillFileTextFill className="text-base transition-transform duration-300 group-hover:-rotate-20" />
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
                <IoIosSend className="text-base transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <Separator />

      <p className="text-muted-foreground line text-lg leading-9 tracking-wide">
        Full Stack Developer building modern and scalable web applications with{" "}
        <TechBadge tech="react" /> and <TechBadge tech="typescript" /> on the
        frontend, and <TechBadge tech="nodejs" />, <TechBadge tech="express" />,{" "}
        <TechBadge tech="mongodb" />, and <TechBadge tech="redis" /> on the
        backend, with <TechBadge tech="aws" /> for cloud infrastructure and
        deployment.
      </p>
    </section>
  );
}
