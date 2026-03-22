import { Separator } from "../ui/separator";
import { skillsIcon } from "@/components/ui/skills-icon";
import { skills } from "@/data/skills";

const SkillSection = () => {
  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk font-bold text-3xl">Stack</h1>
      </div>

      {/* Skills */}
      <div>{skillsIcon(skills)}</div>
    </div>
  );
};

export default SkillSection;
