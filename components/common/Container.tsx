import React from "react";

import { cn } from "@/lib/utils";

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
        `bg-background fill-mode-both font-hankenGrotesk text-foreground w-full pt-5 pb-10 ${className}`,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
