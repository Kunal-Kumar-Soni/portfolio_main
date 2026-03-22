"use client";
import { experienceInfo } from "@/data/experience-info";
import { Separator } from "../../ui/separator";
import ExperienceCard from "./experience-card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

const experienceInfoTwoData = experienceInfo.slice(0, 2);

const ExperienceSection = () => {
  const [openItem, setOpenItem] = useState<string[]>([experienceInfoTwoData[0]?.company]);

  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-bold text-3xl">Experience</h1>
      </div>

      {/* Accordion */}
      <Accordion type="multiple" value={openItem} onValueChange={setOpenItem} className="space-y-6">
        {experienceInfoTwoData.map((data) => (
          <AccordionItem key={data.id} value={data.company} className="mb-6 last:mb-0 border-none">
            <ExperienceCard data={data} isOpen={openItem.includes(data.company)} />
          </AccordionItem>
        ))}
      </Accordion>

      {/* button */}
      <div className="flex justify-center items-center mt-8">
        <Button variant="secondary" asChild>
          <Link href="/work" className="flex items-center gap-2">
            Show all experiences
            <RiArrowRightSLine />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExperienceSection;
