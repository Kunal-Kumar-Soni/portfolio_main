"use client";
import { experienceInfo } from "@/data/experience-info";
import { Separator } from "../../ui/separator";
import ExperienceCard from "./experience-card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { useState } from "react";

const ExperienceSection = () => {
  const [openItem, setOpenItem] = useState<string[]>([experienceInfo[0]?.company]);
  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm tracking-widest">Professional Journey</p>
        <h1 className="font-ibmPlexSans font-bold text-3xl">Experience</h1>
      </div>

      {/* Accordion */}
      <Accordion type="multiple" value={openItem} onValueChange={setOpenItem} className="space-y-6">
        {experienceInfo.map((data) => (
          <AccordionItem key={data.id} value={data.company} className="mb-6 last:mb-0 border-none">
            <ExperienceCard data={data} isOpen={openItem.includes(data.company)} />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ExperienceSection;
