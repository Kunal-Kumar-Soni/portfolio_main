"use client";

import TechBadge from "@/components/ui/tech-badge";

import { ExperienceType } from "@/data/experience-info";

const ExperienceOverview = ({ data }: { data: ExperienceType }) => {
  const { company, role, status, duration, location, technologies, points } = data;

  return (
    <>
      <div className="flex justify-between items-start w-full">
        {/* Left Side */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center gap-1 min-h-7">
            <h1 className="font-semibold text-lg tracking-tight md:tracking-normal">{company}</h1>

            {status === "working" && (
              <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 border border-green-500/20 rounded-sm">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 bg-green-400 opacity-75 rounded-full animate-ping" />
                  <span className="bg-green-500 rounded-full w-2 h-2" />
                </span>
                <span className="font-semibold text-green-500 text-xs">Working</span>
              </div>
            )}
          </div>

          <p className="text-muted-foreground">{role}</p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col text-right tracking-tighter">
          <p className="font-medium text-muted-foreground">{duration}</p>
          <p className="text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="font-hankenGrotesk font-semibold text-base tracking-wider">
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
              className="group flex items-start gap-3 text-muted-foreground text-base"
            >
              <div className="flex items-center h-6 shrink-0">
                <div className="bg-zinc-600 rounded-full w-1.5 h-1.5" />
              </div>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceOverview;
