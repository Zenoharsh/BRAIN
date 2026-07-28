import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import SiteBackground from "@/components/SiteBackground";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRAIN Foundation",
  description: "Building a knowledge-driven future for Bihar.",
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
      className={`${dmSans.variable} ${outfit.variable} antialiased scroll-smooth font-sans`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}</style>
      </head>
      <body className="bg-gradient-to-b from-[#f6faff] to-[#ffffff] dark:from-[#090b0d] dark:to-[#11151a] min-h-screen bg-fixed flex flex-col font-sans text-on-surface dark:text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Experimental Background Element */}
          <SiteBackground />
          
          <div className="relative z-0">
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
