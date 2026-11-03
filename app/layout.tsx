import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NCR Maps | Master Layout Plans & Sector Maps for Noida, Greater Noida & YEIDA",
  description: "Explore verified master layout plans, sector-wise maps, and high-resolution layout blueprints for Noida, Greater Noida, and Yamuna Expressway.",
  openGraph: {
    title: "NCR Maps | Master Layout Plans & Sector Maps",
    description: "Explore verified master layout plans, sector-wise maps, and high-resolution layout blueprints for Noida, Greater Noida, and Yamuna Expressway.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased dark", jakarta.variable, cormorant.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
