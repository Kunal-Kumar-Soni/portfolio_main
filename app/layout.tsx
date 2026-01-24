import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import Quotes from "@/components/common/Quotes";
import BackToTop from "@/components/common/BackToTop";
import { Suspense } from "react";
import BlurLoader from "@/components/common/BlurLoader";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibmPlexSans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geistMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kunal - Frontend Developer",
  description:
    "Frontend Developer focused on creating clean, responsive, and high-performance web applications using modern frontend technologies.",
  keywords: [
    "Kunal Kumar Soni",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "UI Developer",
  ],
  authors: [{ name: "Kunal Kumar Soni" }],
  creator: "Kunal Kumar Soni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${geistMono.variable} ${ibmPlexSans.variable}  antialiased `}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<BlurLoader />}>
            <Navbar />
            {children}
            <BackToTop />
            <Quotes />
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
