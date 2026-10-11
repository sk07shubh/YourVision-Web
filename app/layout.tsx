import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { AmbientBackground } from "@/components/ambient-background";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = { title: { default: "YourVision — See Your Code Think", template: "%s | YourVision" }, description: "Understand algorithm execution visually. Inspect changing data structures and build stronger DSA intuition.", metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><AmbientBackground /><SiteHeader />{children}<SiteFooter /></body></html>; }