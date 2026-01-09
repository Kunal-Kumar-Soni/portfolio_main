import Image from "next/image";
import { Separator } from "../ui/separator";
import TechBadge from "@/components/ui/tech-bage";

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
      <div className="flex sm:flex-row flex-col justify-between items-start gap-2 mb-6">
        {/* Left Side: Logo & Title */}
        <div className="flex gap-4">
          <div className="flex justify-center items-center bg-muted/40 ring-border/50 rounded-xl ring-1 w-12 h-12 shrink-0">
            <Image
              height={40}
              width={40}
              src={"/meta_scifor_technologies.jpg"}
              alt="company's_logo"
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex items-start gap-3">
            <div className="flex flex-col justify-center">
              <h3 className="font-ibmPlexSans font-semibold text-md sm:text-lg leading-tight tracking-normal sm:tracking-wide">
                Meta Scifor Technologies
              </h3>

              <p className="text-muted-foreground text-sm -tracking-wider">
                Frontend Developer Intern
              </p>
            </div>
            {/*  Working Badge */}
            <div className="inline-flex items-center gap-1 bg-green-500/10 px-1.5 py-0.5 border border-green-500/20 rounded-sm h-fit shrink-0">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 bg-green-400 opacity-75 rounded-full animate-ping"></span>
                <span className="relative bg-green-500 rounded-full w-2 h-2"></span>
              </span>
              <span className="font-bold text-[12px] text-green-500 tracking-tighter sm:tracking-wider">
                Working
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Date & Location */}
        <div className="flex flex-col sm:items-end ml-16 sm:ml-0 text-left sm:text-right">
          <p className="font-medium text-muted-foreground text-sm">Oct 2025 - Present</p>
          <p className="text-muted-foreground text-sm">India (Remote)</p>
        </div>
      </div>

      <div>
        <h2 className="mb-4 font-ibmPlexSans font-semibold tracking-wider">Technologies & Tools</h2>

        {/* Badges Container */}
        <div className="flex flex-wrap gap-3 mt-2">
          <TechBadge tech="react" />
          <TechBadge tech="nextjs" />
          <TechBadge tech="typescript" />
          <TechBadge tech="tailwind" />
        </div>

        {/* Experience Details - Points format is better */}
        <div className="space-y-3 mt-5">
          {/* Point 1 */}
          <div className="group flex items-start gap-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <div className="flex items-center h-6 shrink-0">
              <div className="bg-zinc-600 rounded-full w-1.5 h-1.5" />
            </div>
            <p>
              Built responsive and reusable UI components for an LMS platform using React and
              Next.js.
            </p>
          </div>

          {/* Point 2 */}
          <div className="group flex items-start gap-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
            {/* Dot Wrapper */}
            <div className="flex items-center h-6 shrink-0">
              <div className="bg-zinc-600 rounded-full w-1.5 h-1.5" />
            </div>
            <p>
              Followed clean component architecture and modern UI practices to improve usability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
