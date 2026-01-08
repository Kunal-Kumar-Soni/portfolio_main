import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `bg-background fill-mode-both py-15 sm:py-20 w-full font-geistMono text-foreground animate-in duration-700 ease-linear fade-in ${className}`
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
