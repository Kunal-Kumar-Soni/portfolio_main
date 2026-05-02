import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";

import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import { HapticHandler } from "@/components/common/HapticHandler";
import Navbar from "@/components/common/Navbar";
import Quote from "@/components/common/Quote";
import { ThemeProvider } from "@/components/common/ThemeProvider";

import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hankenGrotesk",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kunalkumarsoni.in"),
  title: "Kunal Kumar Soni - Frontend Developer",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Kunal Kumar Soni is a Frontend Developer specializing in Next.js, React, and modern web technologies. Explore his portfolio and projects.",
  applicationName: "Kunal Kumar Soni",
  appleWebApp: {
    title: "Kunal Kumar Soni",
  },
  keywords: [
    "Kunal Kumar Soni",
    "Kunal Kumar Soni portfolio",
    "Software Developer",
    "Frontend Developer",
    "Frontend Developer India",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Portfolio Website",
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
    title: "Kunal Kumar Soni - Frontend Developer",
    description:
      "Kunal Kumar Soni is a Frontend Developer specializing in Next.js, React, and modern web technologies. Explore his portfolio and projects.",
    url: "https://kunalkumarsoni.in",
    siteName: "Kunal Kumar Soni",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://kunalkumarsoni.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kunal Kumar Soni - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kunal Kumar Soni - Frontend Developer",
    description:
      "Kunal Kumar Soni is a Frontend Developer specializing in Next.js, React, and modern web technologies. Explore his portfolio and projects.",
    images: ["https://kunalkumarsoni.in/og-image.png"],
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
    name: "KunalCodes",
    url: "https://kunalkumarsoni.in",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kunal Kumar Soni",
    url: "https://kunalkumarsoni.in",
    sameAs: [
      "https://github.com/Kunal-Kumar-Soni",
      "https://www.linkedin.com/in/kunal-kumar-soni",
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
          <Quote />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
