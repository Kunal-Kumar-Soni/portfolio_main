"use client";

import React from "react";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const ResumeSection = () => {
  return (
    <section className="mx-auto px-4 max-w-3xl">
      {/* Header */}
      <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-3 mb-6">
        <div>
          <h1 className="font-semibold text-2xl sm:text-3xl">Resume</h1>
          <p className="mt-1 text-muted-foreground text-sm">View or download my resume</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button asChild>
            <Link
              href="https://drive.google.com/file/d/1j0duZnwpb9H1lkTkiOPmiUhqlTz0im8L/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-sm hover:shadow-lg text-sm active:scale-95 transition-all hover:-translate-y-1 duration-300"
            >
              <ExternalLink size={16} />
              Open
            </Link>
          </Button>

          <Button variant={"secondary"} asChild>
            <Link
              href="/documents/Kunal's_Resume.pdf"
              download
              className="shadow-sm hover:shadow-lg text-sm active:scale-95 transition-all hover:-translate-y-1 duration-300"
            >
              <Download size={16} />
              Download
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative bg-background shadow-sm border">
        <div>
          <iframe
            src="/documents/Kunal's_Resume.pdf/#toolbar=0&navpanes=0"
            className="w-full min-h-screen"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
