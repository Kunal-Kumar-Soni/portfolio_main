import { experienceInfo } from "@/data/experience-info";
import { Separator } from "../../ui/separator";
import ExperienceCard from "./experience-card";

const ExperienceSection = () => {
  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm tracking-widest">Professional Journey</p>
        <h1 className="font-ibmPlexSans font-bold text-3xl">Experience</h1>
      </div>

      {/* Header Container */}
      {experienceInfo.map((data, index) => (
        <div key={data.id} className="mb-10 last:mb-0">
          <ExperienceCard data={data} />
          {index !== experienceInfo.length - 1 && <Separator className="mt-10" />}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
