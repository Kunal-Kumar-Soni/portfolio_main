import { experienceInfo, ExperienceType } from "@/data/experience-info";
import { Separator } from "../ui/separator";

const TryComp = () => {
  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk font-bold text-3xl">Experience</h1>
      </div>

      {/* Data */}
      <div className="flex flex-col gap-4">
        {experienceInfo.map((ex) => (
          <ExCard key={ex.id} exInfo={ex} />
        ))}
      </div>
    </div>
  );
};

const ExCard = ({ exInfo }: { exInfo: ExperienceType }) => {
  return (
    <div className="flex justify-between">
      <div className="">
        <div className="flex gap-2 text-lg tracking-tight">
          {exInfo.company}
          {exInfo.status === "working" && (
            <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 border border-green-500/20 rounded">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 bg-green-400 opacity-75 rounded-full animate-ping" />
                <span className="bg-green-500 rounded-full w-2 h-2" />
              </span>

              <span className="font-semibold text-green-500 text-xs">Working</span>
            </div>
          )}
        </div>
        <p className="text-muted-foreground">{exInfo.role}</p>
      </div>

      <div className="text-muted-foreground text-right tracking-tighter">
        <p className="">{exInfo.duration}</p>
        <h1>{exInfo.location}</h1>
      </div>
    </div>
  );
};
export default TryComp;
