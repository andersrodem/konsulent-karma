import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import Head from "next/head";
import { cn } from "@/lib/utils";
import type { Viewport, Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: 'Konsulentkarma.no - "Svartelisten" for konsulentselskap.',
  description:
    "Mistet sommerjobben/internship/graduate? Disse selskapene har kansellert sommerjobber, graduate-programmer eller nyansettelser i siste liten.",
  keywords: [
    "konsulent",
    "internship",
    "mistet sommerjobb",
    "svarteliste konsulentselskap",
    "konsulentkarma",
    "konsulentselskap internship",
  ],
  metadataBase: new URL("https://www.konsulentkarma.no"),
  openGraph: {
    siteName: 'Konsulentkarma.no - "Svartelisten" for konsulentselskap.',
    type: "website",
    description:
      "Mistet sommerjobben/internship/graduate? Disse selskapene har kansellert sommerjobber, graduate-programmer eller nyansettelser i siste liten.",
    locale: "NO",
    images: {
      url: "/opengraph-image.jpg", // replace with your image url
      width: 1200, // replace with your image width
      height: 680, // replace with your image height
      alt: "Mistet sommerjobben/internship/graduate? Disse selskapene har kansellert sommerjobber, graduate-programmer eller nyansettelser i siste liten.", // replace with your image description
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://www.konsulentkarma.no/rss.xml",
    },
  },
  applicationName: 'Konsulentkarma.no - "Svartelisten" for konsulentselskap',
  appleWebApp: {
    title: 'Konsulentkarma.no - "Svartelisten" for konsulentselskap',
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google:
      "google-site-verification=9JFFHstlt6c5zlDRpbBHMX5DtwmJMhY0Nir8fxEh5l0",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
        <Analytics />

        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "e21d9c388670427699c97fecfae0f627"}'
        ></script>
      </body>
    </html>
  );
}
