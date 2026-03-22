"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { COMMAND_DATA } from "@/data/command-data";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function CommandCenter() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();

  const handleSelect = (path: string) => {
    if (path !== pathName) {
      router.push(path);
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex">
        <button
          onClick={() => setOpen(true)}
          className="hidden sm:flex items-center gap-2 bg-muted/50 px-3 py-1.5 border border-border rounded-full text-muted-foreground hover:text-foreground text-sm active:scale-95 transition"
        >
          <Search size={14} />
          <div className="flex gap-1">
            <span className="bg-foreground/15 px-1.5 py-0.5 rounded font-medium text-[12px]">
              Ctrl
            </span>
            <span className="bg-foreground/15 px-1.5 py-0.5 rounded font-medium text-[12px]">
              K
            </span>
          </div>
        </button>

        {/* Mobile Button */}
        <button onClick={() => setOpen(true)}>
          <Search size={14} className="sm:hidden" />
        </button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList className="no-scrollbar">
            <CommandEmpty>No results found.</CommandEmpty>
            {COMMAND_DATA.map((group, i) => (
              <div key={group.heading}>
                <CommandGroup heading={group.heading}>
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <CommandItem
                        key={item.label}
                        onSelect={() => {
                          handleSelect(item.path);
                        }}
                        className="cursor-pointer"
                      >
                        <Icon size={16} />
                        <span>{item.label}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>

                {i !== COMMAND_DATA.length - 1 && <CommandSeparator />}
              </div>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
