import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const ResumeSection = () => {
  const url = "https://drive.google.com/file/d/14noj-TB1F7P8fyFwTVHOekVVRPcLQskq/view"
  return (
    <section className="mx-auto px-4 max-w-3xl">

      <div className="mb-10">
        <h1 className="font-ibmPlexSans font-semibold text-4xl sm:text-5xl text-center tracking-tight">
          Resume
        </h1>
        <p className="mt-4 text-muted-foreground text-lg text-center">
          View my resume to explore my skills, experience, and projects.
        </p>
      </div>
      <Separator className='my-10' />

      {/* Buttons */}
      <div className="flex justify-end items-end gap-3 mb-6">
        <Button asChild>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            Open
          </Link>
        </Button>

        <Button variant={"secondary"} asChild>
          <Link
            href="/documents/Kunal's_Resume.pdf"
            download
          >
            <Download size={16} />
            Download
          </Link>
        </Button>
      </div>

      {/* Resume PDF */}
      <div className="relative bg-background shadow-sm border">
        <div>
          <iframe
            src={url}
            className="w-full min-h-screen"
          />
        </div>
      </div>

    </section>
  );
};

export default ResumeSection;
