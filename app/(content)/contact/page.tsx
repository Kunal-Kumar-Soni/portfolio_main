import { Metadata } from "next";

import Container from "@/components/common/Container";
import Reveal from "@/components/common/Revel";
import ContactForm from "@/components/content/contact-form";

export const metadata: Metadata = {
  title: "Contact - Get in touch",
};

const page = () => {
  return (
    <Container>
      <Reveal>
        <ContactForm />
      </Reveal>
    </Container>
  );
};

export default page;
