import Image from "next/image";
import { Separator } from "../ui/separator";

const AboutSection = () => {
  return (
    <section className="mx-auto mt-8 px-4 max-w-3xl">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm tracking-widest">About</p>
        <h1 className="mt-0.5 font-ibmPlexSans font-bold text-3xl">Me</h1>
      </div>

      {/* Content */}
      <div className="flex md:flex-row flex-col items-start md:items-center gap-10">
        {/* Image */}
        <div className="shrink-0">
          <Image
            src="/logo/logo.jpg"
            alt="Kunal Kumar Soni"
            width={220}
            height={220}
            className="border border-border rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h2 className="font-ibmPlexSans font-semibold text-2xl tracking-wide">
            Kunal Kumar Soni
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed">
            I’m a <strong className="font-medium text-foreground">frontend developer</strong> who
            blends <strong className="font-medium text-foreground">UI and UX</strong> to build
            clean, intuitive, and user-friendly websites with a smooth user experience.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
