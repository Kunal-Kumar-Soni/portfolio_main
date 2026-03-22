"use client";
import { Search } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";

const DATA = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/blogs", label: "Blogs" },
  { href: "/resume", label: "Resume" },
];

const Navbar = () => {
  return (
    <nav className="top-0 z-50 sticky bg-background/80 backdrop-blur-lg border-border border-b w-full">
      <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-3xl">
        {/* Links */}
        <div className="flex items-center gap-6 sm:gap-8 font-semibold text-sm">
          {DATA.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-muted-foreground hover:text-foreground transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 bg-muted hover:bg-accent px-3 py-1.5 border border-border rounded-full text-muted-foreground hover:text-foreground text-sm transition">
            <Search size={14} />
            <span className="text-xs tracking-wide">Ctrl K</span>
          </div>

          <Search size={14} className="sm:hidden" />

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
