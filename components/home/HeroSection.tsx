"use client";

import Image from "next/image";
import { Code2, MapPin, Phone, Globe, Mail, User, Mars } from "lucide-react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto p-4 max-w-3xl font-geistMono -xl">
      {/* Top */}
      <div className="flex items-center gap-5">
        {/* Avatar */}
        <div className="relative">
          {/* Profile */}
          <Image src="/logo.png" alt="Profile" width={96} height={96} />

          {/* Flag */}
          <span className="-right-1 -bottom-1 absolute">
            <Image src="/india.png" alt="India" width={26} height={26} />
          </span>
        </div>

        {/* Name */}
        <div>
          <h1 className="flex items-center gap-2 font-semibold text-2xl">
            Kunal Soni
            <BsPatchCheckFill className="text-sky-400" />
          </h1>
          <p className="text-sm">Open Source Contributor</p>
        </div>
      </div>

      {/* Divider */}
      <Separator className="my-6" />

      {/* Info Grid */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 text-sm">
        {/* Left */}
        <div className="space-y-3">
          <Info icon={<Code2 size={14} />} text="Frontend Developer" link="#" />
          <Info icon={<Phone size={14} />} text="+91 821 034 1466" link="#" />
          <Info icon={<Globe size={14} />} text="kunalkumarsoni.com" link="#" />
        </div>

        {/* Right */}
        <div className="space-y-3">
          <Info icon={<MapPin size={14} />} text="Bokaro, Jharkhand, India" link="#" />
          <Info icon={<Mail size={14} />} text="kunal.codes24@gmail.com" link="#" />
          <Info icon={<Mars size={14} />} text="he/him" link="#" />
        </div>
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

      <Link href={link} className="text-[13px] leading-tight">
        {text}
      </Link>
    </div>
  );
}
