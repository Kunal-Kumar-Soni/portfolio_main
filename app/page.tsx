import ExperienceSection from "@/components/home/experience-section";
import HeroSection from "@/components/home/hero-section";

const page = () => {
  return (
    <div className="bg-background fill-mode-both py-15 sm:py-20 w-full font-geistMono text-foreground animate-in duration-700 ease-linear fade-in">
      <HeroSection />
      <ExperienceSection />
    </div>
  );
};

export default page;
