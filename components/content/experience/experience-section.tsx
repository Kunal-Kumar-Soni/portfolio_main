"use client";
import { experienceInfo } from "@/data/experience-info";
import ExperienceOverview from "./experience-overview";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

const ExperienceSection = () => {
  return (
    <div className="mx-auto px-4 max-w-3xl">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="font-hankenGrotesk font-semibold text-4xl sm:text-5xl text-center tracking-tight">
          Work Experience
        </h1>
        <p className="mt-4 text-muted-foreground text-lg text-center">
          Professional experience building scalable and user-focused web applications.
        </p>
      </div>

      {/* Experience Info */}
      <div className="flex flex-col gap-8">
        {experienceInfo.map((data, index) => {
          return (
            <div key={data.id}>
              <Separator className="mb-8" />
              <ExperienceOverview data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
