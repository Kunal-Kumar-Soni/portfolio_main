import ContactForm from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Get in touch",
};

const ContactSection = () => {
  return (
    <div className="bg-background fill-mode-both pt-15 sm:pt-20 w-full font-geistMono text-foreground animate-in duration-700 ease-linear fade-in">
      <ContactForm />
    </div>
  );
};

export default ContactSection;
