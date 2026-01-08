import { Separator } from "../ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background mx-auto px-4 pt-10 pb-30 w-full max-w-3xl font-geistMono">
      <Separator />

      <p className="mt-4 text-muted-foreground text-sm text-center">
        © {currentYear} <span className="font-medium text-foreground">Kunal Kumar Soni</span>. All
        rights reserved.
      </p>

      <p className="mt-2 text-muted-foreground text-sm text-center">
        Inspired by{" "}
        <a
          href="https://ramx.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline transition"
        >
          Ram
        </a>{" "}
        &{" "}
        <a
          href="https://chanhdai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline transition"
        >
          Chánh Đại
        </a>
      </p>
    </footer>
  );
}
