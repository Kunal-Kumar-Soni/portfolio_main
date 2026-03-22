"use client";

import Image from "next/image";
import { Code2, MapPin, Mail, Mars } from "lucide-react";
import { BsFillFileTextFill, BsPatchCheckFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { IoIosSend } from "react-icons/io";
import TechBadge from "@/components/ui/tech-badge";
import { IconBadge } from "../ui/icon-badge";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="mx-auto px-4 max-w-3xl">
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

      <Separator className="my-6" />

      {/* IconBadge Grid */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 text">
        {/* Left */}
        <div className="space-y-5">
          <IconBadge icon={<Code2 size={16} />} text="Frontend Developer" link="#" />
          <IconBadge icon={<Mars size={16} />} text="he/him" link="#" />
        </div>

        {/* Right */}
        <div className="space-y-5">
          <IconBadge
            icon={<MapPin size={16} />}
            text="Bokaro, Jharkhand, India"
            link="https://www.google.com/maps/place/Bokaro+Thermal,+Jharkhand/@23.7929814,85.8729708,15z/data=!3m1!4b1!4m6!3m5!1s0x39f46b84cf401591:0xd366eaa0a2518c13!8m2!3d23.7978583!4d85.8844404!16s%2Fm%2F027pq5d?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
          />
          <IconBadge
            icon={<Mail size={16} />}
            text="kunal.codes24@gmail.com"
            link="mailto:kunal.codes24@gmail.com"
          />
        </div>
      </div>

      <Separator className="my-6" />

      <p className="text-muted-foreground text-lg leading-9 tracking-wide line">
        Frontend developer working with <TechBadge tech="react" />, <TechBadge tech="nextjs" />, and{" "}
        <TechBadge tech="typescript" /> to build modern, responsive web applications, using{" "}
        <TechBadge tech="tailwind" /> and <TechBadge tech="shadcn" /> for clean and consistent UI.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
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
