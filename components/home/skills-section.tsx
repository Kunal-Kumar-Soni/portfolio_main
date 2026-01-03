import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Separator } from "../ui/separator";
import { STACKS } from "@/data/skillsData";

const SkillSection = () => {
  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl font-geistMono">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm tracking-widest">Insight</p>
        <h1 className="font-ibmPlexSans font-bold text-3xl">Stack</h1>
      </div>

      <div className="flex flex-wrap gap-3">
        {STACKS.map((stack, i) => {
          const Icon = stack.icon;

          return (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <a
                  href={stack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-background hover:bg-muted/40 rounded-lg w-10 h-10 transition-colors shrink-0"
                >
                  <Icon className="w-8 h-8" style={{ color: stack.color }} />
                </a>
              </TooltipTrigger>

              <TooltipContent className="text-xs">{stack.name}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default SkillSection;
