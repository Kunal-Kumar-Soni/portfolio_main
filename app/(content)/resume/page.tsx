import ResumeSection from "@/components/main/resume-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Kunal Kumar Soni",
};

const page = () => {
  return (
    <div className="bg-background fill-mode-both pt-15 sm:pt-20 w-full font-geistMono text-foreground animate-in duration-700 ease-linear fade-in">
      <ResumeSection />
    </div>
  );
};

export default page;
