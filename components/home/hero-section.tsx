"use client";

import Image from "next/image";
import { Code2, MapPin, Phone, Globe, Mail, Mars } from "lucide-react";
import { BsFillFileTextFill, BsPatchCheckFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { IoIosSend } from "react-icons/io";
import { TechBadge } from "../ui/tech-badges";
import { TextAnimate } from "../ui/text-animate";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const router = useRouter();
  const text = ["Progress over perfection.", "Calm Progress.", "Open Source Contributor."];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => {
        const isLastIndex = prevIndex >= text.length - 1;
        return isLastIndex ? 0 : prevIndex + 1;
      });

      // after first interval tick, enable animation
      setFirstRender(false);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto px-4 max-w-3xl">
      <div className="flex items-center gap-5">
        <div className="relative">
          {/* Profile */}
          <Image src="/logo.jpg" alt="Profile" width={96} height={96} className="rounded-xl" />
          {/* Flag */}
          <span className="-right-1 -bottom-1 absolute">
            <Image src="/india.png" alt="India" width={26} height={26} />
          </span>
        </div>

        {/* Name */}
        <div>
          <h1 className="flex items-center gap-2 font-ibmPlexSans font-semibold text-2xl">
            Kunal Soni
            <BsPatchCheckFill size={18} className="text-sky-400" />
          </h1>

          {/* Animated Text */}
          {firstRender ? (
            <p className="text-muted-foreground text-sm md:text-base">Open Source Contributor.</p>
          ) : (
            <TextAnimate
              className="text-muted-foreground text-sm md:text-base"
              animation="slideLeft"
              by="line"
              as="p"
            >
              {text[textIndex]}
            </TextAnimate>
          )}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Info Grid */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 text-sm">
        {/* Left */}
        <div className="space-y-3">
          <Info icon={<Code2 size={14} />} text="Frontend Developer" link="#" />
          <Info icon={<Phone size={14} />} text="+91 821 034 1466" link="tel:+918210341466" />
          <Info icon={<Globe size={14} />} text="kunalkumarsoni.com" link="#" />
        </div>

        {/* Right */}
        <div className="space-y-3">
          <Info
            icon={<MapPin size={14} />}
            text="Bokaro, Jharkhand, India"
            link="https://www.google.com/maps/place/Bokaro+Thermal,+Jharkhand/@23.7929814,85.8729708,15z/data=!3m1!4b1!4m6!3m5!1s0x39f46b84cf401591:0xd366eaa0a2518c13!8m2!3d23.7978583!4d85.8844404!16s%2Fm%2F027pq5d?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
          />
          <Info
            icon={<Mail size={14} />}
            text="kunal.codes24@gmail.com"
            link="mailto:kunal.codes24@gmail.com"
          />
          <Info icon={<Mars size={14} />} text="he/him" link="#" />
        </div>
      </div>

      <Separator className="my-6" />

      <p className="text-muted-foreground text-sm sm:text-base leading-9 sm:leading-loose line">
        Frontend developer experienced in{" "}
        <Link target="_blank" href="https://react.dev/">
          <TechBadge label="React" icon="react" />
        </Link>
        ,{" "}
        <Link target="_blank" href="https://nextjs.org/">
          <TechBadge label="Next.js" icon="next" />
        </Link>
        , and{" "}
        <Link target="_blank" href="https://www.typescriptlang.org/">
          <TechBadge label="TypeScript" icon="ts" />
        </Link>
        , focused on building modern and responsive web applications. Skilled in{" "}
        <Link target="_blank" href="https://tailwindcss.com/">
          <TechBadge label="Tailwind CSS" icon="tailwind" />
        </Link>{" "}
        and{" "}
        <Link target="_blank" href="https://ui.shadcn.com/">
          <TechBadge label="shadcn/ui" icon="shadcn" />
        </Link>{" "}
        for building clean, accessible, and consistent UI components.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        {/* Resume Button */}
        <Button
          onClick={() => router.push("/resume")}
          className="group relative hover:shadow-lg px-4 text-white dark:text-slate-900 active:scale-95 transition-all hover:-translate-y-1 duration-300 cursor-pointer"
        >
          <div className="flex items-center">
            <BsFillFileTextFill className="text-base group-hover:-rotate-20 transition-transform duration-300" />
            <span className="ml-2">Resume / CV</span>
          </div>
        </Button>

        {/* Contact Button */}
        <Button
          variant="secondary"
          onClick={() => router.push("/contact")}
          className="group relative shadow-sm hover:shadow-lg px-4 text-slate-900 dark:text-white active:scale-95 transition-all hover:-translate-y-1 duration-300 cursor-pointer"
        >
          <div className="flex items-center">
            <span className="mr-2">Get in touch</span>
            <IoIosSend className="text-base transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
          </div>
        </Button>
      </div>
    </section>
  );
}

/* Reusable Row */
function Info({ icon, text, link }: { icon: React.ReactNode; text: string; link: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex justify-center items-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md w-6 h-6 text-zinc-500 dark:text-zinc-400">
        <span className="w-3.5 h-3.5">{icon}</span>
      </span>

      <Link
        href={link}
        target="_blank"
        className={`text-[14px] leading-tight ${link !== "#" && "hover:underline"}`}
      >
        {text}
      </Link>
    </div>
  );
}
