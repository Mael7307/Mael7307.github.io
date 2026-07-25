import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Maël Jullien — AI R&D Engineer",
    template: "%s — Maël Jullien",
  },
  description: "Maël Jullien builds and evaluates agentic AI systems, retrieval-grounded reasoning methods, and reliable frameworks for complex language tasks.",
  authors: [{ name: "Maël Jullien" }],
  creator: "Maël Jullien",
  openGraph: {
    type: "website",
    title: "Maël Jullien — AI R&D Engineer",
    description: "Agentic AI systems, rigorous evaluation, and retrieval-grounded reasoning for complex language tasks.",
    siteName: "Maël Jullien",
    url: "/",
    images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "Maël Jullien — AI R&D Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maël Jullien — AI R&D Engineer",
    description: "Agentic AI systems, rigorous evaluation, and retrieval-grounded reasoning for complex language tasks.",
    images: ["/social-card.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
