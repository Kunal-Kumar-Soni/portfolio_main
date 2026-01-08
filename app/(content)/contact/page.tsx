import ContactForm from "@/components/content/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Get in touch",
};

const page = () => {
  return (
    <div className="bg-background fill-mode-both pt-15 sm:pt-20 w-full font-geistMono text-foreground animate-in duration-700 ease-linear fade-in">
      <ContactForm />
    </div>
  );
};

export default page;
