import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IoSendSharp } from "react-icons/io5";

export default function ContactSection() {
  return (
    <section className="bg-background py-20 w-full font-geistMono text-foreground">
      <div className="mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-ibmPlexSans font-semibold text-4xl sm:text-5xl text-center tracking-tight">
            Contact
          </h1>
          <p className="mt-4 text-muted-foreground text-lg text-center">
            Have a question or project idea? I’ll get back to you soon.
          </p>
        </div>

        {/* Form Card */}
        <Card className="bg-background">
          <CardHeader className="font-ibmPlexSans font-bold text-2xl">Let’s Connect</CardHeader>

          <CardContent>
            <form className="space-y-10">
              {/* Name + Phone */}
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="mb-2 font-medium text-sm">
                    Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="bg-background mt-1 px-4 py-2.5 border border-border focus:border-transparent rounded-lg outline-none focus:ring-2 focus:ring-ring w-full text-sm transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phoneNumber" className="mb-2 font-medium text-sm">
                    Phone*
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    placeholder="+91 9XXXXXXXXX"
                    className="bg-background mt-1 px-4 py-2.5 border border-border focus:border-transparent rounded-lg outline-none focus:ring-2 focus:ring-ring w-full text-sm transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="mb-2 font-medium text-sm">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="bg-background mt-1 px-4 py-2.5 border border-border focus:border-transparent rounded-lg outline-none focus:ring-2 focus:ring-ring w-full text-sm transition"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="mb-2 font-medium text-sm">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  placeholder="Briefly describe your idea or question..."
                  className="bg-background mt-1 px-4 py-3 border border-border focus:border-transparent rounded-lg outline-none focus:ring-2 focus:ring-ring w-full text-sm transition resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-foreground hover:opacity-90 px-6 py-2.5 rounded-lg font-medium text-background text-sm transition cursor-pointer"
                >
                  Send Message
                  <IoSendSharp />
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
