"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TechBadge from "@/components/ui/tech-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ExperienceType } from "@/data/experience-info";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExperienceCard = ({ data, isOpen }: { data: ExperienceType; isOpen: boolean }) => {
  const { company, link, role, logo, status, duration, location, technologies, points } = data;

  return (
    <>
      {/* Header Container */}
      <AccordionTrigger className="group [&>svg]:hidden p-0 w-full hover:no-underline">
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-start gap-2 w-full">
          {/* Left Side: Logo & Title */}
          <div className="flex gap-3">
            <div className="w-11 sm:w-12 h-11 sm:h-12">
              <Image
                height={45}
                width={45}
                src={logo}
                alt="company's_logo"
                className="rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex justify-between gap-2">
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ibmPlexSans font-semibold text-base sm:text-lg hover:underline leading-tight tracking-normal"
                >
                  {company}
                </Link>

                <div className="flex justify-between gap-2">
                  {/* Working Badge */}
                  {status === "working" && (
                    <div className="inline-flex items-center gap-1 bg-green-500/10 px-1.5 py-0.5 border border-green-500/20 rounded-sm h-fit shrink-0">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inset-0 bg-green-400 opacity-75 rounded-full animate-ping"></span>
                        <span className="relative bg-green-500 rounded-full w-2 h-2"></span>
                      </span>
                      <span className="font-bold text-[12px] text-green-500 tracking-tighter sm:tracking-wider">
                        Working
                      </span>
                    </div>
                  )}

                  {/* Expand Button */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <ChevronDown className="hover:bg-accent mt-1 rounded w-5 h-5 text-muted-foreground data-[state=open]:rotate-180 group-data-[state=open]:rotate-180 transition-transform duration-200" />
                    </TooltipTrigger>
                    <TooltipContent> {isOpen ? "Hide details" : "View details"}</TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <p className="-mt-1 sm:mt-0 text-muted-foreground text-sm -tracking-wider">{role}</p>
            </div>
          </div>

          {/* Right Side: Date & Location */}
          <div className="flex flex-col sm:items-end -mt-1 sm:mt-0 ml-12.5 sm:ml-0 text-left sm:text-right">
            <p className="font-medium text-muted-foreground text-sm">{duration}</p>
            <p className="text-muted-foreground text-sm">{location}</p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="mt-5">
          <h2 className="font-ibmPlexSans font-semibold text-base tracking-wider">
            Technologies & Tools
          </h2>

          {/* Badges Container */}
          <div className="flex flex-wrap gap-3 mt-2">
            {technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          {/* Experience Details */}
          <div className="space-y-1 mt-5">
            {points.map((point, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 text-muted-foreground text-sm sm:text-base"
              >
                <div className="flex items-center h-6 shrink-0">
                  <div className="bg-zinc-600 rounded-full w-1.5 h-1.5" />
                </div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </AccordionContent>
    </>
  );
};

export default ExperienceCard;
