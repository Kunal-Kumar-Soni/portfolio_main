import { Separator } from "../ui/separator";
import { STACKS } from "@/data/skills-info";
import SkillIcon from "../ui/skill-icon";

const SkillSection = () => {
  return (
    <div className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm tracking-widest">Expertise</p>
        <h1 className="font-ibmPlexSans font-bold text-3xl">Stack</h1>
      </div>

      <div className="flex flex-wrap gap-3">
        {STACKS.map((stack, i) => (
          <SkillIcon
            key={i}
            name={stack.name}
            link={stack.link}
            icon={stack.icon}
            image={stack.image}
            color={stack.color}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
