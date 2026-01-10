import Link from "next/link";

export function IconBadge({
  icon,
  text,
  link,
}: {
  icon: React.ReactNode;
  text: string;
  link: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex justify-center items-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md outline outline-zinc-200 dark:outline-zinc-700 outline-offset-2 w-7 h-7 text-zinc-500 dark:text-zinc-400">
        <span className="w-4 h-4">{icon}</span>
      </span>

      <Link
        href={link}
        target="_blank"
        className={`text-sm sm:text-[15px] tracking-wider cursor-default ${
          link !== "#" && "hover:underline cursor-pointer"
        }`}
      >
        {text}
      </Link>
    </div>
  );
}
