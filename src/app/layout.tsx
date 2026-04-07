import type { Metadata } from "next";
import { Inter, Raleway, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltican Inc — AI-Powered Business Transformation",
  description:
    "Global management consulting, technology services, and AI solutions. 15+ years helping enterprises transform with data, cloud, and artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${raleway.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Global Navbar — visible on every route, hidden on print */}
        <div className="print:hidden">
          <Navbar />
        </div>
        {/*
          PageTransition forces React to remount page content on every route
          change (including browser Back), which resets Framer Motion's
          whileInView state so animations replay correctly.
        */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
