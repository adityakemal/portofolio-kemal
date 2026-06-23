import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — Principal Full-Stack Engineer & AI Product Founder`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Kemal Aditya",
    "Full-Stack Engineer",
    "AI Engineer Indonesia",
    "React Developer",
    "Next.js Developer",
    "Blazor .NET Developer",
    "Elysia Bun Developer",
    "sesaKu",
    "Frontend Architect",
    "Software Engineer Bandung",
    "BRI Developer",
    "Pertamina Developer",
    "Freelance Engineer Indonesia",
    "AI Product Builder",
    "Portfolio",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  openGraph: {
    title: `${DATA.name} — Principal Full-Stack Engineer & AI Product Founder`,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name} — Principal Full-Stack Engineer`,
    description: DATA.description,
    card: "summary_large_image",
  },
  alternates: {
    canonical: DATA.url,
  },
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    jobTitle: "Principal Full-Stack Engineer & AI Product Founder",
    description: DATA.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressCountry: "ID",
    },
    sameAs: [
      "https://www.linkedin.com/in/kemal-aditya-z-b4276614a/",
      "https://sesaku.id",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Blazor",
      ".NET",
      "Elysia",
      "Bun",
      "PostgreSQL",
      "Docker",
      "AI Integration",
      "DeepSeek",
      "Mistral AI",
      "React Native",
      "PWA",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 xl:px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
