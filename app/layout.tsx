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
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${hankenGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
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
