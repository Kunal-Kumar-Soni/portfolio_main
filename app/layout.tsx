import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import { HapticHandler } from "@/components/common/HapticHandler";
import Navbar from "@/components/common/Navbar";
import Quotes from "@/components/common/Quotes";
import { ThemeProvider } from "@/components/common/ThemeProvider";

import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hankenGrotesk",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kunalkumarsoni.in"),
  title: "Kunal Kumar Soni - Frontend Developer Portfolio",
  description:
    "Hi, I'm Kunal Kumar Soni, a frontend developer specializing in Next.js, React, and modern web technologies. Explore my projects and portfolio.",

  keywords: [
    "Kunal Kumar Soni",
    "Kunal Kumar Soni portfolio",
    "Frontend Developer India",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Kunal Kumar Soni" }],
  creator: "Kunal Kumar Soni",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Kunal Kumar Soni - Frontend Developer",
    description:
      "Frontend Developer specializing in Next.js and React. Explore my portfolio and projects.",
    url: "https://kunalkumarsoni.in",
    siteName: "Kunal Kumar Soni Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kunal Kumar Soni - Frontend Developer",
    description: "Frontend Developer specializing in Next.js and React.",
    images: ["/og-image.jpg"],
  },
};

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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kunal Kumar Soni",
              url: "https://kunalkumarsoni.in",
              image: "https://kunalkumarsoni.in/og-image.jpg",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/Kunal-Kumar-Soni",
                "https://www.linkedin.com/in/kunal-kumar-soni",
              ],
            }),
          }}
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
          <Quotes />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
