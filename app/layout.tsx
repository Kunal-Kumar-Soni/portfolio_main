import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";

import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import { HapticHandler } from "@/components/common/HapticHandler";
import Navbar from "@/components/common/Navbar";
import Quote from "@/components/common/Quote";
import Reveal from "@/components/common/Revel";
import { ThemeProvider } from "@/components/common/ThemeProvider";

import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hankenGrotesk",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kunalkumarsoni.in"),

  title: "Kunal Kumar Soni - Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Kunal Kumar Soni is a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, and modern web technologies. Explore his portfolio, projects, and experience.",

  applicationName: "Kunal Kumar Soni",

  appleWebApp: {
    title: "Kunal Kumar Soni",
  },
  keywords: [
    "Kunal Kumar Soni",
    "Kunal Kumar Soni Developer",
    "Kunal Kumar Soni Portfolio",
    "Full Stack Developer",
    "Full Stack Developer India",
    "Full Stack Web Developer",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "Full Stack Developer Portfolio",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Kunal Kumar Soni", url: "https://kunalkumarsoni.in" }],
  creator: "Kunal Kumar Soni",
  publisher: "Kunal Kumar Soni",
  category: "technology",

  alternates: {
    canonical: "https://kunalkumarsoni.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Kunal Kumar Soni - Full Stack Developer",
    description:
      "Full Stack Developer building modern and scalable web applications with React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
    url: "https://kunalkumarsoni.in",
    siteName: "Kunal Kumar Soni",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kunal Kumar Soni - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kunal Kumar Soni - Full Stack Developer",
    description:
      "Full Stack Developer building modern and scalable web applications with React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kunal Kumar Soni",
    url: "https://kunalkumarsoni.in",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kunal Kumar Soni",
    url: "https://kunalkumarsoni.in",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/Kunal-Kumar-Soni",
      "https://www.linkedin.com/in/kunal-kumar-soni",
    ],
    knowsAbout: [
      "Full Stack Development",
      "Web Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${hankenGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HapticHandler />
          <Navbar />
          {children}
          <BackToTop />
          <Reveal>
            <Quote />
          </Reveal>
          <Reveal>
            <Footer />
          </Reveal>
        </ThemeProvider>
      </body>
    </html>
  );
}
